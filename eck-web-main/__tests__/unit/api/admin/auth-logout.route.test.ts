import { beforeEach, describe, expect, it, vi } from 'vitest'

const { cookieStoreMock, appendAuditLogMock } = vi.hoisted(() => ({
  cookieStoreMock: {
    get: vi.fn(),
    delete: vi.fn(),
  },
  appendAuditLogMock: vi.fn(),
}))

vi.mock('next/headers', () => ({
  cookies: vi.fn(async () => cookieStoreMock),
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/auth/logout/route'

describe('POST /api/admin/auth/logout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('deletes auth cookies, audits and redirects to login', async () => {
    cookieStoreMock.get.mockReturnValueOnce({ value: 'ops@example.com' })

    const request = new Request('http://localhost/admin/auth/logout', {
      method: 'POST',
    })

    const response = await POST(request)
    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toContain('/admin/login')
    expect(cookieStoreMock.delete).toHaveBeenCalledTimes(2)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'admin.logout',
        actor: 'ops@example.com',
      })
    )
  })
})
