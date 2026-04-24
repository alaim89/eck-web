import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, listCommercialJobsMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  listCommercialJobsMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/commercial/sevdesk-sync', () => ({
  listCommercialJobs: listCommercialJobsMock,
}))

import { GET } from '@/app/api/admin/commercial/sevdesk/jobs/route'

describe('GET /api/admin/commercial/sevdesk/jobs', () => {
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
    expect(listCommercialJobsMock).not.toHaveBeenCalled()
  })

  it('returns jobs payload on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    listCommercialJobsMock.mockReturnValueOnce([{ jobId: 'sev-1' }])

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.jobs).toEqual([{ jobId: 'sev-1' }])
  })
})
