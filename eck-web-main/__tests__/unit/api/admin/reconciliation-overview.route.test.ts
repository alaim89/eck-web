import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, getReconciliationOverviewMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  getReconciliationOverviewMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/ops/reconciliation', () => ({
  getReconciliationOverview: getReconciliationOverviewMock,
}))

import { GET } from '@/app/api/admin/reconciliation/overview/route'

describe('GET /api/admin/reconciliation/overview', () => {
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
  })

  it('returns reconciliation overview on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    getReconciliationOverviewMock.mockReturnValueOnce({
      crm: { total: 1 },
      sevdesk: { total: 2 },
      reviews: { total: 3 },
      actions: ['a'],
    })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.overview.crm.total).toBe(1)
    expect(body.overview.actions).toEqual(['a'])
  })
})
