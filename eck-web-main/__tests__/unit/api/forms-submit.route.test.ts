import { beforeEach, describe, expect, it, vi } from 'vitest'

const { validateLeadPayloadMock, registerLeadSubmissionMock, queueLeadForCrmSyncMock } = vi.hoisted(() => ({
  validateLeadPayloadMock: vi.fn(),
  registerLeadSubmissionMock: vi.fn(),
  queueLeadForCrmSyncMock: vi.fn(),
}))

const { consumeRateLimitMock } = vi.hoisted(() => ({
  consumeRateLimitMock: vi.fn(),
}))

vi.mock('@/lib/lead/intake', () => ({
  validateLeadPayload: validateLeadPayloadMock,
  registerLeadSubmission: registerLeadSubmissionMock,
}))

vi.mock('@/lib/integrations/crm-sync', () => ({
  queueLeadForCrmSync: queueLeadForCrmSyncMock,
}))

vi.mock('@/lib/security/rate-limit', () => ({
  consumeRateLimit: consumeRateLimitMock,
}))

import { POST } from '@/app/api/v1/forms/[formId]/submit/route'

describe('POST /api/v1/forms/[formId]/submit', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 400 when idempotency key is missing', async () => {
    consumeRateLimitMock.mockReturnValueOnce({ allowed: true, remaining: 1, resetAt: Date.now() })
    const request = new Request('http://localhost/api/v1/forms/form-a/submit', {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const response = await POST(request, { params: Promise.resolve({ formId: 'form-a' }) })
    const body = await response.json()

    expect(response.status).toBe(400)
    expect(body.error).toBe('missing_idempotency_key')
    expect(validateLeadPayloadMock).not.toHaveBeenCalled()
  })

  it('returns 400 when consent is missing', async () => {
    consumeRateLimitMock.mockReturnValueOnce({ allowed: true, remaining: 1, resetAt: Date.now() })
    validateLeadPayloadMock.mockReturnValueOnce({
      consent: false,
    })

    const request = new Request('http://localhost/api/v1/forms/form-a/submit', {
      method: 'POST',
      headers: { 'x-idempotency-key': 'idem-1', 'content-type': 'application/json' },
      body: JSON.stringify({ consent: false }),
    })

    const response = await POST(request, { params: Promise.resolve({ formId: 'form-a' }) })
    const body = await response.json()

    expect(response.status).toBe(400)
    expect(body.error).toBe('missing_consent')
    expect(registerLeadSubmissionMock).not.toHaveBeenCalled()
  })

  it('registers lead and queues crm sync when payload is valid', async () => {
    consumeRateLimitMock.mockReturnValueOnce({ allowed: true, remaining: 1, resetAt: Date.now() })
    validateLeadPayloadMock.mockReturnValueOnce({
      firstName: 'Max',
      lastName: 'Mustermann',
      email: 'max@example.com',
      company: 'Beispiel GmbH',
      message: 'Hallo',
      consent: true,
      isTest: false,
    })

    registerLeadSubmissionMock.mockReturnValueOnce({
      status: 'accepted',
      leadReference: 'lead-ref-1',
    })

    queueLeadForCrmSyncMock.mockReturnValueOnce({
      duplicate: false,
      job: {
        status: 'queued',
        jobId: 'crm-job-1',
      },
    })

    const request = new Request('http://localhost/api/v1/forms/form-a/submit', {
      method: 'POST',
      headers: { 'x-idempotency-key': 'idem-2', 'content-type': 'application/json' },
      body: JSON.stringify({ consent: true }),
    })

    const response = await POST(request, { params: Promise.resolve({ formId: 'form-a' }) })
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.leadReference).toBe('lead-ref-1')
    expect(body.crmSync.jobId).toBe('crm-job-1')
    expect(registerLeadSubmissionMock).toHaveBeenCalledWith(
      'form-a',
      expect.objectContaining({ email: 'max@example.com' }),
      'idem-2'
    )
    expect(queueLeadForCrmSyncMock).toHaveBeenCalledWith({
      idempotencyKey: 'idem-2',
      leadReference: 'lead-ref-1',
      payload: expect.objectContaining({ email: 'max@example.com' }),
    })
  })

  it('returns 429 when rate limit is exceeded', async () => {
    consumeRateLimitMock.mockReturnValueOnce({ allowed: false, remaining: 0, resetAt: Date.now() + 1_000 })

    const request = new Request('http://localhost/api/v1/forms/form-a/submit', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ consent: true }),
    })

    const response = await POST(request, { params: Promise.resolve({ formId: 'form-a' }) })
    const body = await response.json()

    expect(response.status).toBe(429)
    expect(body.error).toBe('rate_limited')
    expect(validateLeadPayloadMock).not.toHaveBeenCalled()
  })
})
