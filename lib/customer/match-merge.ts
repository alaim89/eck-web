import crypto from 'node:crypto'

export type MatchState = 'CREATE' | 'MATCH' | 'MERGE' | 'IGNORE' | 'FLAG_FOR_REVIEW'
export type ReviewResolution = 'MATCH' | 'MERGE' | 'IGNORE'

export type CustomerCandidate = {
  crmContactId?: string
  crmAccountId?: string
  email?: string
  companyName?: string
  phone?: string
  taxId?: string
  isTest?: boolean
}

export type CustomerRecord = CustomerCandidate & {
  customerId: string
}

export type ReviewItem = {
  reviewId: string
  incoming: CustomerCandidate
  matchedCustomerId: string
  confidence: number
  state: MatchState
  createdAt: string
  resolvedAt?: string
  resolution?: ReviewResolution
  resolvedBy?: string
}

const reviewQueue = new Map<string, ReviewItem>()

const normalize = (value?: string) => (value || '').trim().toLowerCase()
const normalizeCompany = (value?: string) =>
  normalize(value)
    .replace(/\b(gmbh|ag|kg|mbh|inc|llc)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const eq = (a?: string, b?: string) => normalize(a) && normalize(a) === normalize(b)

export const scoreCustomerMatch = (
  incoming: CustomerCandidate,
  existing: CustomerRecord
): number => {
  let score = 0

  if (eq(incoming.crmContactId, existing.crmContactId)) score += 1.0
  if (eq(incoming.crmAccountId, existing.crmAccountId)) score += 1.0
  if (eq(incoming.email, existing.email)) score += 0.7
  if (normalizeCompany(incoming.companyName) && normalizeCompany(incoming.companyName) === normalizeCompany(existing.companyName)) {
    score += 0.4
  }
  if (eq(incoming.phone, existing.phone)) score += 0.2
  if (eq(incoming.taxId, existing.taxId)) score += 0.5

  return Math.min(score, 1)
}

const makeReviewId = (incoming: CustomerCandidate, matchedCustomerId: string) =>
  crypto
    .createHash('sha256')
    .update(JSON.stringify({ incoming, matchedCustomerId }))
    .digest('hex')
    .slice(0, 16)

export const evaluateCustomerCandidate = (
  incoming: CustomerCandidate,
  existingCustomers: CustomerRecord[]
) => {
  if (incoming.isTest) {
    return {
      state: 'IGNORE' as MatchState,
      confidence: 1,
      reason: 'test_data',
    }
  }

  const ranked = existingCustomers
    .map((existing) => ({
      customerId: existing.customerId,
      confidence: scoreCustomerMatch(incoming, existing),
    }))
    .sort((a, b) => b.confidence - a.confidence)

  const best = ranked[0]

  if (!best || best.confidence < 0.7) {
    return {
      state: 'CREATE' as MatchState,
      confidence: best?.confidence ?? 0,
    }
  }

  if (best.confidence >= 0.9) {
    return {
      state: 'MATCH' as MatchState,
      confidence: best.confidence,
      matchedCustomerId: best.customerId,
    }
  }

  const reviewId = makeReviewId(incoming, best.customerId)
  const reviewItem: ReviewItem = {
    reviewId,
    incoming,
    matchedCustomerId: best.customerId,
    confidence: best.confidence,
    state: 'FLAG_FOR_REVIEW',
    createdAt: new Date().toISOString(),
  }

  reviewQueue.set(reviewId, reviewItem)

  return {
    state: 'FLAG_FOR_REVIEW' as MatchState,
    confidence: best.confidence,
    matchedCustomerId: best.customerId,
    reviewId,
  }
}

export const listReviewQueue = () => Array.from(reviewQueue.values())

export const resolveReviewItem = (params: {
  reviewId: string
  resolution: ReviewResolution
  resolvedBy: string
}) => {
  const item = reviewQueue.get(params.reviewId)

  if (!item) {
    return {
      ok: false as const,
      reason: 'not_found' as const,
    }
  }

  item.resolution = params.resolution
  item.resolvedBy = params.resolvedBy
  item.resolvedAt = new Date().toISOString()

  return {
    ok: true as const,
    item,
  }
}

export const resetReviewQueue = () => {
  reviewQueue.clear()
}


export const getReviewQueueSummary = () => {
  const items = listReviewQueue()
  return {
    total: items.length,
    open: items.filter((item) => !item.resolution).length,
    resolved: items.filter((item) => Boolean(item.resolution)).length,
  }
}
