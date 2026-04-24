'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type Overview = {
  generatedAt: string
  crm: Record<string, number>
  sevdesk: Record<string, number>
  reviews: Record<string, number>
  actions: string[]
}

const MetricList = ({ data }: { data: Record<string, number> | undefined }) =>
  data ? (
    <dl className="space-y-1">
      {Object.entries(data).map(([k, v]) => (
        <div key={k} className="flex justify-between text-xs">
          <dt className="text-gray-500">{k}</dt>
          <dd className="font-medium text-gray-900">{v}</dd>
        </div>
      ))}
    </dl>
  ) : (
    <p className="text-xs text-gray-400">Keine Daten</p>
  )

export default function ReconciliationPage() {
  const [overview, setOverview] = useState<Overview | null>(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    fetch('/api/admin/reconciliation/overview')
      .then((r) => {
        if (r.status === 401 || r.status === 403) {
          window.location.href = '/admin/login'
          return null
        }
        return r.json() as Promise<{ overview: Overview }>
      })
      .then((d) => {
        if (d) setOverview(d.overview ?? null)
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reconciliation</h1>
          <p className="mt-1 text-sm text-gray-500">
            Offene CRM-, sevdesk- und Review-Aufgaben im Überblick
          </p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      {loading ? (
        <div className="mt-10 flex items-center gap-2 text-sm text-gray-500">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
          Lade Übersicht …
        </div>
      ) : fetchError ? (
        <div className="mt-10 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Reconciliation-Daten konnten nicht geladen werden. Bitte Seite neu laden.
        </div>
      ) : !overview ? (
        <div className="mt-10 rounded-md border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
          Keine Daten vorhanden.
        </div>
      ) : (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 text-sm font-semibold text-gray-700">CRM</h2>
            <MetricList data={overview.crm} />
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 text-sm font-semibold text-gray-700">sevdesk</h2>
            <MetricList data={overview.sevdesk} />
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 text-sm font-semibold text-gray-700">Reviews</h2>
            <MetricList data={overview.reviews} />
          </article>

          <article className="rounded-lg border border-gray-200 p-4 md:col-span-3">
            <h2 className="text-sm font-semibold text-gray-700">Empfohlene Aktionen</h2>
            {overview.actions.length === 0 ? (
              <p className="mt-2 text-sm text-green-700">Keine offenen Aktionen.</p>
            ) : (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {overview.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            )}
            <p className="mt-3 text-xs text-gray-400">
              Stand: {new Date(overview.generatedAt).toLocaleString('de-DE')}
            </p>
          </article>
        </section>
      )}
    </main>
  )
}
