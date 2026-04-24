import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  processNextCrmSyncJobMock,
  appendAuditLogMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  processNextCrmSyncJobMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/integrations/crm-sync', () => ({
  processNextCrmSyncJob: processNextCrmSyncJobMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/integrations/dynamics/process-next/route'

describe('POST /api/admin/integrations/dynamics/process-next', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'unauthorized' }, { status: 401 }),
    })

    const response = await POST()
    expect(response.status).toBe(401)
    expect(processNextCrmSyncJobMock).not.toHaveBeenCalled()
    expect(appendAuditLogMock).not.toHaveBeenCalled()
  })

  it('audits info level when a crm job is processed', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    processNextCrmSyncJobMock.mockReturnValueOnce({
      processed: true,
      job: { jobId: 'crm-job-1', status: 'sent' },
    })

    const response = await POST()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.result.processed).toBe(true)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'info',
        actor: 'ops@example.com',
        action: 'crm.sync.process_next',
        objectId: 'crm-job-1',
      })
    )
  })
})
