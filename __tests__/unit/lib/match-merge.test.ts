import { beforeEach, describe, expect, it } from 'vitest'
import {
  evaluateCustomerCandidate,
  resolveReviewItem,
  resetReviewQueue,
  scoreCustomerMatch,
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
