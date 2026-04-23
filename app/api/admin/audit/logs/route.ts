import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { listAuditLogs } from '@/lib/ops/audit-log'

export async function GET(request: Request) {
  const access = await requirePermission('audit.view')

  if (!access.ok) {
    return access.response
  }

  const { searchParams } = new URL(request.url)

  const action = searchParams.get('action') || undefined
  const actor = searchParams.get('actor') || undefined
  const limit = Number(searchParams.get('limit') || '100')

  return NextResponse.json({
    ok: true,
    logs: listAuditLogs({
      action,
      actor,
      limit: Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 500) : 100,
    }),
  })
}
