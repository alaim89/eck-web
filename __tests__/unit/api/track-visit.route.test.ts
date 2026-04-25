import { beforeEach, describe, expect, it, vi } from 'vitest'

const { consumeRateLimitMock, recordVisitorEventMock, hashIpMock, loggerMock, captureExceptionMock, captureMessageMock } =
  vi.hoisted(() => ({
    consumeRateLimitMock: vi.fn(),
    recordVisitorEventMock: vi.fn(),
    hashIpMock: vi.fn(),
    loggerMock: {
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    },
    captureExceptionMock: vi.fn(),
    captureMessageMock: vi.fn(),
  }))

vi.mock('@/lib/security/rate-limit', () => ({
  consumeRateLimit: consumeRateLimitMock,
}))

vi.mock('@/lib/analytics/visitors', () => ({
  hashIp: hashIpMock,
  recordVisitorEvent: recordVisitorEventMock,
}))

vi.mock('@/lib/logger', () => ({
  logger: loggerMock,
}))

vi.mock('@sentry/nextjs', () => ({
  captureException: captureExceptionMock,
  captureMessage: captureMessageMock,
}))

import { POST } from '@/app/api/track/visit/route'

describe('POST /api/track/visit', () => {
  const validPayload = {
    session_id: 'sess-12345678',
    page_url: '/kontakt?utm_source=google',
    referrer: 'https://example.com',
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'spring',
    device_type: 'desktop',
    browser: 'Chrome',
    event_ts: Date.now(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    hashIpMock.mockReturnValue('abcd1234hash')
    consumeRateLimitMock.mockReturnValue({ allowed: true, remaining: 119, resetAt: Date.now() + 1000 })
  })

  it('speichert nur zulässige Felder im Tracking-Write und keine Header/Cookies', async () => {
    const request = new Request('http://localhost/api/track/visit', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer secret-token',
        cookie: 'admin_user_email=ops@example.com',
        'x-forwarded-for': '203.0.113.9',
      },
      body: JSON.stringify(validPayload),
    })

    const response = await POST(request)
    expect(response.status).toBe(200)
    expect(recordVisitorEventMock).toHaveBeenCalledTimes(1)

    const payload = recordVisitorEventMock.mock.calls[0][0] as Record<string, unknown>
    expect(Object.keys(payload).sort()).toEqual(
      [
        'browser',
        'device_type',
        'ip_hash',
        'page_url',
        'referrer',
        'session_id',
        'utm_campaign',
        'utm_medium',
        'utm_source',
      ].sort()
    )
    expect(payload.ip_hash).toBe('abcd1234hash')
    expect(payload).not.toHaveProperty('authorization')
    expect(payload).not.toHaveProperty('cookie')
    expect(payload).not.toHaveProperty('email')
    expect(payload).not.toHaveProperty('name')
    expect(payload).not.toHaveProperty('user_agent')
  })

  it('begrenzt Bot-Spam mit 429 bei überschrittenem Limit', async () => {
    consumeRateLimitMock.mockReturnValueOnce({ allowed: false, remaining: 0, resetAt: Date.now() + 1000 })
    const request = new Request('http://localhost/api/track/visit', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(validPayload),
    })

    const response = await POST(request)
    const body = await response.json()

    expect(response.status).toBe(429)
    expect(body.error).toBe('rate_limited')
    expect(recordVisitorEventMock).not.toHaveBeenCalled()
  })

  it('weist veraltete Events als Replay-Schutz ab', async () => {
    const request = new Request('http://localhost/api/track/visit', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...validPayload,
        event_ts: Date.now() - 16 * 60_000,
      }),
    })

    const response = await POST(request)
    const body = await response.json()

    expect(response.status).toBe(400)
    expect(body.error).toBe('stale_event')
    expect(recordVisitorEventMock).not.toHaveBeenCalled()
  })
})

