const isSecure =
  process.env.NODE_ENV === 'production' ||
  process.env.VERCEL === '1' ||
  !!process.env.NEXT_PUBLIC_GEMINI_API_KEY

const prefix = isSecure ? '__Host-' : ''

export const ADMIN_USER_COOKIE = `${prefix}admin_user_email`
export const ADMIN_ROLE_COOKIE = `${prefix}admin_user_role`
export const ADMIN_SIG_COOKIE = `${prefix}admin_session_sig`

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: isSecure,
  path: '/',
  maxAge: 60 * 60 * 8,
}
