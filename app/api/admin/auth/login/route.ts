import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE, ADMIN_SIG_COOKIE, SESSION_COOKIE_OPTIONS, signSession } from '@/lib/iam/session'
import { getDummyCredentials, verifyDummyCredential } from '@/lib/iam/dummy-credentials'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const password = String(formData.get('password') || '')

  const adminUsername = process.env.ADMIN_USERNAME?.trim().toLowerCase()
  const hasCredentials = adminUsername || getDummyCredentials().length > 0

  if (!hasCredentials) {
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

  const validCredential = await verifyDummyCredential(email, password)

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
  cookieStore.set(ADMIN_USER_COOKIE, validCredential.email, SESSION_COOKIE_OPTIONS)
  cookieStore.set(ADMIN_ROLE_COOKIE, validCredential.role, SESSION_COOKIE_OPTIONS)

  const sig = signSession(validCredential.email, validCredential.role)
  if (sig) {
    cookieStore.set(ADMIN_SIG_COOKIE, sig, SESSION_COOKIE_OPTIONS)
  }

  appendAuditLog({
    level: 'info',
    actor: validCredential.email,
    action: 'admin.login.succeeded',
    objectType: 'session',
    details: { role: validCredential.role },
  })

  return NextResponse.redirect(new URL('/admin', request.url), { status: 303 })
}
