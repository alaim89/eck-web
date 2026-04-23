import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { getReviewQueueSummary } from '@/lib/customer/match-merge'
import { getCrmSyncSummary } from '@/lib/integrations/crm-sync'
import { getAuditLogSummary } from '@/lib/ops/audit-log'

export async function GET() {
  const access = await requirePermission('lead.view')

  if (!access.ok) {
    return access.response
  }

  const crm = getCrmSyncSummary()
  const review = getReviewQueueSummary()
  const audit = getAuditLogSummary()

  return NextResponse.json({
    ok: true,
    user: access.user,
    metrics: {
      crm,
      review,
      audit,
    },
    widgets: [
      {
        key: 'crm_sync',
        label: 'CRM Sync Queue',
        value: crm,
      },
      {
        key: 'customer_review',
        label: 'Customer Review Queue',
        value: review,
      },
      {
        key: 'audit',
        label: 'Audit Log',
        value: audit,
      },
    ],
  })
}
