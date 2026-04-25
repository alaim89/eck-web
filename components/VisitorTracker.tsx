'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { getStoredConsent } from '@/lib/cookie-consent'

const SESSION_KEY = 'visitor_session_id'

const getDeviceType = (): 'desktop' | 'tablet' | 'smartphone' => {
  const ua = navigator.userAgent.toLowerCase()
  if (/ipad|tablet|playbook|silk/.test(ua)) return 'tablet'
  if (/mobi|android|iphone|ipod/.test(ua)) return 'smartphone'
  return 'desktop'
}

const getBrowser = () => {
  const ua = navigator.userAgent
  if (ua.includes('Edg/')) return 'Edge'
  if (ua.includes('Firefox/')) return 'Firefox'
  if (ua.includes('Chrome/')) return 'Chrome'
  if (ua.includes('Safari/')) return 'Safari'
  return 'Unknown'
}

const getSessionId = () => {
  const existing = sessionStorage.getItem(SESSION_KEY)
  if (existing) return existing
  const next = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`
  sessionStorage.setItem(SESSION_KEY, next)
  return next
}

export function VisitorTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return

    const consent = getStoredConsent()
    if (!consent?.analytics) return

    try {
      const params = new URLSearchParams(searchParams?.toString() || '')
      const payload = {
        session_id: getSessionId(),
        page_url: `${pathname}${params.toString() ? `?${params.toString()}` : ''}`,
        referrer: document.referrer || null,
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        device_type: getDeviceType(),
        browser: getBrowser(),
        event_ts: Date.now(),
      }

      const body = JSON.stringify(payload)
      if (navigator.sendBeacon) {
        const blob = new Blob([body], { type: 'application/json' })
        navigator.sendBeacon('/api/track/visit', blob)
        return
      }

      fetch('/api/track/visit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => undefined)
    } catch {
      // silently ignore tracking errors
    }
  }, [pathname, searchParams])

  return null
}
