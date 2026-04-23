import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'

export async function GET() {
  const access = await requirePermission('lead.view')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    message: 'Admin dashboard data is accessible',
    user: access.user,
    widgets: [
      { key: 'lead_pipeline', label: 'Lead Pipeline', status: 'healthy' },
      { key: 'crm_sync', label: 'CRM Sync', status: 'healthy' },
      { key: 'sevdesk_sync', label: 'sevdesk Sync', status: 'pending' },
    ],
  })
}
