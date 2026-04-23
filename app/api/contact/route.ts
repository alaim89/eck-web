import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { logger } from '@/lib/logger';

// In-memory rate limit: max 5 submissions per IP per hour
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(200).optional().default(''),
  employees: z.enum(['1-5', '6-10', '10-50', '50-150', '150-250', '250+']),
  message: z.string().min(10).max(5000),
  _gotcha: z.string().default('').refine((v) => v === '', { message: 'Invalid submission' }),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

  if (!checkRateLimit(ip)) {
    logger.warn('contact.rate_limited', { ip });
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    logger.warn('contact.invalid_json', { ip });
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const first = result.error.issues[0];
    logger.warn('contact.validation_failed', { ip, field: first?.path?.join('.'), message: first?.message });
    return NextResponse.json(
      { error: `Validierungsfehler: ${first?.message ?? 'Ungültige Eingabe.'}` },
      { status: 422 },
    );
  }

  const { name, email, company, employees, message } = result.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    logger.error('contact.smtp_unconfigured', { missing: [!SMTP_HOST && 'SMTP_HOST', !SMTP_USER && 'SMTP_USER', !SMTP_PASS && 'SMTP_PASS'].filter(Boolean) });
    return NextResponse.json(
      {
        error:
          'Mailversand ist derzeit nicht konfiguriert. Bitte schreiben Sie uns direkt an info@ecksolution-it.de.',
      },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const toEmail = CONTACT_TO_EMAIL ?? 'info@ecksolution-it.de';

  const html = `
    <h2 style="font-family:sans-serif;color:#111">Neue Kontaktanfrage</h2>
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;width:140px;color:#444">Name</td>
        <td style="padding:10px 14px">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">E-Mail</td>
        <td style="padding:10px 14px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444">Unternehmen</td>
        <td style="padding:10px 14px">${escapeHtml(company || '–')}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Mitarbeiter</td>
        <td style="padding:10px 14px">${escapeHtml(employees)}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444;vertical-align:top">Anliegen</td>
        <td style="padding:10px 14px;white-space:pre-wrap">${escapeHtml(message)}</td>
      </tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Ecksolution Kontakt" <${SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `Neue Anfrage von ${name} (${company || 'k.A.'}) – Ecksolution`,
      html,
    });
    logger.info('contact.sent', { email, company: company || undefined, employees, to: toEmail });
    return NextResponse.json({ ok: true });
  } catch (err) {
    logger.error('contact.send_failed', { email, error: err instanceof Error ? err.message : String(err) });
    return NextResponse.json(
      {
        error:
          'Versandfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@ecksolution-it.de.',
      },
      { status: 500 },
    );
  }
}
