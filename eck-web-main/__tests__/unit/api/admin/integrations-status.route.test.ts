import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

import { GET } from '@/app/api/admin/integrations/status/route'

describe('GET /api/admin/integrations/status', () => {
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

  it('returns static integration status payload on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'editor' },
    })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.environments.dynamics).toBe('connected')
    expect(body.safeguards.idempotency_required).toBe(true)
  })
})
