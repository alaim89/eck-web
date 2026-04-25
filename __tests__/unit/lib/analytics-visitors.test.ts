import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('analytics visitors security & lifecycle', () => {
  const originalMode = process.env.OPS_PERSISTENCE_MODE
  const originalDir = process.env.OPS_DATA_DIR
  const originalRetention = process.env.ANALYTICS_RETENTION_DAYS

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = originalMode
    process.env.OPS_DATA_DIR = originalDir
    process.env.ANALYTICS_RETENTION_DAYS = originalRetention
  })

  it('bereinigt alte Einträge gemäß konfigurierbarer Retention und lässt neue stehen', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'analytics-retention-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir
    process.env.ANALYTICS_RETENTION_DAYS = '30'

    const now = Date.now()
    const oldTs = new Date(now - 60 * 24 * 60 * 60 * 1000).toISOString()
    const freshTs = new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString()

    fs.writeFileSync(
      path.join(tempDir, 'visitor-events.json'),
      JSON.stringify(
        [
          {
            id: 'old-1',
            session_id: 'sess-old',
            page_url: '/old',
            referrer: null,
            utm_source: null,
            utm_medium: null,
            utm_campaign: null,
            device_type: 'desktop',
            browser: 'Chrome',
            ip_hash: 'hash-old',
            created_at: oldTs,
            last_seen_at: oldTs,
          },
          {
            id: 'new-1',
            session_id: 'sess-new',
            page_url: '/new',
            referrer: null,
            utm_source: null,
            utm_medium: null,
            utm_campaign: null,
            device_type: 'desktop',
            browser: 'Chrome',
            ip_hash: 'hash-new',
            created_at: freshTs,
            last_seen_at: freshTs,
          },
        ],
        null,
        2
      )
    )

    const auditPath = path.join(tempDir, 'audit-log.json')
    fs.writeFileSync(auditPath, JSON.stringify([{ id: 'audit-1' }]))

    const analytics = await import('@/lib/analytics/visitors')
    const deleted = analytics.pruneExpiredVisitorEvents()
    const view = analytics.getVisitorAnalytics({
      from: new Date(now - 365 * 24 * 60 * 60 * 1000),
      to: new Date(now + 24 * 60 * 60 * 1000),
      granularity: 'day',
      page: 1,
      pageSize: 1000,
    })

    expect(deleted).toBe(1)
    expect(view.rows.map((row) => row.id)).toEqual(['new-1'])
    expect(fs.readFileSync(auditPath, 'utf8')).toContain('audit-1')
  })

  it('kapselt page_size auf 200 für Performance-Grundschutz', async () => {
    process.env.OPS_PERSISTENCE_MODE = 'memory'
    const analytics = await import('@/lib/analytics/visitors')

    for (let i = 0; i < 300; i += 1) {
      analytics.recordVisitorEvent({
        session_id: `sess-${i}`,
        page_url: `/p/${i}`,
        referrer: null,
        utm_source: null,
        utm_medium: null,
        utm_campaign: null,
        device_type: 'desktop',
        browser: 'Chrome',
        ip_hash: null,
      })
    }

    const result = analytics.getVisitorAnalytics({
      from: new Date(Date.now() - 24 * 60 * 60 * 1000),
      to: new Date(Date.now() + 24 * 60 * 60 * 1000),
      granularity: 'day',
      page: 1,
      pageSize: 10000,
    })

    expect(result.page_size).toBe(200)
    expect(result.rows.length).toBeLessThanOrEqual(200)
  })

  it('neutralisiert CSV-Injection Präfixe', async () => {
    const analytics = await import('@/lib/analytics/visitors')

    const csv = analytics.exportVisitorRowsCsv([
      {
        id: 'id-1',
        session_id: 's1',
        page_url: '/kontakt',
        referrer: '=HYPERLINK("bad")',
        utm_source: '+plus',
        utm_medium: '-minus',
        utm_campaign: '@cmd',
        device_type: 'desktop',
        browser: 'Chrome',
        ip_hash: null,
        created_at: '2026-01-01T00:00:00.000Z',
        last_seen_at: '2026-01-01T00:01:00.000Z',
      },
    ])

    expect(csv).toContain(`"'=HYPERLINK(""bad"")"`)
    expect(csv).toContain(`"'+plus"`)
    expect(csv).toContain(`"'-minus"`)
    expect(csv).toContain(`"'@cmd"`)
  })

  it('speichert keine offensichtlichen sensitiven Header-/Cookie-Felder im Event-Objekt', async () => {
    const analytics = await import('@/lib/analytics/visitors')
    const event = analytics.recordVisitorEvent({
      session_id: 'sess-safe-1',
      page_url: '/support',
      referrer: 'https://example.com',
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      device_type: 'desktop',
      browser: 'Firefox',
      ip_hash: analytics.hashIp('203.0.113.99'),
    }) as Record<string, unknown>

    expect(event).not.toHaveProperty('ip')
    expect(event).not.toHaveProperty('authorization')
    expect(event).not.toHaveProperty('cookie')
    expect(event).not.toHaveProperty('admin_cookie')
    expect(event).not.toHaveProperty('session_cookie')
    expect(event).not.toHaveProperty('email')
    expect(event).not.toHaveProperty('name')
  })
})
