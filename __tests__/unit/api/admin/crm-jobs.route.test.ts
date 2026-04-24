import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, getCrmSyncJobsMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  getCrmSyncJobsMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/integrations/crm-sync', () => ({
  getCrmSyncJobs: getCrmSyncJobsMock,
}))

import { GET } from '@/app/api/admin/integrations/dynamics/jobs/route'

describe('GET /api/admin/integrations/dynamics/jobs', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when permission check fails', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'unauthorized' }, { status: 401 }),
    })

    const response = await GET()
    expect(response.status).toBe(401)
    expect(getCrmSyncJobsMock).not.toHaveBeenCalled()
  })

  it('returns CRM jobs on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    getCrmSyncJobsMock.mockReturnValueOnce([{ jobId: 'crm-1' }])

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.jobs).toEqual([{ jobId: 'crm-1' }])
  })
})
