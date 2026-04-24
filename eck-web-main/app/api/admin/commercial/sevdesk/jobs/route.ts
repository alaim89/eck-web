import { NextResponse } from 'next/server'
import { listCommercialJobs } from '@/lib/commercial/sevdesk-sync'
import { requirePermission } from '@/lib/iam/guard'

export async function GET() {
  const access = await requirePermission('lead.view')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    jobs: listCommercialJobs(),
  })
}
