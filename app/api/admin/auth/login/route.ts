import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE } from '@/lib/iam/auth'
import { verifyDummyCredential } from '@/lib/iam/dummy-credentials'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const password = String(formData.get('password') || '')

  const validCredential = verifyDummyCredential(email, password)

  if (!validCredential) {
    return NextResponse.redirect(new URL('/admin/login?error=invalid_credentials', request.url))
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

  return NextResponse.redirect(new URL('/admin', request.url))
}
