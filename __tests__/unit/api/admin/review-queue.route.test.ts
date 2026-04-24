import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, listReviewQueueMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  listReviewQueueMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/customer/match-merge', () => ({
  listReviewQueue: listReviewQueueMock,
}))

import { GET } from '@/app/api/admin/customers/review-queue/route'

describe('GET /api/admin/customers/review-queue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const response = await GET()
    expect(response.status).toBe(403)
    expect(listReviewQueueMock).not.toHaveBeenCalled()
  })

  it('returns review queue on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    listReviewQueueMock.mockReturnValueOnce([{ reviewId: 'rev-1' }])

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.reviews).toEqual([{ reviewId: 'rev-1' }])
  })
})
