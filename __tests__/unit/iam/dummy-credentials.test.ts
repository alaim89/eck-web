import { describe, expect, it } from 'vitest'
import { parseDummyCredentials } from '@/lib/iam/dummy-credentials'

describe('dummy credentials', () => {
  it('parses valid dummy credentials json', () => {
    const parsed = parseDummyCredentials(
      '[{"email":"admin@example.com","password":"admin123","role":"super_admin"}]'
    )

    expect(parsed).toHaveLength(1)
    expect(parsed[0].email).toBe('admin@example.com')
    expect(parsed[0].password).toBe('admin123')
    expect(parsed[0].role).toBe('super_admin')
  })

  it('defaults to editor if role is not present', () => {
    const parsed = parseDummyCredentials('[{"email":"editor@example.com","password":"pw"}]')
    expect(parsed[0].role).toBe('editor')
  })

  it('returns empty list on invalid json', () => {
    expect(parseDummyCredentials('{invalid')).toEqual([])
  })
})
