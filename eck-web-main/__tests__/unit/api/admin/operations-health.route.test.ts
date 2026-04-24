import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, getOperationsHealthMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  getOperationsHealthMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/ops/health', () => ({
  getOperationsHealth: getOperationsHealthMock,
}))

import { GET } from '@/app/api/admin/operations/health/route'

describe('GET /api/admin/operations/health', () => {
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
  })

  it('returns health payload on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })
    getOperationsHealthMock.mockReturnValueOnce({ overallSeverity: 'warning', checks: [] })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.health.overallSeverity).toBe('warning')
  })
})
