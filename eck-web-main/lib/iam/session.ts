import crypto from 'node:crypto'

export const ADMIN_SIG_COOKIE = 'admin_session_sig'

export const signSession = (email: string, role: string): string => {
  const secret = process.env.SESSION_SECRET
  if (!secret) return ''
  return crypto.createHmac('sha256', secret).update(`${email}:${role}`).digest('hex')
}

export const verifySessionSig = (email: string, role: string, sig: string): boolean => {
  const secret = process.env.SESSION_SECRET
  if (!secret) return true
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
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: 60 * 60 * 8,
}
