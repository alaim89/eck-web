import { describe, expect, it } from 'vitest'
import { consumeRateLimit, resetRateLimits } from '@/lib/security/rate-limit'

describe('rate limit', () => {
  it('blocks requests after configured limit', () => {
    resetRateLimits()
    const first = consumeRateLimit({ key: 'k1', limit: 2, windowMs: 60_000 })
    const second = consumeRateLimit({ key: 'k1', limit: 2, windowMs: 60_000 })
    const third = consumeRateLimit({ key: 'k1', limit: 2, windowMs: 60_000 })

    expect(first.allowed).toBe(true)
    expect(second.allowed).toBe(true)
    expect(third.allowed).toBe(false)
  })
})
