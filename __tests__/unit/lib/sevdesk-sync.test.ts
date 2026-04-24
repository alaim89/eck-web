import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  evaluateCommercialRelevance,
  listCommercialJobs,
  processNextCommercialJob,
  queueCommercialSync,
  resetCommercialJobs,
} from '@/lib/commercial/sevdesk-sync'

describe('sevdesk commercial sync', () => {
  beforeEach(() => {
    resetCommercialJobs()
  })

  it('blocks test data from commercial sync', () => {
    const result = evaluateCommercialRelevance({
      customerId: 'c1',
      isTest: true,
    })

    expect(result.relevant).toBe(false)
    expect(result.status).toBe('blocked_test')
  })

  it('queues only relevant commercial candidates and processes them', () => {
    const blocked = queueCommercialSync({
      customerId: 'c2',
      opportunityStatus: 'Qualifizierung',
      approvedForCommercial: true,
      billingAddressComplete: true,
    })

    expect(blocked.status).toBe('blocked_not_relevant')

    const queued = queueCommercialSync({
      customerId: 'c3',
      crmOpportunityId: 'opp-1',
      opportunityStatus: 'Angebot angefordert',
      approvedForCommercial: true,
      billingAddressComplete: true,
      contactEmail: 'sales@example.com',
    })

    expect(queued.status).toBe('queued')

    const processed = processNextCommercialJob()
    expect(processed.processed).toBe(true)
    if (processed.processed) {
      expect(processed.job.status).toBe('processed')
      expect(processed.job.sevdeskContactId?.startsWith('sev_contact_')).toBe(true)
      expect(processed.job.sevdeskQuoteId?.startsWith('sev_quote_')).toBe(true)
    }

    expect(listCommercialJobs().length).toBe(2)
  })
})

describe('sevdesk commercial sync persistence', () => {
  const previousMode = process.env.OPS_PERSISTENCE_MODE
  const previousDir = process.env.OPS_DATA_DIR

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = previousMode
    process.env.OPS_DATA_DIR = previousDir
  })

  it('loads queued jobs from file persistence on module init', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sevdesk-sync-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir

    const first = await import('@/lib/commercial/sevdesk-sync')
    first.resetCommercialJobs()
    first.queueCommercialSync({
      customerId: 'persisted-c1',
      crmOpportunityId: 'persisted-opp',
      opportunityStatus: 'Angebot angefordert',
      approvedForCommercial: true,
      billingAddressComplete: true,
    })

    vi.resetModules()

    const second = await import('@/lib/commercial/sevdesk-sync')
    expect(second.listCommercialJobs().some((job) => job.candidate.customerId === 'persisted-c1')).toBe(true)
  })
})
