import crypto from 'node:crypto'
import { readJsonFile, writeJsonFile } from '@/lib/ops/persistence'

const VISITOR_FILE = 'visitor-events.json'
const ACTIVE_WINDOW_MS = 5 * 60 * 1000
const SESSION_TOUCH_WINDOW_MS = 30 * 60 * 1000

export type DeviceType = 'desktop' | 'tablet' | 'smartphone'

export type VisitorEvent = {
  id: string
  session_id: string
  page_url: string
  referrer: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  device_type: DeviceType
  browser: string
  ip_hash: string | null
  created_at: string
  last_seen_at: string
}

type RecordVisitInput = Omit<VisitorEvent, 'id' | 'created_at' | 'last_seen_at'>

const visitorEvents: VisitorEvent[] = readJsonFile<VisitorEvent[]>(VISITOR_FILE, [])

const persist = () => writeJsonFile(VISITOR_FILE, visitorEvents)

const clampString = (value: string | null | undefined, maxLength: number): string | null => {
  if (!value) return null
  return value.trim().slice(0, maxLength) || null
}

const normalizePageUrl = (input: string): string => {
  const raw = input.trim()
  if (!raw) return '/'
  if (raw.startsWith('/')) return raw.slice(0, 1024)

  try {
    const parsed = new URL(raw)
    return `${parsed.pathname}${parsed.search}`.slice(0, 1024)
  } catch {
    return '/unknown'
  }
}

const parseDate = (value: string) => {
  const timestamp = Date.parse(value)
  return Number.isFinite(timestamp) ? timestamp : 0
}

export const hashIp = (ip: string | null): string | null => {
  if (!ip) return null
  const salt = process.env.ANALYTICS_IP_SALT || process.env.SESSION_SECRET || 'analytics'
  return crypto.createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 16)
}

export const recordVisitorEvent = (input: RecordVisitInput): VisitorEvent => {
  const now = new Date().toISOString()
  const normalizedPage = normalizePageUrl(input.page_url)

  const existing = [...visitorEvents]
    .reverse()
    .find(
      (entry) =>
        entry.session_id === input.session_id &&
        entry.page_url === normalizedPage &&
        Date.now() - parseDate(entry.last_seen_at) <= SESSION_TOUCH_WINDOW_MS
    )

  if (existing) {
    existing.last_seen_at = now
    existing.referrer = clampString(input.referrer, 512)
    existing.utm_source = clampString(input.utm_source, 120)
    existing.utm_medium = clampString(input.utm_medium, 120)
    existing.utm_campaign = clampString(input.utm_campaign, 160)
    existing.device_type = input.device_type
    existing.browser = clampString(input.browser, 120) || 'Unknown'
    existing.ip_hash = input.ip_hash
    persist()
    return existing
  }

  const event: VisitorEvent = {
    id: crypto.randomUUID(),
    session_id: input.session_id.slice(0, 120),
    page_url: normalizedPage,
    referrer: clampString(input.referrer, 512),
    utm_source: clampString(input.utm_source, 120),
    utm_medium: clampString(input.utm_medium, 120),
    utm_campaign: clampString(input.utm_campaign, 160),
    device_type: input.device_type,
    browser: clampString(input.browser, 120) || 'Unknown',
    ip_hash: input.ip_hash,
    created_at: now,
    last_seen_at: now,
  }

  visitorEvents.push(event)
  persist()
  return event
}

export const getLiveVisitorSnapshot = () => {
  const cutoff = Date.now() - ACTIVE_WINDOW_MS
  const bySession = new Map<string, VisitorEvent>()

  for (const event of visitorEvents) {
    if (parseDate(event.last_seen_at) < cutoff) continue
    const current = bySession.get(event.session_id)
    if (!current || parseDate(current.last_seen_at) < parseDate(event.last_seen_at)) {
      bySession.set(event.session_id, event)
    }
  }

  const visitors = [...bySession.values()]
    .sort((a, b) => parseDate(b.last_seen_at) - parseDate(a.last_seen_at))
    .map((entry) => ({
      session_id: entry.session_id,
      page_url: entry.page_url,
      last_seen_at: entry.last_seen_at,
      referrer: entry.referrer,
      utm_source: entry.utm_source,
      utm_medium: entry.utm_medium,
      utm_campaign: entry.utm_campaign,
      device_type: entry.device_type,
      browser: entry.browser,
    }))

  return {
    online_count: visitors.length,
    visitors,
  }
}

const bucketKeyForDate = (date: Date, granularity: 'day' | 'week' | 'month') => {
  if (granularity === 'month') {
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`
  }

  if (granularity === 'week') {
    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
    const day = d.getUTCDay() || 7
    d.setUTCDate(d.getUTCDate() + 4 - day)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
  }

  return date.toISOString().slice(0, 10)
}

export const getVisitorAnalytics = ({
  from,
  to,
  granularity,
  page,
  pageSize,
}: {
  from: Date
  to: Date
  granularity: 'day' | 'week' | 'month'
  page: number
  pageSize: number
}) => {
  const fromTs = from.getTime()
  const toTs = to.getTime()
  const filtered = visitorEvents.filter((entry) => {
    const created = parseDate(entry.created_at)
    return created >= fromTs && created <= toTs
  })

  const uniqueSessions = new Set(filtered.map((entry) => entry.session_id))
  const buckets = new Map<string, Set<string>>()
  const topPages = new Map<string, number>()

  for (const entry of filtered) {
    const key = bucketKeyForDate(new Date(parseDate(entry.created_at)), granularity)
    if (!buckets.has(key)) buckets.set(key, new Set())
    buckets.get(key)?.add(entry.session_id)

    topPages.set(entry.page_url, (topPages.get(entry.page_url) || 0) + 1)
  }

  const sortedRows = [...filtered].sort((a, b) => parseDate(b.created_at) - parseDate(a.created_at))
  const safePage = Math.max(1, page)
  const safePageSize = Math.min(Math.max(pageSize, 1), 200)
  const offset = (safePage - 1) * safePageSize
  const pagedRows = sortedRows.slice(offset, offset + safePageSize)

  return {
    total_visits: filtered.length,
    total_unique_sessions: uniqueSessions.size,
    buckets: [...buckets.entries()]
      .map(([bucket, sessions]) => ({ bucket, visitors: sessions.size }))
      .sort((a, b) => a.bucket.localeCompare(b.bucket)),
    rows: pagedRows,
    total_rows: sortedRows.length,
    page: safePage,
    page_size: safePageSize,
    top_pages: [...topPages.entries()]
      .map(([pageUrl, views]) => ({ page_url: pageUrl, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 15),
  }
}

export const exportVisitorRowsCsv = (rows: VisitorEvent[]) => {
  const header = [
    'id',
    'session_id',
    'page_url',
    'referrer',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'device_type',
    'browser',
    'created_at',
    'last_seen_at',
  ]

  const escapeCsv = (value: string | null) => `"${(value || '').replaceAll('"', '""')}"`

  const lines = rows.map((entry) =>
    [
      entry.id,
      entry.session_id,
      entry.page_url,
      entry.referrer,
      entry.utm_source,
      entry.utm_medium,
      entry.utm_campaign,
      entry.device_type,
      entry.browser,
      entry.created_at,
      entry.last_seen_at,
    ]
      .map((value) => escapeCsv(value))
      .join(',')
  )

  return [header.join(','), ...lines].join('\n')
}

