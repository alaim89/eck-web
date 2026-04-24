import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE, ADMIN_SIG_COOKIE } from '@/lib/iam/auth'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const actor = cookieStore.get(ADMIN_USER_COOKIE)?.value || 'anonymous'

  cookieStore.delete(ADMIN_USER_COOKIE)
  cookieStore.delete(ADMIN_ROLE_COOKIE)
  cookieStore.delete(ADMIN_SIG_COOKIE)

  appendAuditLog({
    level: 'info',
    actor,
    action: 'admin.logout',
    objectType: 'session',
  })

  return NextResponse.redirect(new URL('/admin/login', request.url), { status: 303 })
}
