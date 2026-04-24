import crypto from 'node:crypto'
import { readJsonFile, writeJsonFile } from '@/lib/ops/persistence'

export type CommercialCandidate = {
  customerId: string
  crmOpportunityId?: string
  opportunityStatus?: string
  approvedForCommercial?: boolean
  billingAddressComplete?: boolean
  contactEmail?: string
  isTest?: boolean
}

export type CommercialSyncStatus =
  | 'queued'
  | 'processed'
  | 'blocked_test'
  | 'blocked_incomplete'
  | 'blocked_not_relevant'

export type CommercialSyncJob = {
  jobId: string
  candidate: CommercialCandidate
  status: CommercialSyncStatus
  reason?: string
  sevdeskContactId?: string
  sevdeskQuoteId?: string
  createdAt: string
  processedAt?: string
}

const SEVDESK_FILE = 'sevdesk-sync-jobs.json'

const jobs: CommercialSyncJob[] = readJsonFile<CommercialSyncJob[]>(SEVDESK_FILE, [])

const persist = () => {
  writeJsonFile(SEVDESK_FILE, jobs)
}

const createId = (seed: string) => crypto.createHash('sha256').update(seed).digest('hex').slice(0, 16)

export const evaluateCommercialRelevance = (candidate: CommercialCandidate) => {
  if (candidate.isTest) {
    return {
      relevant: false,
      status: 'blocked_test' as CommercialSyncStatus,
      reason: 'test_data',
    }
  }

  if (!candidate.approvedForCommercial || !candidate.billingAddressComplete) {
    return {
      relevant: false,
      status: 'blocked_incomplete' as CommercialSyncStatus,
      reason: 'missing_approval_or_billing_data',
    }
  }

  if (candidate.opportunityStatus !== 'Angebot angefordert') {
    return {
      relevant: false,
      status: 'blocked_not_relevant' as CommercialSyncStatus,
      reason: 'opportunity_not_ready',
    }
  }

  return {
    relevant: true,
    status: 'queued' as CommercialSyncStatus,
  }
}

export const queueCommercialSync = (candidate: CommercialCandidate) => {
  const evalResult = evaluateCommercialRelevance(candidate)
  const jobId = createId(`${candidate.customerId}:${candidate.crmOpportunityId || 'none'}`)

  const existing = jobs.find((job) => job.jobId === jobId)
  if (existing) {
    return existing
  }

  const job: CommercialSyncJob = {
    jobId,
    candidate,
    status: evalResult.status,
    reason: evalResult.reason,
    createdAt: new Date().toISOString(),
  }

  jobs.unshift(job)
  persist()
  return job
}

export const processNextCommercialJob = () => {
  const next = jobs.find((job) => job.status === 'queued')

  if (!next) {
    return {
      processed: false as const,
      reason: 'no_queued_jobs',
    }
  }

  next.status = 'processed'
  next.sevdeskContactId = `sev_contact_${next.jobId}`
  next.sevdeskQuoteId = `sev_quote_${next.jobId}`
  next.processedAt = new Date().toISOString()
  persist()

  return {
    processed: true as const,
    job: next,
  }
}

export const listCommercialJobs = () => [...jobs]

export const resetCommercialJobs = () => {
  jobs.length = 0
  persist()
}
