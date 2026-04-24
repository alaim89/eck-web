import { describe, expect, it } from 'vitest'
import { registerLeadSubmission, validateLeadPayload } from '@/lib/lead/intake'

describe('lead intake', () => {
  const payload = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@example.com',
    company: 'Analytical Engines GmbH',
    message: 'Bitte Beratungstermin',
    consent: true,
    isTest: true,
  }

  it('validates required lead payload', () => {
    const result = validateLeadPayload(payload)
    expect(result.email).toBe('ada@example.com')
  })

  it('marks repeated idempotency keys as duplicate', () => {
    const first = registerLeadSubmission('contact-form', payload, 'idem-1')
    const second = registerLeadSubmission('contact-form', payload, 'idem-1')

    expect(first.status).toBe('accepted')
    expect(second.status).toBe('duplicate')
    expect(first.leadReference).toBe(second.leadReference)
  })
})
