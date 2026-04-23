import crypto from 'node:crypto'
import { type LeadPayload } from '@/lib/lead/intake'

export type CrmSyncJobStatus = 'queued' | 'sent' | 'skipped_test'

export type CrmSyncJob = {
  jobId: string
  leadReference: string
  idempotencyKey: string
  payload: LeadPayload
  status: CrmSyncJobStatus
  crmLeadId?: string
  createdAt: string
  processedAt?: string
}

const jobQueue: CrmSyncJob[] = []
const jobsByIdempotency = new Map<string, CrmSyncJob>()

const createJobId = (seed: string) =>
  crypto.createHash('sha256').update(seed).digest('hex').slice(0, 16)

export const queueLeadForCrmSync = (params: {
  idempotencyKey: string
  leadReference: string
  payload: LeadPayload
}) => {
  const existing = jobsByIdempotency.get(params.idempotencyKey)

  if (existing) {
    return {
      duplicate: true as const,
      job: existing,
    }
  }

  const job: CrmSyncJob = {
    jobId: createJobId(`${params.idempotencyKey}:${params.leadReference}`),
    leadReference: params.leadReference,
    idempotencyKey: params.idempotencyKey,
    payload: params.payload,
    status: 'queued',
    createdAt: new Date().toISOString(),
  }

  jobsByIdempotency.set(params.idempotencyKey, job)
  jobQueue.push(job)

  return {
    duplicate: false as const,
    job,
  }
}

export const processNextCrmSyncJob = () => {
  const nextJob = jobQueue.find((job) => job.status === 'queued')

  if (!nextJob) {
    return {
      processed: false as const,
      reason: 'no_jobs' as const,
    }
  }

  if (nextJob.payload.isTest) {
    nextJob.status = 'skipped_test'
    nextJob.processedAt = new Date().toISOString()
    return {
      processed: true as const,
      job: nextJob,
    }
  }

  const crmLeadId = `crm_${createJobId(nextJob.leadReference)}`
  nextJob.status = 'sent'
  nextJob.crmLeadId = crmLeadId
  nextJob.processedAt = new Date().toISOString()

  return {
    processed: true as const,
    job: nextJob,
  }
}

export const getCrmSyncJobs = () => [...jobQueue]


export const resetCrmSyncState = () => {
  jobQueue.length = 0
  jobsByIdempotency.clear()
}


export const getCrmSyncSummary = () => {
  const jobs = getCrmSyncJobs()
  return {
    total: jobs.length,
    queued: jobs.filter((job) => job.status === 'queued').length,
    sent: jobs.filter((job) => job.status === 'sent').length,
    skippedTest: jobs.filter((job) => job.status === 'skipped_test').length,
  }
}
