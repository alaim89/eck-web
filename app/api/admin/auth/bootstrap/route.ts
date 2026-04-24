import crypto from 'node:crypto'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE, getBootstrapRoleMap } from '@/lib/iam/auth'
import { ADMIN_SIG_COOKIE, SESSION_COOKIE_OPTIONS, signSession } from '@/lib/iam/session'
import { appendAuditLog } from '@/lib/ops/audit-log'

const safeCompare = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b))
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const token = String(formData.get('token') || '').trim()

  const expectedToken = process.env.ADMIN_BOOTSTRAP_TOKEN
  if (!expectedToken || !safeCompare(token, expectedToken)) {
    appendAuditLog({
      level: 'warn',
      actor: email || 'anonymous',
      action: 'admin.bootstrap.failed',
      objectType: 'session',
      details: { reason: 'invalid_token' },
    })

    return NextResponse.redirect(new URL('/admin/login?error=invalid_token', request.url), { status: 303 })
  }

  const roleMap = getBootstrapRoleMap()
  const role = roleMap[email]
  if (!email || !role) {
    appendAuditLog({
      level: 'warn',
      actor: email || 'anonymous',
      action: 'admin.bootstrap.failed',
      objectType: 'session',
      details: { reason: 'email_not_mapped' },
    })

    return NextResponse.redirect(new URL('/admin/login?error=email_not_mapped', request.url), { status: 303 })
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_USER_COOKIE, email, SESSION_COOKIE_OPTIONS)
  cookieStore.set(ADMIN_ROLE_COOKIE, role, SESSION_COOKIE_OPTIONS)

  const sig = signSession(email, role)
  if (sig) {
    cookieStore.set(ADMIN_SIG_COOKIE, sig, SESSION_COOKIE_OPTIONS)
  }

  appendAuditLog({
    level: 'info',
    actor: email,
    action: 'admin.bootstrap.succeeded',
    objectType: 'session',
    details: { role },
  })

  return NextResponse.redirect(new URL('/admin', request.url), { status: 303 })
}
