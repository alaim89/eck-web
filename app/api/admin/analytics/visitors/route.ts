import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { getLiveVisitorSnapshot, getVisitorAnalytics } from '@/lib/analytics/visitors'
import { appendAuditLog } from '@/lib/ops/audit-log'

const parseDateParam = (value: string | null, fallback: Date): Date => {
  if (!value) return fallback
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

const parseGranularity = (value: string | null): 'day' | 'week' | 'month' => {
  if (value === 'week' || value === 'month') return value
  return 'day'
}

export async function GET(request: Request) {
  const access = await requirePermission('analytics.view')
  if (!access.ok) return access.response

  const url = new URL(request.url)
  const now = new Date()
  const from = parseDateParam(url.searchParams.get('from'), new Date(now.getTime() - 30 * 86400000))
  const to = parseDateParam(url.searchParams.get('to'), now)
  const page = Number(url.searchParams.get('page') || '1')
  const pageSize = Number(url.searchParams.get('page_size') || '25')
  const granularity = parseGranularity(url.searchParams.get('granularity'))

  const live = getLiveVisitorSnapshot()
  const historical = getVisitorAnalytics({ from, to, page, pageSize, granularity })

  appendAuditLog({
    level: 'info',
    actor: access.user.email,
    action: 'analytics.visitors.view',
    objectType: 'analytics',
    details: { from: from.toISOString(), to: to.toISOString(), granularity, page, pageSize },
  })

  return NextResponse.json({
    ok: true,
    user: access.user,
    live,
    historical,
    filters: {
      from: from.toISOString(),
      to: to.toISOString(),
      granularity,
      page: historical.page,
      page_size: historical.page_size,
    },
    privacy: {
      stores_full_ip: false,
      tracking_mode: 'cookie_less_with_consent',
      note: 'Keine personenbezogenen Daten werden erfasst; IP wird nur gehasht gespeichert.',
    },
  })
}
