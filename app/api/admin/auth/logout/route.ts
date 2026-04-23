import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_USER_COOKIE } from '@/lib/iam/auth'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_USER_COOKIE)

  return NextResponse.redirect(new URL('/admin/login', request.url))
}
