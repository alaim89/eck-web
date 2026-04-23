import { describe, expect, it } from 'vitest'
import { parseDummyCredentials } from '@/lib/iam/dummy-credentials'

describe('dummy credentials', () => {
  it('parses valid dummy credentials json', () => {
    const parsed = parseDummyCredentials(
      '[{"email":"admin@example.com","password":"admin123"}]'
    )

    expect(parsed).toHaveLength(1)
    expect(parsed[0].email).toBe('admin@example.com')
    expect(parsed[0].password).toBe('admin123')
  })

  it('returns empty list on invalid json', () => {
    expect(parseDummyCredentials('{invalid')).toEqual([])
  })
})
