type Bucket = {
  count: number
  resetAt: number
}

// In-memory bucket store
const buckets = new Map<string, Bucket>()

// Memory management: periodically clear old buckets
const CLEANUP_INTERVAL = 10 * 60 * 1000 // 10 minutes
let lastCleanup = Date.now()

const cleanup = () => {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  
  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt <= now) {
      buckets.delete(key)
    }
  }
  
  // Hard cap on memory usage: if still too big, clear all
  if (buckets.size > 10000) {
    buckets.clear()
  }
  
  lastCleanup = now
}

export const consumeRateLimit = (params: {
  key: string
  limit: number
  windowMs: number
}) => {
  cleanup()
  
  const timestamp = Date.now()
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
