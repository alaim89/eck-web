import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_USER_COOKIE, getBootstrapRoleMap } from '@/lib/iam/auth'
import { verifyDummyCredential } from '@/lib/iam/dummy-credentials'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const password = String(formData.get('password') || '')

  const validCredential = verifyDummyCredential(email, password)

  if (!validCredential) {
    return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })
  }

  const roleMap = getBootstrapRoleMap()
  if (!roleMap[email]) {
    return NextResponse.json(
      {
        error: 'role_not_mapped',
        message: 'Bitte E-Mail zusätzlich in IAM_BOOTSTRAP_ROLE_MAP hinterlegen.',
      },
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
