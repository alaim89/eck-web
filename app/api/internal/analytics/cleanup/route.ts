import { NextResponse } from 'next/server'
import { pruneExpiredVisitorEvents } from '@/lib/analytics/visitors'
import { logger } from '@/lib/logger'

const isAuthorized = (request: Request) => {
  const configuredToken = process.env.ANALYTICS_CRON_TOKEN
  if (!configuredToken) return false
  const incoming = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') || ''
  return incoming.length > 0 && incoming === configuredToken
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  const deleted = pruneExpiredVisitorEvents()
  logger.info('analytics.cleanup.completed', { deleted })

  return NextResponse.json({
    ok: true,
    deleted,
  })
}

