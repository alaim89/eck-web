import { listCommercialJobs } from '@/lib/commercial/sevdesk-sync'
import { listReviewQueue } from '@/lib/customer/match-merge'
import { getCrmSyncJobs } from '@/lib/integrations/crm-sync'

export const getReconciliationOverview = () => {
  const crmJobs = getCrmSyncJobs()
  const commercialJobs = listCommercialJobs()
  const reviewItems = listReviewQueue()

  const crm = {
    total: crmJobs.length,
    queued: crmJobs.filter((job) => job.status === 'queued').length,
    sent: crmJobs.filter((job) => job.status === 'sent').length,
    skippedTest: crmJobs.filter((job) => job.status === 'skipped_test').length,
  }

  const sevdesk = {
    total: commercialJobs.length,
    queued: commercialJobs.filter((job) => job.status === 'awaiting_approval').length,
    processed: commercialJobs.filter((job) => job.status === 'processed').length,
    blocked: commercialJobs.filter((job) => job.status.startsWith('blocked_')).length,
  }

  const reviews = {
    total: reviewItems.length,
    open: reviewItems.filter((item) => !item.resolution).length,
    resolved: reviewItems.filter((item) => Boolean(item.resolution)).length,
  }

  const actions: string[] = []
  if (crm.queued > 0) actions.push('Process pending CRM sync jobs')
  if (sevdesk.queued > 0) actions.push('Process pending sevdesk jobs')
  if (sevdesk.blocked > 0) actions.push('Review blocked sevdesk candidates')
  if (reviews.open > 0) actions.push('Resolve customer review queue items')

  return {
    generatedAt: new Date().toISOString(),
    crm,
    sevdesk,
    reviews,
    actions,
  }
}
