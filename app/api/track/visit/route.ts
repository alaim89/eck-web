import { NextResponse } from 'next/server'
import { hashIp, recordVisitorEvent, type DeviceType } from '@/lib/analytics/visitors'
import { consumeRateLimit } from '@/lib/security/rate-limit'

const getClientIp = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
  request.headers.get('x-real-ip')?.trim() ||
  null

const isDeviceType = (value: string): value is DeviceType =>
  value === 'desktop' || value === 'tablet' || value === 'smartphone'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string | null | undefined>

    const sessionId = String(body.session_id || '').trim()
    const pageUrl = String(body.page_url || '').trim()
    const browser = String(body.browser || '').trim()
    const deviceTypeRaw = String(body.device_type || '').trim()

    if (!sessionId || !pageUrl || !browser || !isDeviceType(deviceTypeRaw)) {
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
    }

    const ipHash = hashIp(getClientIp(request))
    const rateLimit = Number(process.env.ANALYTICS_TRACK_RATE_LIMIT_PER_MINUTE || '120')
    const rate = consumeRateLimit({
      key: `track:${ipHash || 'anon'}:${sessionId.slice(0, 32)}`,
      limit: Number.isFinite(rateLimit) ? Math.max(10, rateLimit) : 120,
      windowMs: 60_000,
    })

    if (!rate.allowed) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
    }

    recordVisitorEvent({
      session_id: sessionId,
      page_url: pageUrl,
      referrer: body.referrer || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      device_type: deviceTypeRaw,
      browser,
      ip_hash: ipHash,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }
}
