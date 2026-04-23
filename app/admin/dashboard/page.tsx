'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type DashboardResponse = {
  ok: boolean
  user?: {
    email: string
    role: string
  }
  metrics?: {
    crm: Record<string, number>
    review: Record<string, number>
    audit: Record<string, string | number | null>
  }
}

export default function AdminDashboardPage() {
  const [state, setState] = useState<{ loading: boolean; data?: DashboardResponse }>({ loading: true })

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/admin/dashboard')
      const data = (await response.json()) as DashboardResponse
      setState({ loading: false, data })
    }

    load().catch(() => setState({ loading: false, data: { ok: false } }))
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">Live-Metriken für CRM, Review Queue und Audit.</p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      {state.loading ? <p className="mt-6 text-sm text-gray-600">Lade Metriken ...</p> : null}

      {!state.loading && state.data?.ok ? (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">CRM Queue</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">
              {JSON.stringify(state.data.metrics?.crm, null, 2)}
            </pre>
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">Review Queue</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">
              {JSON.stringify(state.data.metrics?.review, null, 2)}
            </pre>
          </article>

          <article className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-semibold">Audit</h2>
            <pre className="mt-2 rounded bg-gray-50 p-3 text-xs">
              {JSON.stringify(state.data.metrics?.audit, null, 2)}
            </pre>
          </article>
        </section>
      ) : null}

      {!state.loading && !state.data?.ok ? (
        <p className="mt-6 text-sm text-red-600">Dashboard konnte nicht geladen werden.</p>
      ) : null}
    </main>
  )
}
