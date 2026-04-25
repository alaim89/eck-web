import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { exportVisitorRowsCsv, getVisitorAnalytics } from '@/lib/analytics/visitors'

const parseDateParam = (value: string | null, fallback: Date): Date => {
  if (!value) return fallback
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

export async function GET(request: Request) {
  const access = await requirePermission('analytics.view')
  if (!access.ok) return access.response

  const url = new URL(request.url)
  const now = new Date()
  const from = parseDateParam(url.searchParams.get('from'), new Date(now.getTime() - 30 * 86400000))
  const to = parseDateParam(url.searchParams.get('to'), now)

  const analytics = getVisitorAnalytics({
    from,
    to,
    granularity: 'day',
    page: 1,
    pageSize: 50_000,
  })

  const csv = exportVisitorRowsCsv(analytics.rows)
  const fileName = `visitor-export-${from.toISOString().slice(0, 10)}_${to.toISOString().slice(0, 10)}.csv`

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${fileName}"`,
      'cache-control': 'no-store',
    },
  })
}

