import { NextResponse } from 'next/server'
import { processNextCommercialJob } from '@/lib/commercial/sevdesk-sync'
import { requirePermission } from '@/lib/iam/guard'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST() {
  const access = await requirePermission('crm.sync')

  if (!access.ok) {
    return access.response
  }

  const result = processNextCommercialJob()

  appendAuditLog({
    level: result.processed ? 'info' : 'warn',
    actor: access.user.email,
    action: 'commercial.sevdesk.process_next',
    objectType: 'sevdesk_sync_job',
    objectId: result.processed ? result.job.jobId : undefined,
    details: result,
  })

  return NextResponse.json({
    ok: true,
    result,
  })
}
