import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { getReconciliationOverview } from '@/lib/ops/reconciliation'

export async function GET() {
  const access = await requirePermission('audit.view')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    overview: getReconciliationOverview(),
  })
}
