import { headers } from 'next/headers'
import { type Role, roles } from '@/lib/iam/permissions'

export type AuthUser = {
  email: string
  role: Role
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
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

const parseBootstrapRoleMap = (rawValue: string | undefined): Record<string, Role> => {
  if (!rawValue) return {}

  try {
    const parsed = JSON.parse(rawValue) as Record<string, string>
    return Object.entries(parsed).reduce<Record<string, Role>>((acc, [email, role]) => {
      if ((roles as readonly string[]).includes(role)) {
        acc[email.toLowerCase()] = role as Role
      }
      return acc
    }, {})
  } catch {
    return {}
  }
}

export const resolveUserFromHeaders = (
  requestHeaders: Pick<Headers, 'get'>,
  options?: {
    roleMap?: Record<string, Role>
    allowRoleHeader?: boolean
    fallbackRole?: Role
  }
): AuthUser => {
  const email = (requestHeaders.get('x-user-email') || DEFAULT_EMAIL).toLowerCase()
  const roleHeader = requestHeaders.get('x-user-role')

  const roleMap = options?.roleMap ?? parseBootstrapRoleMap(process.env.IAM_BOOTSTRAP_ROLE_MAP)

  if (roleMap[email]) {
    return { email, role: roleMap[email] }
  }

  const allowRoleHeader =
    options?.allowRoleHeader ??
    (process.env.IAM_ALLOW_ROLE_HEADER === 'true' || process.env.NODE_ENV !== 'production')

  if (allowRoleHeader) {
    return {
      email,
      role: parseRole(roleHeader),
    }
  }

  if (options?.fallbackRole) {
    return {
      email,
      role: options.fallbackRole,
    }
  }

  throw new AuthError('No role assignment found for request user')
}

export const getRequestUser = async (): Promise<AuthUser> => {
  const requestHeaders = await headers()
  return resolveUserFromHeaders(requestHeaders)
}
