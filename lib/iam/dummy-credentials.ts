export type DummyCredential = {
  email: string
  password: string
}

export const parseDummyCredentials = (rawValue: string | undefined): DummyCredential[] => {
  if (!rawValue) return []

  try {
    const parsed = JSON.parse(rawValue) as Array<Record<string, unknown>>

    return parsed
      .map((entry) => ({
        email: String(entry.email || '').trim().toLowerCase(),
        password: String(entry.password || ''),
      }))
      .filter((entry) => entry.email.length > 0 && entry.password.length > 0)
  } catch {
    return []
  }
}

export const getDummyCredentials = () => parseDummyCredentials(process.env.ADMIN_DUMMY_USERS_JSON)

export const verifyDummyCredential = (email: string, password: string) => {
  const normalizedEmail = email.trim().toLowerCase()
  const credentials = getDummyCredentials()

  return credentials.find(
    (entry) => entry.email === normalizedEmail && entry.password === password
  )
}
