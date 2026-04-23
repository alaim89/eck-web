import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { getCrmSyncJobs } from '@/lib/integrations/crm-sync'

export async function GET() {
  const access = await requirePermission('lead.view')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    jobs: getCrmSyncJobs(),
  })
}
