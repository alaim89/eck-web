import { NextResponse } from 'next/server'
import { queueCommercialSync, type CommercialCandidate } from '@/lib/commercial/sevdesk-sync'
import { requirePermission } from '@/lib/iam/guard'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST(request: Request) {
  const access = await requirePermission('crm.sync')

  if (!access.ok) {
    return access.response
  }

  const candidate = (await request.json()) as CommercialCandidate
  const job = queueCommercialSync(candidate)

  appendAuditLog({
    level: 'info',
    actor: access.user.email,
    action: 'commercial.sevdesk.prepared',
    objectType: 'sevdesk_sync_job',
    objectId: job.jobId,
    details: { status: job.status, reason: job.reason },
  })

  return NextResponse.json({
    ok: true,
    job,
  })
}
