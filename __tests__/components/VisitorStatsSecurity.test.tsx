import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

import VisitorStatsPage from '@/app/admin/visitor-stats/page'

describe('VisitorStatsPage XSS rendering safety', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('rendert Referrer/URL als Text (nicht als ausführbares HTML)', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        status: 200,
        json: async () => ({
          ok: true,
          live: {
            online_count: 1,
            visitors: [
              {
                session_id: 's1',
                page_url: '\"><img src=x onerror=alert(1)>',
                last_seen_at: '2026-01-01T10:00:00.000Z',
                referrer: '<script>alert(1)</script>',
                utm_source: 'javascript:alert(1)',
                utm_medium: 'data:text/html,<script>alert(1)</script>',
                utm_campaign: 'camp',
                device_type: 'desktop',
                browser: 'Chrome',
              },
            ],
          },
          historical: {
            total_visits: 1,
            total_unique_sessions: 1,
            buckets: [{ bucket: '2026-01-01', visitors: 1 }],
            rows: [
              {
                id: 'v1',
                session_id: 's1',
                page_url: '\"><img src=x onerror=alert(1)>',
                referrer: '<script>alert(1)</script>',
                utm_source: 'javascript:alert(1)',
                utm_medium: 'data:text/html,<script>alert(1)</script>',
                utm_campaign: 'camp',
                device_type: 'desktop',
                browser: 'Chrome',
                created_at: '2026-01-01T10:00:00.000Z',
                last_seen_at: '2026-01-01T10:00:00.000Z',
              },
            ],
            total_rows: 1,
            page: 1,
            page_size: 25,
            top_pages: [{ page_url: '\"><img src=x onerror=alert(1)>', views: 1 }],
          },
        }),
      })
    )

    render(<VisitorStatsPage />)

    await waitFor(() => {
      expect(screen.getByText('Besucherstatistik')).toBeInTheDocument()
      expect(screen.getAllByText('\"><img src=x onerror=alert(1)>').length).toBeGreaterThan(0)
    })

    expect(document.querySelector('script')).toBeNull()
    expect(document.querySelector('img')).toBeNull()
    expect(screen.getAllByText('<script>alert(1)</script>').length).toBeGreaterThan(0)
    expect(
      screen.getByText((content) => content.includes('javascript:alert(1)'))
    ).toBeInTheDocument()
    expect(
      screen.getByText((content) => content.includes('data:text/html,<script>alert(1)</script>'))
    ).toBeInTheDocument()
  })
})

