import crypto from 'node:crypto'

// Use __Host- prefix only if secure is true (requires HTTPS, Path=/, no Domain)
// For dev compatibility, we conditionally add the prefix
const isSecure = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1' || !!process.env.NEXT_PUBLIC_GEMINI_API_KEY
const prefix = isSecure ? '__Host-' : ''

export const ADMIN_USER_COOKIE = `${prefix}admin_user_email`
export const ADMIN_ROLE_COOKIE = `${prefix}admin_user_role`
export const ADMIN_SIG_COOKIE = `${prefix}admin_session_sig`

export const signSession = (email: string, role: string): string => {
  const secret = process.env.SESSION_SECRET
  if (!secret) return ''
  return crypto.createHmac('sha256', secret).update(`${email}:${role}`).digest('hex')
}

export const verifySessionSig = (email: string, role: string, sig: string): boolean => {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    console.error('CRITICAL: SESSION_SECRET is not configured. Blocking all admin sessions.')
    return false
  }
  const expected = signSession(email, role)
  if (!expected || !sig || expected.length !== sig.length) return false
  try {
    return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(sig, 'hex'))
  } catch {
    return false
  }
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'strict' as const, // Hardened to Strict
  secure: isSecure,
  path: '/',
  maxAge: 60 * 60 * 8, // 8 hours
}
