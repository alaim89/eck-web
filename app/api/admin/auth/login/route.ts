import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE } from '@/lib/iam/auth'
import { getDummyCredentials, verifyDummyCredential } from '@/lib/iam/dummy-credentials'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const password = String(formData.get('password') || '')

  if (getDummyCredentials().length === 0) {
    appendAuditLog({
      level: 'error',
      actor: email || 'anonymous',
      action: 'admin.login.failed',
      objectType: 'session',
      details: { reason: 'credentials_not_configured' },
    })

    return NextResponse.redirect(
      new URL('/admin/login?error=credentials_not_configured', request.url),
      { status: 303 }
    )
  }

  const validCredential = verifyDummyCredential(email, password)

  if (!validCredential) {
    appendAuditLog({
      level: 'warn',
      actor: email || 'anonymous',
      action: 'admin.login.failed',
      objectType: 'session',
      details: { reason: 'invalid_credentials' },
    })

    return NextResponse.redirect(new URL('/admin/login?error=invalid_credentials', request.url), {
      status: 303,
    })
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_USER_COOKIE, email, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  cookieStore.set(ADMIN_ROLE_COOKIE, validCredential.role, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  appendAuditLog({
    level: 'info',
    actor: email,
    action: 'admin.login.succeeded',
    objectType: 'session',
    details: { role: validCredential.role },
  })

  return NextResponse.redirect(new URL('/admin', request.url), { status: 303 })
}
