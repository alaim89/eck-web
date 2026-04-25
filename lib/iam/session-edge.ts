import { ADMIN_SIG_COOKIE, ADMIN_USER_COOKIE, ADMIN_ROLE_COOKIE } from '@/lib/iam/session-cookies'

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')

const timingSafeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return result === 0
}

const signSessionEdge = async (email: string, role: string): Promise<string> => {
  const secret = process.env.SESSION_SECRET
  if (!secret) return ''

  const subtle = globalThis.crypto?.subtle
  if (!subtle) return ''

  const encoder = new TextEncoder()
  const key = await subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await subtle.sign('HMAC', key, encoder.encode(`${email}:${role}`))
  return toHex(new Uint8Array(signature))
}

export const verifySessionSigEdge = async (
  email: string,
  role: string,
  sig: string
): Promise<boolean> => {
  const expected = await signSessionEdge(email, role)
  if (!expected || !sig || expected.length !== sig.length) return false
  return timingSafeEqual(expected, sig)
}

export { ADMIN_SIG_COOKIE, ADMIN_USER_COOKIE, ADMIN_ROLE_COOKIE }
