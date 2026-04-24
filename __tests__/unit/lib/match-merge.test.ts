import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  evaluateCustomerCandidate,
  reopenReviewItem,
  rollbackReviewResolution,
  resolveReviewItem,
  resetReviewQueue,
  scoreCustomerMatch,
  getReviewQueueSummary,
} from '@/lib/customer/match-merge'

describe('customer match merge', () => {
  beforeEach(() => {
    resetReviewQueue()
  })

  it('auto-matches high confidence candidates', () => {
    const result = evaluateCustomerCandidate(
      {
        email: 'max@example.com',
        companyName: 'Beispiel GmbH',
      },
      [
        {
          customerId: 'cust-1',
          email: 'max@example.com',
          companyName: 'Beispiel GmbH',
        },
      ]
    )

    expect(result.state).toBe('MATCH')
  })

  it('flags medium confidence candidates for review and resolves them', () => {
    const result = evaluateCustomerCandidate(
      {
        email: 'medium@example.com',
      },
      [
        {
          customerId: 'cust-2',
          email: 'medium@example.com',
        },
      ]
    )

    expect(result.state).toBe('FLAG_FOR_REVIEW')
    if (result.state === 'FLAG_FOR_REVIEW') {
      const resolved = resolveReviewItem({
        reviewId: result.reviewId,
        resolution: 'MERGE',
        resolvedBy: 'manager@example.com',
      })

      expect(resolved.ok).toBe(true)
      if (resolved.ok) {
        expect(resolved.item.resolution).toBe('MERGE')
      }
    }

    const summary = getReviewQueueSummary()
    expect(summary.total).toBe(1)
    expect(summary.resolved).toBe(1)
  })

  it('supports reopen and rollback flow with action history', () => {
    const result = evaluateCustomerCandidate(
      { email: 'flow@example.com' },
      [{ customerId: 'cust-flow', email: 'flow@example.com' }]
    )

    expect(result.state).toBe('FLAG_FOR_REVIEW')
    if (result.state !== 'FLAG_FOR_REVIEW') return

    const resolved = resolveReviewItem({
      reviewId: result.reviewId,
      resolution: 'MATCH',
      resolvedBy: 'a@example.com',
    })
    expect(resolved.ok).toBe(true)

    const reopened = reopenReviewItem({
      reviewId: result.reviewId,
      actor: 'b@example.com',
    })
    expect(reopened.ok).toBe(true)

    const rolledBack = rollbackReviewResolution({
      reviewId: result.reviewId,
      actor: 'c@example.com',
      resolution: 'MERGE',
    })
    expect(rolledBack.ok).toBe(true)
    if (rolledBack.ok) {
      expect(rolledBack.item.resolution).toBe('MERGE')
      expect(rolledBack.item.actionHistory.length).toBeGreaterThan(2)
    }
  })

  it('returns ignore for test data and low score create candidates', () => {
    const ignore = evaluateCustomerCandidate({ isTest: true }, [])
    expect(ignore.state).toBe('IGNORE')

    const create = evaluateCustomerCandidate(
      {
        email: 'new@example.com',
      },
      [
        {
          customerId: 'cust-3',
          email: 'other@example.com',
        },
      ]
    )

    expect(create.state).toBe('CREATE')
  })

  it('scores exact crm id match as high confidence', () => {
    const score = scoreCustomerMatch(
      { crmContactId: 'crm-1' },
      {
        customerId: 'cust-4',
        crmContactId: 'crm-1',
      }
    )

    expect(score).toBe(1)
  })
})

describe('customer match merge persistence', () => {
  const previousMode = process.env.OPS_PERSISTENCE_MODE
  const previousDir = process.env.OPS_DATA_DIR

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = previousMode
    process.env.OPS_DATA_DIR = previousDir
  })

  it('restores review queue items from file persistence on module init', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'match-merge-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir

    const first = await import('@/lib/customer/match-merge')
    first.resetReviewQueue()

    const result = first.evaluateCustomerCandidate(
      {
        email: 'persisted@example.com',
      },
      [
        {
          customerId: 'cust-persisted',
          email: 'persisted@example.com',
        },
      ]
    )

    expect(result.state).toBe('FLAG_FOR_REVIEW')
    vi.resetModules()

    const second = await import('@/lib/customer/match-merge')
    expect(second.getReviewQueueSummary().total).toBe(1)
  })
})
