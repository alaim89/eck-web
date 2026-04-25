import crypto from 'node:crypto'
import { ADMIN_SIG_COOKIE, ADMIN_USER_COOKIE, ADMIN_ROLE_COOKIE, SESSION_COOKIE_OPTIONS } from '@/lib/iam/session-cookies'

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
export { ADMIN_SIG_COOKIE, ADMIN_USER_COOKIE, ADMIN_ROLE_COOKIE, SESSION_COOKIE_OPTIONS }
