import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { processNextCrmSyncJob } from '@/lib/integrations/crm-sync'

export async function POST() {
  const access = await requirePermission('crm.sync')

  if (!access.ok) {
    return access.response
  }

  const result = processNextCrmSyncJob()

  return NextResponse.json({
    ok: true,
    result,
  })
}
