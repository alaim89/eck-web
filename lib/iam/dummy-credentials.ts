import { type Role, roles } from '@/lib/iam/permissions'
import { verifyPassword } from '@/lib/iam/password'

export type DummyCredential = {
  email: string
  passwordHash: string
  role: Role
}

const DEFAULT_ROLE: Role = 'editor'

const parseRole = (value: unknown): Role => {
  const role = String(value || '').trim()
  if ((roles as readonly string[]).includes(role)) {
    return role as Role
  }
  return DEFAULT_ROLE
}

export const parseDummyCredentials = (rawValue: string | undefined): DummyCredential[] => {
  if (!rawValue) return []

  try {
    const parsed = JSON.parse(rawValue) as Array<Record<string, unknown>>

    return parsed
      .map((entry) => {
        const passwordHash = String(entry.passwordHash || entry.password || '')
        return {
          email: String(entry.email || '').trim().toLowerCase(),
          passwordHash,
          role: parseRole(entry.role),
        }
      })
      .filter((entry) => entry.email.length > 0 && entry.passwordHash.length > 0)
  } catch {
    return []
  }
}

export const getDummyCredentials = () => parseDummyCredentials(process.env.ADMIN_DUMMY_USERS_JSON)

export const verifyDummyCredential = async (
  email: string,
  password: string
): Promise<{ email: string; role: Role } | undefined> => {
  const normalizedEmail = email.trim().toLowerCase()

  // Single-admin mode: ADMIN_USERNAME + ADMIN_PASSWORD_HASH
  const adminUsername = process.env.ADMIN_USERNAME?.trim().toLowerCase()
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim()
  if (adminUsername && adminPasswordHash && normalizedEmail === adminUsername) {
    const ok = await verifyPassword(password, adminPasswordHash)
    if (ok) return { email: normalizedEmail, role: 'super_admin' }
    return undefined
  }

  // Multi-user mode: ADMIN_DUMMY_USERS_JSON with bcrypt hashes
  const credentials = getDummyCredentials()
  const entry = credentials.find((c) => c.email === normalizedEmail)
  if (!entry) return undefined

  const ok = await verifyPassword(password, entry.passwordHash)
  return ok ? { email: normalizedEmail, role: entry.role } : undefined
}
