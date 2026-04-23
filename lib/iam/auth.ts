import { cookies, headers } from 'next/headers'
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
export const ADMIN_USER_COOKIE = 'admin_user_email'
export const ADMIN_ROLE_COOKIE = 'admin_user_role'

const parseRole = (value: string | null): Role => {
  if (!value) return DEFAULT_ROLE
  if ((roles as readonly string[]).includes(value)) {
    return value as Role
  }
  return DEFAULT_ROLE
}

export const parseBootstrapRoleMap = (rawValue: string | undefined): Record<string, Role> => {
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

export const getBootstrapRoleMap = () => parseBootstrapRoleMap(process.env.IAM_BOOTSTRAP_ROLE_MAP)

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

  const roleMap = options?.roleMap ?? getBootstrapRoleMap()

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

const createHeaderReader = (source: Record<string, string | null>): Pick<Headers, 'get'> => ({
  get: (key: string) => source[key.toLowerCase()] ?? null,
})

export const getRequestUser = async (): Promise<AuthUser> => {
  const requestHeaders = await headers()
  const requestCookies = await cookies()

  const cookieEmail = requestCookies.get(ADMIN_USER_COOKIE)?.value?.toLowerCase()
  const cookieRole = requestCookies.get(ADMIN_ROLE_COOKIE)?.value || null

  if (cookieEmail) {
    const headerReader = createHeaderReader({
      'x-user-email': cookieEmail,
      'x-user-role': cookieRole || requestHeaders.get('x-user-role'),
    })

    return resolveUserFromHeaders(headerReader, { allowRoleHeader: true })
  }

  return resolveUserFromHeaders(requestHeaders)
}
