// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/health/route';

describe('GET /api/health', () => {
  it('returns HTTP 200', async () => {
    const res = await GET();
    expect(res.status).toBe(200);
  });

  it('returns status: ok', async () => {
    const res = await GET();
    const body = await res.json();
    expect(body.status).toBe('ok');
  });

  it('returns a valid ISO timestamp', async () => {
    const res = await GET();
    const { timestamp } = await res.json();
    expect(typeof timestamp).toBe('string');
    expect(new Date(timestamp).toISOString()).toBe(timestamp);
  });

  it('returns uptime as a non-negative integer', async () => {
    const res = await GET();
    const { uptime } = await res.json();
    expect(typeof uptime).toBe('number');
    expect(uptime).toBeGreaterThanOrEqual(0);
    expect(Number.isInteger(uptime)).toBe(true);
  });

  it('returns env field', async () => {
    const res = await GET();
    const { env } = await res.json();
    expect(typeof env).toBe('string');
    expect(env.length).toBeGreaterThan(0);
  });
});
