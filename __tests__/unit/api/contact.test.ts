// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: 'test-message-id' }),
    })),
  },
}));

const SMTP_ENV = {
  SMTP_HOST: 'smtp.test.example.com',
  SMTP_PORT: '587',
  SMTP_USER: 'noreply@test.example.com',
  SMTP_PASS: 'testpassword',
  CONTACT_TO_EMAIL: 'info@test.example.com',
};

const VALID_BODY = {
  name: 'Max Mustermann',
  email: 'max@unternehmen.de',
  company: 'Muster GmbH',
  employees: '10-50',
  message: 'Das ist eine Testnachricht mit ausreichend Text.',
  _gotcha: '',
};

function makeRequest(body: unknown, ip = '1.2.3.4') {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': ip,
    },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  Object.assign(process.env, SMTP_ENV);
  vi.resetModules();
});

afterEach(() => {
  for (const key of Object.keys(SMTP_ENV)) {
    delete process.env[key];
  }
});

async function getHandler() {
  const { POST } = await import('@/app/api/contact/route');
  return POST;
}

describe('POST /api/contact', () => {
  describe('honeypot', () => {
    it('returns 422 when _gotcha is filled (bot detected)', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, _gotcha: 'spam' }, '10.0.0.1'));
      expect(res.status).toBe(422);
    });
  });

  describe('input validation', () => {
    it('returns 422 when name is too short', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, name: 'X' }, '10.0.0.2'));
      expect(res.status).toBe(422);
    });

    it('returns 422 for an invalid email address', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, email: 'not-an-email' }, '10.0.0.3'));
      expect(res.status).toBe(422);
    });

    it('returns 422 when message is too short', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, message: 'short' }, '10.0.0.4'));
      expect(res.status).toBe(422);
    });

    it('returns 422 for an invalid employees enum value', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, employees: '999-1000' }, '10.0.0.5'));
      expect(res.status).toBe(422);
    });

    it('returns 400 for malformed JSON body', async () => {
      const POST = await getHandler();
      const req = new NextRequest('http://localhost/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '10.0.0.6' },
        body: 'this is not json{',
      });
      const res = await POST(req);
      expect(res.status).toBe(400);
    });
  });

  describe('SMTP configuration', () => {
    it('returns 503 when SMTP_HOST is not configured', async () => {
      delete process.env.SMTP_HOST;
      const POST = await getHandler();
      const res = await POST(makeRequest(VALID_BODY, '10.0.1.1'));
      expect(res.status).toBe(503);
      const body = await res.json();
      expect(body.error).toMatch(/info@ecksolution-it\.de/);
    });
  });

  describe('rate limiting', () => {
    it('returns 429 after exceeding 5 requests from the same IP', async () => {
      const POST = await getHandler();
      const ip = '10.99.99.1';
      for (let i = 0; i < 5; i++) {
        await POST(makeRequest(VALID_BODY, ip));
      }
      const res = await POST(makeRequest(VALID_BODY, ip));
      expect(res.status).toBe(429);
    });

    it('allows requests from different IPs independently', async () => {
      const POST = await getHandler();
      for (let i = 0; i < 5; i++) {
        await POST(makeRequest(VALID_BODY, `10.99.${i}.1`));
      }
      const res = await POST(makeRequest(VALID_BODY, '10.99.100.1'));
      expect(res.status).toBe(200);
    });
  });

  describe('successful submission', () => {
    it('returns 200 with { ok: true } when SMTP is configured', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest(VALID_BODY, '10.1.1.1'));
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.ok).toBe(true);
    });

    it('accepts optional company field as empty string', async () => {
      const POST = await getHandler();
      const res = await POST(makeRequest({ ...VALID_BODY, company: '' }, '10.1.1.2'));
      expect(res.status).toBe(200);
    });
  });
});
