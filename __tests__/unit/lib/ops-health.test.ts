import { beforeEach, describe, expect, it } from 'vitest'
import { queueLeadForCrmSync, resetCrmSyncState } from '@/lib/integrations/crm-sync'
import { evaluateCustomerCandidate, resetReviewQueue } from '@/lib/customer/match-merge'
import { appendAuditLog, resetAuditLogs } from '@/lib/ops/audit-log'
import { getOperationsHealth } from '@/lib/ops/health'

describe('operations health', () => {
  beforeEach(() => {
    resetCrmSyncState()
    resetReviewQueue()
    resetAuditLogs()
    process.env.ADMIN_AUTH_DISABLED = 'false'
  })

  it('returns warning when no audit entries exist', () => {
    const health = getOperationsHealth()
    expect(health.overallSeverity).toBe('warning')
  })

  it('returns critical when admin auth is disabled', () => {
    process.env.ADMIN_AUTH_DISABLED = 'true'
    appendAuditLog({
      level: 'info',
      actor: 'admin@example.com',
      action: 'admin.login.succeeded',
      objectType: 'session',
    })

    const health = getOperationsHealth()
    expect(health.overallSeverity).toBe('critical')
  })

  it('returns ok when queue/review/audit are healthy and auth enabled', () => {
    appendAuditLog({
      level: 'info',
      actor: 'admin@example.com',
      action: 'admin.login.succeeded',
      objectType: 'session',
    })

    queueLeadForCrmSync({
      idempotencyKey: 'k1',
      leadReference: 'l1',
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

    evaluateCustomerCandidate({ email: 'nobody@example.com' }, [])

    const health = getOperationsHealth()
    expect(health.overallSeverity).toBe('ok')
  })
})
