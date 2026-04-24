import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  getCrmSyncSummaryMock,
  getReviewQueueSummaryMock,
  getAuditLogSummaryMock,
  getOperationsHealthMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  getCrmSyncSummaryMock: vi.fn(),
  getReviewQueueSummaryMock: vi.fn(),
  getAuditLogSummaryMock: vi.fn(),
  getOperationsHealthMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/integrations/crm-sync', () => ({
  getCrmSyncSummary: getCrmSyncSummaryMock,
}))

vi.mock('@/lib/customer/match-merge', () => ({
  getReviewQueueSummary: getReviewQueueSummaryMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  getAuditLogSummary: getAuditLogSummaryMock,
}))

vi.mock('@/lib/ops/health', () => ({
  getOperationsHealth: getOperationsHealthMock,
}))

import { GET } from '@/app/api/admin/dashboard/route'

describe('GET /api/admin/dashboard', () => {
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

  it('returns dashboard metrics and widgets on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    getCrmSyncSummaryMock.mockReturnValueOnce({ total: 1, queued: 0, sent: 1, skippedTest: 0 })
    getReviewQueueSummaryMock.mockReturnValueOnce({ total: 2, open: 1, resolved: 1 })
    getAuditLogSummaryMock.mockReturnValueOnce({ total: 10, latestAction: 'x', latestAt: 'y' })
    getOperationsHealthMock.mockReturnValueOnce({ overallSeverity: 'ok', checks: [] })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.user.email).toBe('ops@example.com')
    expect(body.metrics.crm.sent).toBe(1)
    expect(body.widgets).toHaveLength(3)
  })
})
