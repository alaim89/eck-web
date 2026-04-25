import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_SIG_COOKIE, ADMIN_ROLE_COOKIE, ADMIN_USER_COOKIE, verifySessionSigEdge } from '@/lib/iam/session-edge'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
    return NextResponse.next()
  }

  const emailCookie = request.cookies.get(ADMIN_USER_COOKIE)
  const roleCookie = request.cookies.get(ADMIN_ROLE_COOKIE)
  const sigCookie = request.cookies.get(ADMIN_SIG_COOKIE)

  if (!emailCookie?.value || !roleCookie?.value || !sigCookie?.value) {
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Verify signature to prevent spoofing
  if (!(await verifySessionSigEdge(emailCookie.value, roleCookie.value, sigCookie.value))) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('error', 'invalid_session')
    const response = NextResponse.redirect(loginUrl)
    // Clear cookies if signature is invalid
    response.cookies.delete(ADMIN_USER_COOKIE)
    response.cookies.delete(ADMIN_ROLE_COOKIE)
    response.cookies.delete(ADMIN_SIG_COOKIE)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
