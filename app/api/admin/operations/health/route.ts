import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { getOperationsHealth } from '@/lib/ops/health'

export async function GET() {
  const access = await requirePermission('audit.view')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    health: getOperationsHealth(),
  })
}
