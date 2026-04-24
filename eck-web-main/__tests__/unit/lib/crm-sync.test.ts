import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
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

describe('crm sync queue persistence', () => {
  const previousMode = process.env.OPS_PERSISTENCE_MODE
  const previousDir = process.env.OPS_DATA_DIR

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = previousMode
    process.env.OPS_DATA_DIR = previousDir
  })

  it('restores queue state from file persistence after reload', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'crm-sync-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir

    const first = await import('@/lib/integrations/crm-sync')
    first.resetCrmSyncState()
    first.queueLeadForCrmSync({
      idempotencyKey: 'persist-idem-1',
      leadReference: 'persist-ref-1',
      payload: {
        firstName: 'Persist',
        lastName: 'Lead',
        email: 'persist@example.com',
        company: 'Persist GmbH',
        message: 'Persist queue',
        consent: true,
        isTest: false,
      },
    })

    vi.resetModules()

    const second = await import('@/lib/integrations/crm-sync')
    const jobs = second.getCrmSyncJobs()
    expect(jobs).toHaveLength(1)
    expect(jobs[0].idempotencyKey).toBe('persist-idem-1')
  })
})
