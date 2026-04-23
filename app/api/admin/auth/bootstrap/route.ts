import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_USER_COOKIE, getBootstrapRoleMap } from '@/lib/iam/auth'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const token = String(formData.get('token') || '').trim()

  const expectedToken = process.env.ADMIN_BOOTSTRAP_TOKEN
  if (!expectedToken || token !== expectedToken) {
    return NextResponse.json({ error: 'invalid_token' }, { status: 401 })
  }

  const roleMap = getBootstrapRoleMap()
  if (!email || !roleMap[email]) {
    return NextResponse.json(
      { error: 'email_not_mapped', message: 'Email is not present in IAM_BOOTSTRAP_ROLE_MAP' },
      { status: 400 }
    )
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_USER_COOKIE, email, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return NextResponse.redirect(new URL('/admin', request.url))
}
