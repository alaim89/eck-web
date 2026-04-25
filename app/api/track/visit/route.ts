import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { z } from 'zod'
import { hashIp, recordVisitorEvent } from '@/lib/analytics/visitors'
import { consumeRateLimit } from '@/lib/security/rate-limit'
import { logger } from '@/lib/logger'

const getClientIp = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
  request.headers.get('x-real-ip')?.trim() ||
  null

const payloadSchema = z.object({
  session_id: z.string().min(8).max(120),
  page_url: z.string().min(1).max(1024),
  referrer: z.string().max(512).nullable().optional(),
  utm_source: z.string().max(120).nullable().optional(),
  utm_medium: z.string().max(120).nullable().optional(),
  utm_campaign: z.string().max(160).nullable().optional(),
  device_type: z.enum(['desktop', 'tablet', 'smartphone']),
  browser: z.string().min(2).max(120),
  event_ts: z.number().int().optional(),
})

const trafficWindow = {
  startedAt: Date.now(),
  total: 0,
  errors: 0,
  rateLimited: 0,
}

const bumpTraffic = (field: 'total' | 'errors' | 'rateLimited') => {
  const now = Date.now()
  if (now - trafficWindow.startedAt > 60_000) {
    trafficWindow.startedAt = now
    trafficWindow.total = 0
    trafficWindow.errors = 0
    trafficWindow.rateLimited = 0
  }
  trafficWindow[field] += 1
}

export async function POST(request: Request) {
  try {
    const body = payloadSchema.safeParse(await request.json())
    if (!body.success) {
      bumpTraffic('errors')
      logger.warn('analytics.track.invalid_payload', {
        issueCount: body.error.issues.length,
      })
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
    }

    const {
      session_id: sessionId,
      page_url: pageUrl,
      browser,
      device_type: deviceTypeRaw,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      event_ts: eventTs,
    } = body.data

    if (eventTs && Math.abs(Date.now() - eventTs) > 15 * 60_000) {
      bumpTraffic('errors')
      logger.warn('analytics.track.stale_or_future_event', {
        sessionId: sessionId.slice(0, 12),
      })
      return NextResponse.json({ ok: false, error: 'stale_event' }, { status: 400 })
    }

    const ipHash = hashIp(getClientIp(request))
    const rateLimit = Number(process.env.ANALYTICS_TRACK_RATE_LIMIT_PER_MINUTE || '120')
    const rate = consumeRateLimit({
      key: `track:${ipHash || 'anon'}:${sessionId.slice(0, 32)}`,
      limit: Number.isFinite(rateLimit) ? Math.max(10, rateLimit) : 120,
      windowMs: 60_000,
    })

    if (!rate.allowed) {
      bumpTraffic('rateLimited')
      logger.warn('analytics.track.rate_limited', {
        sessionId: sessionId.slice(0, 12),
        ipHash,
      })
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
    }

    recordVisitorEvent({
      session_id: sessionId,
      page_url: pageUrl,
      referrer: referrer || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      device_type: deviceTypeRaw,
      browser,
      ip_hash: ipHash,
    })

    bumpTraffic('total')
    if (rate.remaining <= 5) {
      logger.warn('analytics.track.high_request_rate', {
        sessionId: sessionId.slice(0, 12),
        remaining: rate.remaining,
      })
    }
    if (trafficWindow.total >= 1000) {
      logger.warn('analytics.track.traffic_spike', {
        perMinute: trafficWindow.total,
        errors: trafficWindow.errors,
        rateLimited: trafficWindow.rateLimited,
      })
      Sentry.captureMessage('analytics.track.traffic_spike', 'warning')
    }
    logger.info('analytics.track.accepted', {
      pageUrl,
      sessionId: sessionId.slice(0, 12),
      deviceType: deviceTypeRaw,
      remaining: rate.remaining,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    bumpTraffic('errors')
    logger.error('analytics.track.unhandled_error', {
      error: error instanceof Error ? error.message : String(error),
    })
    Sentry.captureException(error, { tags: { module: 'analytics', endpoint: 'track_visit' } })
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }
}
