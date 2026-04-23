import { describe, expect, it } from 'vitest'
import { AuthError, resolveUserFromHeaders } from '@/lib/iam/auth'
import { type Role } from '@/lib/iam/permissions'

const makeHeaders = (values: Record<string, string>) =>
  ({
    get: (key: string) => values[key] || null,
  }) as Pick<Headers, 'get'>

describe('resolveUserFromHeaders', () => {
  it('prefers explicit role mapping over header role', () => {
    const user = resolveUserFromHeaders(
      makeHeaders({ 'x-user-email': 'owner@example.com', 'x-user-role': 'editor' }),
      {
        roleMap: { 'owner@example.com': 'super_admin' as Role },
      }
    )

    expect(user.role).toBe('super_admin')
  })

  it('uses header role when enabled', () => {
    const user = resolveUserFromHeaders(
      makeHeaders({ 'x-user-email': 'editor@example.com', 'x-user-role': 'content_manager' }),
      { allowRoleHeader: true }
    )

    expect(user.role).toBe('content_manager')
  })

  it('throws when no mapping exists and header role is disabled', () => {
    expect(() =>
      resolveUserFromHeaders(
        makeHeaders({ 'x-user-email': 'unknown@example.com', 'x-user-role': 'super_admin' }),
        {
          roleMap: {},
          allowRoleHeader: false,
        }
      )
    ).toThrow(AuthError)
  })
})
