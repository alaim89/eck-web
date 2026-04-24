import { beforeEach, describe, expect, it, vi } from 'vitest'

const { cookieStoreMock } = vi.hoisted(() => ({
  cookieStoreMock: {
    set: vi.fn(),
  },
}))

const { getDummyCredentialsMock, verifyDummyCredentialMock, appendAuditLogMock } = vi.hoisted(() => ({
  getDummyCredentialsMock: vi.fn(),
  verifyDummyCredentialMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('next/headers', () => ({
  cookies: vi.fn(async () => cookieStoreMock),
}))

vi.mock('@/lib/iam/dummy-credentials', () => ({
  getDummyCredentials: getDummyCredentialsMock,
  verifyDummyCredential: verifyDummyCredentialMock,
}))

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/auth/login/route'

describe('POST /api/admin/auth/login', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('redirects with credentials_not_configured when no dummy creds exist', async () => {
    getDummyCredentialsMock.mockReturnValueOnce([])

    const formData = new FormData()
    formData.set('email', 'ops@example.com')
    formData.set('password', 'secret')

    const request = new Request('http://localhost/admin/auth/login', {
      method: 'POST',
      body: formData,
    })

    const response = await POST(request)

    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toContain('/admin/login?error=credentials_not_configured')
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'admin.login.failed',
        level: 'error',
      })
    )
  })

  it('sets cookies and redirects to /admin on successful login', async () => {
    getDummyCredentialsMock.mockReturnValueOnce([{ email: 'ops@example.com' }])
    verifyDummyCredentialMock.mockReturnValueOnce({ role: 'editor' })

    const formData = new FormData()
    formData.set('email', 'ops@example.com')
    formData.set('password', 'correct')

    const request = new Request('http://localhost/admin/auth/login', {
      method: 'POST',
      body: formData,
    })

    const response = await POST(request)

    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toContain('/admin')
    expect(cookieStoreMock.set).toHaveBeenCalledTimes(2)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'admin.login.succeeded',
        level: 'info',
      })
    )
  })
})
