import { beforeEach, describe, expect, it } from 'vitest'
import { queueCommercialSync, resetCommercialJobs } from '@/lib/commercial/sevdesk-sync'
import { queueLeadForCrmSync, resetCrmSyncState } from '@/lib/integrations/crm-sync'
import { evaluateCustomerCandidate, resetReviewQueue } from '@/lib/customer/match-merge'
import { getReconciliationOverview } from '@/lib/ops/reconciliation'

describe('reconciliation overview', () => {
  beforeEach(() => {
    resetCommercialJobs()
    resetCrmSyncState()
    resetReviewQueue()
  })

  it('aggregates counts and actions across crm/sevdesk/review queues', () => {
    queueLeadForCrmSync({
      idempotencyKey: 'r1',
      leadReference: 'lead-1',
      payload: {
        firstName: 'A',
        lastName: 'B',
        email: 'a@b.com',
        company: 'X',
        message: 'Y',
        consent: true,
        isTest: false,
      },
    })

    queueCommercialSync({
      customerId: 'cust-1',
      opportunityStatus: 'Qualifizierung',
      approvedForCommercial: true,
      billingAddressComplete: true,
    })

    evaluateCustomerCandidate(
      { email: 'medium@example.com' },
      [{ customerId: 'cust-2', email: 'medium@example.com' }]
    )

    const overview = getReconciliationOverview()
    expect(overview.crm.queued).toBe(1)
    expect(overview.sevdesk.blocked).toBe(1)
    expect(overview.reviews.open).toBe(1)
    expect(overview.actions.length).toBeGreaterThan(0)
  })
})
