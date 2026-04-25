import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NextResponse } from 'next/server'

const { requirePermissionMock, getVisitorAnalyticsMock, exportVisitorRowsCsvMock, appendAuditLogMock } =
  vi.hoisted(() => ({
    requirePermissionMock: vi.fn(),
    getVisitorAnalyticsMock: vi.fn(),
    exportVisitorRowsCsvMock: vi.fn(),
    appendAuditLogMock: vi.fn(),
  }))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/analytics/visitors', () => ({
  getVisitorAnalytics: getVisitorAnalyticsMock,
  exportVisitorRowsCsv: exportVisitorRowsCsvMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { GET } from '@/app/api/admin/analytics/visitors/export/route'

describe('GET /api/admin/analytics/visitors/export', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('blockiert Export ohne Admin-Berechtigung', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: NextResponse.json({ error: 'forbidden' }, { status: 403 }),
    })

    const response = await GET(new Request('http://localhost/api/admin/analytics/visitors/export'))
    expect(response.status).toBe(403)
  })

  it('liefert CSV nur für Admin und ohne sensitive Header-Spalten', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'admin@example.com', role: 'admin' },
    })
    getVisitorAnalyticsMock.mockReturnValueOnce({
      rows: [
        {
          id: 'v1',
          session_id: 's1',
          page_url: '/kontakt',
          referrer: '=evil',
          utm_source: 'google',
          utm_medium: 'cpc',
          utm_campaign: 'spring',
          device_type: 'desktop',
          browser: 'Chrome',
          created_at: '2026-01-01T00:00:00.000Z',
          last_seen_at: '2026-01-01T00:01:00.000Z',
          ip_hash: 'hashed-ip',
          authorization: 'secret',
        },
      ],
    })
    exportVisitorRowsCsvMock.mockReturnValueOnce(
      'id,session_id,page_url,referrer,utm_source,utm_medium,utm_campaign,device_type,browser,created_at,last_seen_at\nv1,s1,/kontakt,\'=evil,google,cpc,spring,desktop,Chrome,2026-01-01T00:00:00.000Z,2026-01-01T00:01:00.000Z'
    )

    const response = await GET(
      new Request('http://localhost/api/admin/analytics/visitors/export?from=2026-01-01&to=2026-01-10')
    )
    const csv = await response.text()

    expect(response.status).toBe(200)
    expect(csv).toContain("'=evil")
    expect(csv).not.toContain('ip_hash')
    expect(csv).not.toContain('authorization')
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'analytics.visitors.export_csv',
      })
    )
  })
})

