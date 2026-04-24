import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  queueCommercialSyncMock,
  appendAuditLogMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  queueCommercialSyncMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/commercial/sevdesk-sync', () => ({
  queueCommercialSync: queueCommercialSyncMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/commercial/sevdesk/prepare/route'

describe('POST /api/admin/commercial/sevdesk/prepare', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const request = new Request('http://localhost/api/admin/commercial/sevdesk/prepare', {
      method: 'POST',
      body: JSON.stringify({ customerId: 'c1' }),
    })

    const response = await POST(request)
    expect(response.status).toBe(403)
    expect(queueCommercialSyncMock).not.toHaveBeenCalled()
    expect(appendAuditLogMock).not.toHaveBeenCalled()
  })

  it('queues job and writes audit entry when permission check passes', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })

    queueCommercialSyncMock.mockReturnValueOnce({
      jobId: 'job-1',
      status: 'queued',
      reason: undefined,
    })

    const request = new Request('http://localhost/api/admin/commercial/sevdesk/prepare', {
      method: 'POST',
      body: JSON.stringify({
        customerId: 'c2',
        opportunityStatus: 'Angebot angefordert',
        approvedForCommercial: true,
        billingAddressComplete: true,
      }),
    })

    const response = await POST(request)
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.job.jobId).toBe('job-1')
    expect(queueCommercialSyncMock).toHaveBeenCalledTimes(1)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        actor: 'ops@example.com',
        action: 'commercial.sevdesk.prepared',
        objectId: 'job-1',
      })
    )
  })
})
