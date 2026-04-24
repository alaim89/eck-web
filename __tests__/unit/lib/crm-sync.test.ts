import { beforeEach, describe, expect, it } from 'vitest'
import {
  getCrmSyncJobs,
  processNextCrmSyncJob,
  queueLeadForCrmSync,
  resetCrmSyncState,
  getCrmSyncSummary,
} from '@/lib/integrations/crm-sync'

describe('crm sync queue', () => {
  beforeEach(() => {
    resetCrmSyncState()
  })

  it('queues lead with idempotency and prevents duplicate jobs', () => {
    const queued = queueLeadForCrmSync({
      idempotencyKey: 'crm-idem-1',
      leadReference: 'lead-ref-1',
      payload: {
        firstName: 'Max',
        lastName: 'Mustermann',
        email: 'max@example.com',
        company: 'Beispiel GmbH',
        message: 'Interesse an Beratung',
        consent: true,
        isTest: false,
      },
    })

    const duplicate = queueLeadForCrmSync({
      idempotencyKey: 'crm-idem-1',
      leadReference: 'lead-ref-1',
      payload: {
        firstName: 'Max',
        lastName: 'Mustermann',
        email: 'max@example.com',
        company: 'Beispiel GmbH',
        message: 'Interesse an Beratung',
        consent: true,
        isTest: false,
      },
    })

    expect(queued.duplicate).toBe(false)
    expect(duplicate.duplicate).toBe(true)
    expect(queued.job.jobId).toBe(duplicate.job.jobId)
  })

  it('marks test leads as skipped and productive leads as sent', () => {
    queueLeadForCrmSync({
      idempotencyKey: 'crm-idem-2',
      leadReference: 'lead-ref-2',
      payload: {
        firstName: 'Test',
        lastName: 'Kontakt',
        email: 'test@example.com',
        company: 'Sandbox GmbH',
        message: 'Test flow',
        consent: true,
        isTest: true,
      },
    })

    queueLeadForCrmSync({
      idempotencyKey: 'crm-idem-3',
      leadReference: 'lead-ref-3',
      payload: {
        firstName: 'Real',
        lastName: 'Kontakt',
        email: 'real@example.com',
        company: 'Live GmbH',
        message: 'Live flow',
        consent: true,
        isTest: false,
      },
    })

    const processedTest = processNextCrmSyncJob()
    expect(processedTest.processed).toBe(true)
    if (processedTest.processed) {
      expect(processedTest.job.status).toBe('skipped_test')
    }

    const processedReal = processNextCrmSyncJob()
    expect(processedReal.processed).toBe(true)
    if (processedReal.processed) {
      expect(processedReal.job.status).toBe('sent')
      expect(processedReal.job.crmLeadId?.startsWith('crm_')).toBe(true)
    }

    expect(getCrmSyncJobs().length).toBe(2)

    const summary = getCrmSyncSummary()
    expect(summary.total).toBe(2)
    expect(summary.skippedTest).toBe(1)
    expect(summary.sent).toBe(1)
  })
})
