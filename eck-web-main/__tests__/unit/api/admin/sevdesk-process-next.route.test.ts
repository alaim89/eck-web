import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  processNextCommercialJobMock,
  appendAuditLogMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  processNextCommercialJobMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/commercial/sevdesk-sync', () => ({
  processNextCommercialJob: processNextCommercialJobMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/commercial/sevdesk/process-next/route'

describe('POST /api/admin/commercial/sevdesk/process-next', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const response = await POST()
    expect(response.status).toBe(403)
    expect(processNextCommercialJobMock).not.toHaveBeenCalled()
    expect(appendAuditLogMock).not.toHaveBeenCalled()
  })

  it('audits warn level when no queued job exists', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    processNextCommercialJobMock.mockReturnValueOnce({
      processed: false,
      reason: 'no_queued_jobs',
    })

    const response = await POST()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.result.processed).toBe(false)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'warn',
        actor: 'ops@example.com',
        action: 'commercial.sevdesk.process_next',
      })
    )
  })
})
