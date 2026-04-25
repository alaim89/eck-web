import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NextResponse } from 'next/server'

const { requirePermissionMock, getLiveVisitorSnapshotMock, getVisitorAnalyticsMock, appendAuditLogMock } =
  vi.hoisted(() => ({
    requirePermissionMock: vi.fn(),
    getLiveVisitorSnapshotMock: vi.fn(),
    getVisitorAnalyticsMock: vi.fn(),
    appendAuditLogMock: vi.fn(),
  }))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/analytics/visitors', () => ({
  getLiveVisitorSnapshot: getLiveVisitorSnapshotMock,
  getVisitorAnalytics: getVisitorAnalyticsMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { GET } from '@/app/api/admin/analytics/visitors/route'

describe('GET /api/admin/analytics/visitors', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('liefert 401/403 ohne gültige Berechtigung', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: NextResponse.json({ error: 'unauthorized' }, { status: 401 }),
    })

    const response = await GET(new Request('http://localhost/api/admin/analytics/visitors'))
    expect(response.status).toBe(401)
  })

  it('liefert 403 für normale Benutzerrolle', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: NextResponse.json({ error: 'forbidden' }, { status: 403 }),
    })

    const response = await GET(new Request('http://localhost/api/admin/analytics/visitors'))
    expect(response.status).toBe(403)
  })

  it('liefert 401 bei manipulierten Cookies / ungültiger Session-Signatur', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: NextResponse.json({ error: 'unauthorized', message: 'Invalid session signature' }, { status: 401 }),
    })

    const response = await GET(new Request('http://localhost/api/admin/analytics/visitors'))
    expect(response.status).toBe(401)
  })

  it('liefert 200 für Admin und setzt default Pagination-Limit', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'admin@example.com', role: 'admin' },
    })
    getLiveVisitorSnapshotMock.mockReturnValueOnce({ online_count: 1, visitors: [] })
    getVisitorAnalyticsMock.mockReturnValueOnce({
      page: 1,
      page_size: 25,
      rows: [],
      total_rows: 0,
      buckets: [],
      total_visits: 0,
      total_unique_sessions: 0,
      top_pages: [],
    })

    const response = await GET(new Request('http://localhost/api/admin/analytics/visitors'))
    expect(response.status).toBe(200)
    expect(getVisitorAnalyticsMock).toHaveBeenCalledWith(
      expect.objectContaining({
        pageSize: 25,
      })
    )
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'analytics.visitors.view',
        actor: 'admin@example.com',
      })
    )
  })

  it('begrenzt den Zeitraum serverseitig auf maximal 366 Tage', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'admin@example.com', role: 'admin' },
    })
    getLiveVisitorSnapshotMock.mockReturnValueOnce({ online_count: 0, visitors: [] })
    getVisitorAnalyticsMock.mockReturnValueOnce({
      page: 1,
      page_size: 25,
      rows: [],
      total_rows: 0,
      buckets: [],
      total_visits: 0,
      total_unique_sessions: 0,
      top_pages: [],
    })

    const now = new Date('2026-04-01T00:00:00.000Z')
    vi.useFakeTimers()
    vi.setSystemTime(now)
    const response = await GET(
      new Request(
        'http://localhost/api/admin/analytics/visitors?from=2000-01-01T00:00:00.000Z&to=2026-04-01T00:00:00.000Z'
      )
    )
    vi.useRealTimers()

    expect(response.status).toBe(200)
    const args = getVisitorAnalyticsMock.mock.calls[0][0] as { from: Date; to: Date }
    expect(args.to.toISOString()).toBe('2026-04-01T00:00:00.000Z')
    expect(args.from.getTime()).toBeGreaterThanOrEqual(args.to.getTime() - 366 * 24 * 60 * 60 * 1000)
  })
})
