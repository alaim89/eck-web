import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { cookieStoreMock } = vi.hoisted(() => ({
  cookieStoreMock: {
    set: vi.fn(),
  },
}))

const { getBootstrapRoleMapMock, appendAuditLogMock } = vi.hoisted(() => ({
  getBootstrapRoleMapMock: vi.fn(),
  appendAuditLogMock: vi.fn(),
}))

vi.mock('next/headers', () => ({
  cookies: vi.fn(async () => cookieStoreMock),
}))

vi.mock('@/lib/iam/auth', async () => {
  const actual = await vi.importActual<typeof import('@/lib/iam/auth')>('@/lib/iam/auth')
  return {
    ...actual,
    getBootstrapRoleMap: getBootstrapRoleMapMock,
  }
})

vi.mock('@/lib/ops/audit-log', () => ({
  appendAuditLog: appendAuditLogMock,
}))

import { POST } from '@/app/api/admin/auth/bootstrap/route'

describe('POST /api/admin/auth/bootstrap', () => {
  const previousToken = process.env.ADMIN_BOOTSTRAP_TOKEN

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    process.env.ADMIN_BOOTSTRAP_TOKEN = previousToken
  })

  it('redirects with invalid_token on wrong token', async () => {
    process.env.ADMIN_BOOTSTRAP_TOKEN = 'expected'
    getBootstrapRoleMapMock.mockReturnValueOnce({ 'ops@example.com': 'editor' })

    const formData = new FormData()
    formData.set('email', 'ops@example.com')
    formData.set('token', 'wrong')

    const request = new Request('http://localhost/admin/auth/bootstrap', {
      method: 'POST',
      body: formData,
    })

    const response = await POST(request)
    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toContain('/admin/login?error=invalid_token')
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({ action: 'admin.bootstrap.failed' })
    )
  })

  it('sets cookies and redirects to /admin on success', async () => {
    process.env.ADMIN_BOOTSTRAP_TOKEN = 'expected'
    getBootstrapRoleMapMock.mockReturnValueOnce({ 'ops@example.com': 'super_admin' })

    const formData = new FormData()
    formData.set('email', 'ops@example.com')
    formData.set('token', 'expected')

    const request = new Request('http://localhost/admin/auth/bootstrap', {
      method: 'POST',
      body: formData,
    })

    const response = await POST(request)
    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toContain('/admin')
    expect(cookieStoreMock.set).toHaveBeenCalledTimes(2)
    expect(appendAuditLogMock).toHaveBeenCalledWith(
      expect.objectContaining({ action: 'admin.bootstrap.succeeded', level: 'info' })
    )
  })
})
