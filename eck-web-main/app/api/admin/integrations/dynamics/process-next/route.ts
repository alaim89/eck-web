import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { processNextCrmSyncJob } from '@/lib/integrations/crm-sync'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST() {
  const access = await requirePermission('crm.sync')

  if (!access.ok) {
    return access.response
  }

  const result = processNextCrmSyncJob()

  appendAuditLog({
    level: result.processed ? 'info' : 'warn',
    actor: access.user.email,
    action: 'crm.sync.process_next',
    objectType: 'crm_sync_job',
    objectId: result.processed ? result.job.jobId : undefined,
    details: result,
  })

  return NextResponse.json({
    ok: true,
    result,
  })
}
