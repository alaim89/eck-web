'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type HealthCheck = { key: string; severity: string; message: string }

type DashboardResponse = {
  ok: boolean
  user?: { email: string; role: string }
  metrics?: {
    crm: Record<string, number>
    review: Record<string, number>
    audit: Record<string, string | number | null>
    health: {
      overallSeverity: string
      checks: HealthCheck[]
      generatedAt: string
    }
  }
  error?: string
}

const severityColor = (s: string) => {
  if (s === 'ok') return 'text-green-700 bg-green-50'
  if (s === 'warn') return 'text-yellow-700 bg-yellow-50'
  return 'text-red-700 bg-red-50'
}

const MetricCard = ({
  title,
  data,
}: {
  title: string
  data: Record<string, string | number | null> | undefined
}) => (
  <article className="rounded-lg border border-gray-200 p-4">
    <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
    {data ? (
      <dl className="mt-3 space-y-1">
        {Object.entries(data).map(([k, v]) => (
          <div key={k} className="flex justify-between text-xs">
            <dt className="text-gray-500">{k}</dt>
            <dd className="font-medium text-gray-900">{String(v ?? '—')}</dd>
          </div>
        ))}
      </dl>
    ) : (
      <p className="mt-2 text-xs text-gray-400">Keine Daten</p>
    )}
  </article>
)

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then((r) => {
        if (r.status === 401 || r.status === 403) {
          window.location.href = '/admin/login'
          return null
        }
        return r.json() as Promise<DashboardResponse>
      })
      .then((d) => {
        if (d) setData(d)
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">CRM, Review Queue und System-Health</p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      {loading ? (
        <div className="mt-10 flex items-center gap-2 text-sm text-gray-500">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
          Lade Metriken …
        </div>
      ) : fetchError || !data?.ok ? (
        <div className="mt-10 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Dashboard konnte nicht geladen werden. Bitte Seite neu laden oder{' '}
          <Link href="/admin/login" className="underline">
            erneut anmelden
          </Link>
          .
        </div>
      ) : (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <MetricCard title="CRM Queue" data={data.metrics?.crm} />
          <MetricCard title="Review Queue" data={data.metrics?.review} />
          <MetricCard title="Audit" data={data.metrics?.audit} />

          <article className="rounded-lg border border-gray-200 p-4 md:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700">Operations Health</h2>
              {data.metrics?.health?.overallSeverity ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${severityColor(data.metrics.health.overallSeverity)}`}
                >
                  {data.metrics.health.overallSeverity.toUpperCase()}
                </span>
              ) : null}
            </div>

            {(data.metrics?.health?.checks ?? []).length === 0 ? (
              <p className="mt-3 text-xs text-gray-400">Keine Health-Checks vorhanden.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {(data.metrics?.health?.checks ?? []).map((check) => (
                  <li
                    key={check.key}
                    className={`flex items-start gap-2 rounded px-3 py-2 text-xs ${severityColor(check.severity)}`}
                  >
                    <strong className="shrink-0 uppercase">{check.severity}</strong>
                    <span>
                      {check.key} — {check.message}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {data.metrics?.health?.generatedAt ? (
              <p className="mt-3 text-xs text-gray-400">
                Stand: {new Date(data.metrics.health.generatedAt).toLocaleString('de-DE')}
              </p>
            ) : null}
          </article>
        </section>
      )}
    </main>
  )
}
