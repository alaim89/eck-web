import { NextResponse } from 'next/server'
import { hashIp, recordVisitorEvent, type DeviceType } from '@/lib/analytics/visitors'

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

    recordVisitorEvent({
      session_id: sessionId,
      page_url: pageUrl,
      referrer: body.referrer || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      device_type: deviceTypeRaw,
      browser,
      ip_hash: hashIp(getClientIp(request)),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }
}

