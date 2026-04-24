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

export default function ReconciliationPage() {
  const [overview, setOverview] = useState<Overview | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      const response = await fetch('/api/admin/reconciliation/overview')
      const data = await response.json()
      setOverview(data.overview || null)
      setLoading(false)
    }

    run().catch(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reconciliation</h1>
          <p className="mt-1 text-sm text-gray-600">Abgleich offener CRM/sevdesk/review Aufgaben.</p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      {loading ? <p className="mt-6 text-sm text-gray-600">Lade Übersicht ...</p> : null}

      {overview ? (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">CRM</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">{JSON.stringify(overview.crm, null, 2)}</pre>
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">sevdesk</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">{JSON.stringify(overview.sevdesk, null, 2)}</pre>
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">Reviews</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">{JSON.stringify(overview.reviews, null, 2)}</pre>
          </article>

          <article className="rounded-lg border border-gray-200 p-4 md:col-span-3">
            <h2 className="text-sm font-semibold">Empfohlene Aktionen</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {overview.actions.length === 0 ? <li>Keine offenen Aktionen.</li> : null}
              {overview.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </article>
        </section>
      ) : null}
    </main>
  )
}
