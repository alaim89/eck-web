import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, listAuditLogsMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  listAuditLogsMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  listAuditLogs: listAuditLogsMock,
}))

import { GET } from '@/app/api/admin/audit/logs/route'

describe('GET /api/admin/audit/logs', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const request = new Request('http://localhost/api/admin/audit/logs')
    const response = await GET(request)
    expect(response.status).toBe(403)
  })

  it('passes query filters and bounded limit to audit log list', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    listAuditLogsMock.mockReturnValueOnce([{ id: '1' }])

    const request = new Request(
      'http://localhost/api/admin/audit/logs?action=admin.login.failed&actor=ops@example.com&limit=9999'
    )
    const response = await GET(request)
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.logs).toEqual([{ id: '1' }])
    expect(listAuditLogsMock).toHaveBeenCalledWith({
      action: 'admin.login.failed',
      actor: 'ops@example.com',
      limit: 500,
    })
  })
})
