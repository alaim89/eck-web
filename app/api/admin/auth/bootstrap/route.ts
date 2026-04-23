import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE, getBootstrapRoleMap } from '@/lib/iam/auth'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const token = String(formData.get('token') || '').trim()

  const expectedToken = process.env.ADMIN_BOOTSTRAP_TOKEN
  if (!expectedToken || token !== expectedToken) {
    return NextResponse.redirect(new URL('/admin/login?error=invalid_token', request.url))
  }

  const roleMap = getBootstrapRoleMap()
  const role = roleMap[email]
  if (!email || !role) {
    return NextResponse.redirect(new URL('/admin/login?error=email_not_mapped', request.url))
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_USER_COOKIE, email, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  cookieStore.set(ADMIN_ROLE_COOKIE, role, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return NextResponse.redirect(new URL('/admin', request.url))
}
