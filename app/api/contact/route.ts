import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { logger } from '@/lib/logger';
import { consumeRateLimit } from '@/lib/security/rate-limit';
import { getClientIp } from '@/lib/security/ip';

const CONTACT_RATE_LIMIT = 5;
const CONTACT_RATE_WINDOW_MS = 60 * 60 * 1000;

const contactSchema = z
  .object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    company: z.string().max(200).optional().default(''),
    employees: z.enum(['1-5', '6-10', '10-50', '50-150', '150-250', '250+']),
    requestType: z.enum(['it-check', 'recruiter', 'managed-service', 'strategic-it']),
    message: z.string().min(10).max(5000),
    customerIndustry: z.string().max(200).optional().default(''),
    projectDescription: z.string().max(5000).optional().default(''),
    roleGoal: z.string().max(500).optional().default(''),
    duration: z.string().max(200).optional().default(''),
    workMode: z.string().max(200).optional().default(''),
    budgetRange: z.string().max(200).optional().default(''),
    decisionStatus: z.string().max(200).optional().default(''),
    _gotcha: z
      .string()
      .default('')
      .refine((v) => v === '', { message: 'Invalid submission' }),
  })
  .superRefine((data, ctx) => {
    if (data.requestType !== 'recruiter') return;

    const requiredRecruiterFields: Array<{ key: keyof typeof data; label: string }> = [
      { key: 'customerIndustry', label: 'Kunde / Branche' },
      { key: 'projectDescription', label: 'Projektbeschreibung' },
      { key: 'roleGoal', label: 'Rolle / Zielsetzung' },
      { key: 'duration', label: 'Laufzeit' },
      { key: 'workMode', label: 'Remote / Vor Ort' },
      { key: 'budgetRange', label: 'Budget / Tagessatzrahmen' },
      { key: 'decisionStatus', label: 'Entscheidungsstatus' },
    ];

    requiredRecruiterFields.forEach(({ key, label }) => {
      if (!String(data[key] ?? '').trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [key],
          message: `${label} ist erforderlich.`,
        });
      }
    });
  });

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function requestTypeLabel(type: 'it-check' | 'recruiter' | 'managed-service' | 'strategic-it') {
  switch (type) {
    case 'it-check':
      return 'IT-Check';
    case 'recruiter':
      return 'Projektanfrage / Recruiter';
    case 'managed-service':
      return 'Managed Service';
    case 'strategic-it':
      return 'Strategische IT-Betreuung';
    default:
      return type;
  }
}

export async function POST(req: NextRequest) {
  const ip = await getClientIp();

  const rate = consumeRateLimit({ key: `contact:${ip}`, limit: CONTACT_RATE_LIMIT, windowMs: CONTACT_RATE_WINDOW_MS });
  if (!rate.allowed) {
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

  const {
    name,
    email,
    company,
    employees,
    requestType,
    message,
    customerIndustry,
    projectDescription,
    roleGoal,
    duration,
    workMode,
    budgetRange,
    decisionStatus,
  } = result.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    logger.error('contact.smtp_unconfigured', {
      missing: [!SMTP_HOST && 'SMTP_HOST', !SMTP_USER && 'SMTP_USER', !SMTP_PASS && 'SMTP_PASS'].filter(Boolean),
    });
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
  const recruiterExtraRows =
    requestType === 'recruiter'
      ? `
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Kunde / Branche</td>
        <td style="padding:10px 14px">${escapeHtml(customerIndustry || '–')}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444;vertical-align:top">Projektbeschreibung</td>
        <td style="padding:10px 14px;white-space:pre-wrap">${escapeHtml(projectDescription || '–')}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Rolle / Zielsetzung</td>
        <td style="padding:10px 14px">${escapeHtml(roleGoal || '–')}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444">Laufzeit</td>
        <td style="padding:10px 14px">${escapeHtml(duration || '–')}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Remote / Vor Ort</td>
        <td style="padding:10px 14px">${escapeHtml(workMode || '–')}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444">Budget / Tagessatzrahmen</td>
        <td style="padding:10px 14px">${escapeHtml(budgetRange || '–')}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Entscheidungsstatus</td>
        <td style="padding:10px 14px">${escapeHtml(decisionStatus || '–')}</td>
      </tr>
    `
      : '';

  const html = `
    <h2 style="font-family:sans-serif;color:#111">Neue Kontaktanfrage</h2>
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:700px">
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;width:180px;color:#444">Name</td>
        <td style="padding:10px 14px">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">E-Mail</td>
        <td style="padding:10px 14px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444">Anfragetyp</td>
        <td style="padding:10px 14px">${escapeHtml(requestTypeLabel(requestType))}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#444">Unternehmen</td>
        <td style="padding:10px 14px">${escapeHtml(company || '–')}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:10px 14px;font-weight:600;color:#444">Mitarbeiter</td>
        <td style="padding:10px 14px">${escapeHtml(employees)}</td>
      </tr>
      ${recruiterExtraRows}
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
      subject: `Neue ${requestTypeLabel(requestType)}-Anfrage von ${name} (${company || 'k.A.'}) – Ecksolution`,
      html,
    });
    logger.info('contact.sent', {
      email,
      requestType,
      company: company || undefined,
      employees,
      to: toEmail,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    logger.error('contact.send_failed', { email, requestType, error: err instanceof Error ? err.message : String(err) });
    return NextResponse.json(
      {
        error:
          'Versandfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@ecksolution-it.de.',
      },
      { status: 500 },
    );
  }
}
