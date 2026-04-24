import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  resolveReviewItemMock,
  appendAuditLogMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  resolveReviewItemMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/customer/match-merge', () => ({
  resolveReviewItem: resolveReviewItemMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/customers/review-queue/[reviewId]/resolve/route'

describe('POST /api/admin/customers/review-queue/[reviewId]/resolve', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'unauthorized' }, { status: 401 }),
    })

    const request = new Request('http://localhost/api/admin/customers/review-queue/r1/resolve', {
      method: 'POST',
      body: JSON.stringify({ resolution: 'MATCH' }),
    })

    const response = await POST(request, {
      params: Promise.resolve({ reviewId: 'r1' }),
    })

    expect(response.status).toBe(401)
    expect(resolveReviewItemMock).not.toHaveBeenCalled()
    expect(appendAuditLogMock).not.toHaveBeenCalled()
  })

  it('returns 404 when review item does not exist', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'manager@example.com', role: 'editor' },
    })

    resolveReviewItemMock.mockReturnValueOnce({
      ok: false,
      reason: 'not_found',
    })

    const request = new Request('http://localhost/api/admin/customers/review-queue/r2/resolve', {
      method: 'POST',
      body: JSON.stringify({ resolution: 'IGNORE' }),
    })

    const response = await POST(request, {
      params: Promise.resolve({ reviewId: 'r2' }),
    })

    expect(response.status).toBe(404)
    expect(appendAuditLogMock).not.toHaveBeenCalled()
  })

  it('resolves review and writes audit entry', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'manager@example.com', role: 'editor' },
    })

    resolveReviewItemMock.mockReturnValueOnce({
      ok: true,
      item: {
        reviewId: 'r3',
        matchedCustomerId: 'cust-1',
        confidence: 0.8,
        resolution: 'MERGE',
      },
    })

    const request = new Request('http://localhost/api/admin/customers/review-queue/r3/resolve', {
      method: 'POST',
      body: JSON.stringify({ resolution: 'MERGE' }),
    })

    const response = await POST(request, {
      params: Promise.resolve({ reviewId: 'r3' }),
    })
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.review.reviewId).toBe('r3')
    expect(resolveReviewItemMock).toHaveBeenCalledWith({
      reviewId: 'r3',
      resolution: 'MERGE',
      resolvedBy: 'manager@example.com',
    })
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        actor: 'manager@example.com',
        action: 'customer.review.resolved',
        objectId: 'r3',
      })
    )
  })
})
