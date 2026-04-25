'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'

type LiveVisitor = {
  session_id: string
  page_url: string
  last_seen_at: string
  referrer: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  device_type: string
  browser: string
}

type VisitorRow = {
  id: string
  session_id: string
  page_url: string
  referrer: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  device_type: string
  browser: string
  created_at: string
  last_seen_at: string
}

type ApiResponse = {
  ok: boolean
  live: {
    online_count: number
    visitors: LiveVisitor[]
  }
  historical: {
    total_visits: number
    total_unique_sessions: number
    buckets: Array<{ bucket: string; visitors: number }>
    rows: VisitorRow[]
    total_rows: number
    page: number
    page_size: number
    top_pages: Array<{ page_url: string; views: number }>
  }
}

const toInputDate = (date: Date) => date.toISOString().slice(0, 10)

export default function VisitorStatsPage() {
  const [from, setFrom] = useState(() => toInputDate(new Date(Date.now() - 30 * 86400000)))
  const [to, setTo] = useState(() => toInputDate(new Date()))
  const [granularity, setGranularity] = useState<'day' | 'week' | 'month'>('day')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const buildQuery = useCallback(() => {
    const params = new URLSearchParams({
      from,
      to,
      granularity,
      page: String(page),
      page_size: '25',
    })
    return params.toString()
  }, [from, to, granularity, page])

  useEffect(() => {
    let cancelled = false
    const query = buildQuery()

    const run = async () => {
      try {
        const response = await fetch(`/api/admin/analytics/visitors?${query}`)
        if (response.status === 401 || response.status === 403) {
          window.location.href = '/admin/login'
          return
        }

        const payload = (await response.json()) as ApiResponse
        if (!cancelled) {
          if (!payload?.ok) {
            setError('Besucherstatistik konnte nicht geladen werden.')
          } else {
            setError(null)
            setData(payload)
          }
        }
      } catch {
        if (!cancelled) {
          setError('Besucherstatistik konnte nicht geladen werden.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void run()
    const timer = setInterval(() => {
      void run()
    }, 15_000)

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [buildQuery])

  const chartMax = useMemo(
    () => Math.max(1, ...(data?.historical.buckets.map((item) => item.visitors) ?? [1])),
    [data]
  )

  const exportHref = `/api/admin/analytics/visitors/export?${new URLSearchParams({ from, to }).toString()}`

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Besucherstatistik</h1>
          <p className="mt-1 text-sm text-gray-500">Live- und Verlaufsauswertung (DSGVO-bewusst)</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href={exportHref} className="rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50">
            CSV-Export
          </a>
          <Link href="/admin" className="text-primary underline">
            Zurück
          </Link>
        </div>
      </div>

      <section className="mt-6 grid gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">Datenschutz-Hinweis (Vorlage für Datenschutzerklärung)</p>
        <p>
          Diese Statistik speichert keine vollständigen IP-Adressen und keine personenbezogenen Daten. Tracking läuft
          ohne eigene Cookies; Erfassung erfolgt nur bei aktivierter Analytics-Einwilligung.
        </p>
      </section>

      <section className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs text-gray-500">Aktuell online</p>
          <p className="mt-2 text-3xl font-semibold">{data?.live.online_count ?? '—'}</p>
        </article>
        <article className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs text-gray-500">Besuche im Zeitraum</p>
          <p className="mt-2 text-3xl font-semibold">{data?.historical.total_visits ?? '—'}</p>
        </article>
        <article className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs text-gray-500">Eindeutige Sessions</p>
          <p className="mt-2 text-3xl font-semibold">{data?.historical.total_unique_sessions ?? '—'}</p>
        </article>
      </section>

      <section className="mt-6 rounded-lg border border-gray-200 p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500">Von</span>
            <input type="date" value={from} onChange={(event) => setFrom(event.target.value)} className="w-full rounded border border-gray-300 px-2 py-1.5" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500">Bis</span>
            <input type="date" value={to} onChange={(event) => setTo(event.target.value)} className="w-full rounded border border-gray-300 px-2 py-1.5" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500">Aggregation</span>
            <select value={granularity} onChange={(event) => setGranularity(event.target.value as 'day' | 'week' | 'month')} className="w-full rounded border border-gray-300 px-2 py-1.5">
              <option value="day">Tag</option>
              <option value="week">Woche</option>
              <option value="month">Monat</option>
            </select>
          </label>
          <div className="flex items-end">
            <button onClick={() => setPage(1)} className="rounded bg-primary px-3 py-1.5 text-sm text-white hover:opacity-90">
              Filter anwenden
            </button>
          </div>
        </div>
      </section>

      {loading ? (
        <p className="mt-6 text-sm text-gray-500">Lade Besucherstatistik…</p>
      ) : error ? (
        <p className="mt-6 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      ) : (
        <>
          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-lg border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700">Live-Besucher</h2>
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-left text-xs" aria-label="Live Besucher Tabelle">
                  <thead className="text-gray-500">
                    <tr>
                      <th className="px-2 py-1">Seite</th>
                      <th className="px-2 py-1">Uhrzeit</th>
                      <th className="px-2 py-1">Herkunft</th>
                      <th className="px-2 py-1">UTM</th>
                      <th className="px-2 py-1">Gerät</th>
                      <th className="px-2 py-1">Browser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data?.live.visitors || []).map((item) => (
                      <tr key={`${item.session_id}-${item.last_seen_at}`} className="border-t border-gray-100">
                        <td className="px-2 py-1 font-medium text-gray-900">{item.page_url}</td>
                        <td className="px-2 py-1">{new Date(item.last_seen_at).toLocaleTimeString('de-DE')}</td>
                        <td className="px-2 py-1">{item.referrer || 'Direkt'}</td>
                        <td className="px-2 py-1">
                          {[item.utm_source, item.utm_medium, item.utm_campaign].filter(Boolean).join(' / ') || '—'}
                        </td>
                        <td className="px-2 py-1">{item.device_type}</td>
                        <td className="px-2 py-1">{item.browser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-lg border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700">Besucherentwicklung</h2>
              <div className="mt-3 space-y-2" role="img" aria-label="Diagramm Besucherentwicklung">
                {(data?.historical.buckets || []).map((bucket) => (
                  <div key={bucket.bucket} className="grid grid-cols-[96px_1fr_40px] items-center gap-2 text-xs">
                    <span className="text-gray-500">{bucket.bucket}</span>
                    <div className="h-3 rounded bg-gray-100">
                      <div
                        className="h-3 rounded bg-primary"
                        style={{ width: `${Math.max(4, (bucket.visitors / chartMax) * 100)}%` }}
                      />
                    </div>
                    <span className="text-right font-medium text-gray-700">{bucket.visitors}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-6 text-sm font-semibold text-gray-700">Top-Seiten</h3>
              <ul className="mt-2 space-y-1 text-xs">
                {(data?.historical.top_pages || []).map((item) => (
                  <li key={item.page_url} className="flex justify-between border-b border-gray-100 py-1">
                    <span className="truncate pr-2 text-gray-700">{item.page_url}</span>
                    <span className="font-medium text-gray-900">{item.views}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-6 rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-700">Historische Besuche</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left text-xs" aria-label="Historische Besucher Tabelle">
                <thead className="text-gray-500">
                  <tr>
                    <th className="px-2 py-1">Datum</th>
                    <th className="px-2 py-1">Uhrzeit</th>
                    <th className="px-2 py-1">Seite</th>
                    <th className="px-2 py-1">Herkunft</th>
                    <th className="px-2 py-1">Gerät</th>
                    <th className="px-2 py-1">Browser</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.historical.rows || []).map((row) => {
                    const date = new Date(row.created_at)
                    return (
                      <tr key={row.id} className="border-t border-gray-100">
                        <td className="px-2 py-1">{date.toLocaleDateString('de-DE')}</td>
                        <td className="px-2 py-1">{date.toLocaleTimeString('de-DE')}</td>
                        <td className="px-2 py-1 font-medium text-gray-900">{row.page_url}</td>
                        <td className="px-2 py-1">{row.referrer || 'Direkt'}</td>
                        <td className="px-2 py-1">{row.device_type}</td>
                        <td className="px-2 py-1">{row.browser}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-gray-500">
                Seite {data?.historical.page || page} · {data?.historical.total_rows || 0} Einträge
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={page <= 1}
                  className="rounded border border-gray-300 px-2 py-1 disabled:opacity-50"
                >
                  Zurück
                </button>
                <button
                  onClick={() =>
                    setPage((prev) =>
                      (data?.historical.total_rows || 0) <= prev * (data?.historical.page_size || 25) ? prev : prev + 1
                    )
                  }
                  className="rounded border border-gray-300 px-2 py-1"
                >
                  Weiter
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
