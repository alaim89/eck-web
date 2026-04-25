import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { exportVisitorRowsCsv, getVisitorAnalytics } from '@/lib/analytics/visitors'
import { appendAuditLog } from '@/lib/ops/audit-log'

const parseDateParam = (value: string | null, fallback: Date): Date => {
  if (!value) return fallback
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}
const MAX_RANGE_MS = 366 * 24 * 60 * 60 * 1000

export async function GET(request: Request) {
  const access = await requirePermission('analytics.view')
  if (!access.ok) return access.response

  const url = new URL(request.url)
  const now = new Date()
  const from = parseDateParam(url.searchParams.get('from'), new Date(now.getTime() - 30 * 86400000))
  const to = parseDateParam(url.searchParams.get('to'), now)
  const boundedFrom = new Date(Math.max(from.getTime(), to.getTime() - MAX_RANGE_MS))

  const analytics = getVisitorAnalytics({
    from: boundedFrom,
    to,
    granularity: 'day',
    page: 1,
    pageSize: 50_000,
  })

  const csv = exportVisitorRowsCsv(analytics.rows)
  const fileName = `visitor-export-${from.toISOString().slice(0, 10)}_${to.toISOString().slice(0, 10)}.csv`

  appendAuditLog({
    level: 'info',
    actor: access.user.email,
    action: 'analytics.visitors.export_csv',
    objectType: 'analytics',
    details: { from: boundedFrom.toISOString(), to: to.toISOString(), rows: analytics.rows.length },
  })

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${fileName}"`,
      'cache-control': 'no-store',
    },
  })
}
