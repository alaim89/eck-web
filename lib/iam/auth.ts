import { headers } from 'next/headers'
import { type Role, roles } from '@/lib/iam/permissions'

export type AuthUser = {
  email: string
  role: Role
}

const DEFAULT_ROLE: Role = 'editor'
const DEFAULT_EMAIL = 'anonymous@local'

const parseRole = (value: string | null): Role => {
  if (!value) return DEFAULT_ROLE
  if ((roles as readonly string[]).includes(value)) {
    return value as Role
  }
  return DEFAULT_ROLE
}

export const getRequestUser = async (): Promise<AuthUser> => {
  const requestHeaders = await headers()
  const role = parseRole(requestHeaders.get('x-user-role'))
  const email = requestHeaders.get('x-user-email') || DEFAULT_EMAIL

  return {
    email,
    role,
  }
}
