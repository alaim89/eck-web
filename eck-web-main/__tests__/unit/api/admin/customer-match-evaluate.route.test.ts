import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  evaluateCustomerCandidateMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  evaluateCustomerCandidateMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/customer/match-merge', () => ({
  evaluateCustomerCandidate: evaluateCustomerCandidateMock,
}))

import { POST } from '@/app/api/admin/customers/match/evaluate/route'

describe('POST /api/admin/customers/match/evaluate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const request = new Request('http://localhost/api/admin/customers/match/evaluate', {
      method: 'POST',
      body: JSON.stringify({ incoming: {}, existingCustomers: [] }),
    })

    const response = await POST(request)
    expect(response.status).toBe(403)
    expect(evaluateCustomerCandidateMock).not.toHaveBeenCalled()
  })

  it('evaluates incoming candidate and returns result', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    evaluateCustomerCandidateMock.mockReturnValueOnce({
      state: 'MATCH',
      confidence: 1,
      matchedCustomerId: 'cust-1',
    })

    const request = new Request('http://localhost/api/admin/customers/match/evaluate', {
      method: 'POST',
      body: JSON.stringify({
        incoming: { email: 'match@example.com' },
        existingCustomers: [{ customerId: 'cust-1', email: 'match@example.com' }],
      }),
    })

    const response = await POST(request)
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.result.state).toBe('MATCH')
    expect(evaluateCustomerCandidateMock).toHaveBeenCalledWith(
      { email: 'match@example.com' },
      [{ customerId: 'cust-1', email: 'match@example.com' }]
    )
  })
})
