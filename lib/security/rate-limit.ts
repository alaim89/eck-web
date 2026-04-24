type Bucket = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

const now = () => Date.now()

export const consumeRateLimit = (params: {
  key: string
  limit: number
  windowMs: number
}) => {
  const timestamp = now()
  const bucket = buckets.get(params.key)

  if (!bucket || bucket.resetAt <= timestamp) {
    buckets.set(params.key, { count: 1, resetAt: timestamp + params.windowMs })
    return {
      allowed: true as const,
      remaining: params.limit - 1,
      resetAt: timestamp + params.windowMs,
    }
  }

  if (bucket.count >= params.limit) {
    return {
      allowed: false as const,
      remaining: 0,
      resetAt: bucket.resetAt,
    }
  }

  bucket.count += 1
  return {
    allowed: true as const,
    remaining: Math.max(0, params.limit - bucket.count),
    resetAt: bucket.resetAt,
  }
}

export const resetRateLimits = () => {
  buckets.clear()
}
