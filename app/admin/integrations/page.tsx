'use client'

import { useState } from 'react'
import Link from 'next/link'

type ApiState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  payload?: unknown
}

export default function AdminIntegrationsPage() {
  const [crmJobsState, setCrmJobsState] = useState<ApiState>({ status: 'idle' })
  const [crmProcessState, setCrmProcessState] = useState<ApiState>({ status: 'idle' })
  const [sevdeskJobsState, setSevdeskJobsState] = useState<ApiState>({ status: 'idle' })
  const [sevdeskProcessState, setSevdeskProcessState] = useState<ApiState>({ status: 'idle' })

  const fetchJson = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options)
    return response.json()
  }

  const loadCrmJobs = async () => {
    setCrmJobsState({ status: 'loading' })
    try {
      setCrmJobsState({ status: 'success', payload: await fetchJson('/api/admin/integrations/dynamics/jobs') })
    } catch {
      setCrmJobsState({ status: 'error' })
    }
  }

  const processCrmNext = async () => {
    setCrmProcessState({ status: 'loading' })
    try {
      setCrmProcessState({ status: 'success', payload: await fetchJson('/api/admin/integrations/dynamics/process-next', { method: 'POST' }) })
      await loadCrmJobs()
    } catch {
      setCrmProcessState({ status: 'error' })
    }
  }

  const loadSevdeskJobs = async () => {
    setSevdeskJobsState({ status: 'loading' })
    try {
      setSevdeskJobsState({ status: 'success', payload: await fetchJson('/api/admin/commercial/sevdesk/jobs') })
    } catch {
      setSevdeskJobsState({ status: 'error' })
    }
  }

  const processSevdeskNext = async () => {
    setSevdeskProcessState({ status: 'loading' })
    try {
      setSevdeskProcessState({ status: 'success', payload: await fetchJson('/api/admin/commercial/sevdesk/process-next', { method: 'POST' }) })
      await loadSevdeskJobs()
    } catch {
      setSevdeskProcessState({ status: 'error' })
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Integrationen</h1>
          <p className="mt-1 text-sm text-gray-600">
            Dynamics- und sevdesk-Queues steuern und Status prüfen.
          </p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="text-sm font-semibold">Dynamics CRM</h2>
          <div className="mt-3 flex gap-2">
            <button onClick={loadCrmJobs} className="rounded-md border border-gray-300 px-4 py-2 text-sm">
              Jobs laden
            </button>
            <button onClick={processCrmNext} className="rounded-md bg-primary px-4 py-2 text-sm text-white">
              Nächsten Job verarbeiten
            </button>
          </div>

          <pre className="mt-4 max-h-72 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {crmJobsState.status === 'idle' ? 'Noch nicht geladen.' : JSON.stringify(crmJobsState.payload, null, 2)}
          </pre>
          <pre className="mt-2 max-h-40 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {crmProcessState.status === 'idle'
              ? 'Noch keine Verarbeitung ausgeführt.'
              : JSON.stringify(crmProcessState.payload, null, 2)}
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="text-sm font-semibold">sevdesk Commercial Sync</h2>
          <div className="mt-3 flex gap-2">
            <button onClick={loadSevdeskJobs} className="rounded-md border border-gray-300 px-4 py-2 text-sm">
              Jobs laden
            </button>
            <button onClick={processSevdeskNext} className="rounded-md bg-primary px-4 py-2 text-sm text-white">
              Nächsten Job verarbeiten
            </button>
          </div>

          <pre className="mt-4 max-h-72 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {sevdeskJobsState.status === 'idle'
              ? 'Noch nicht geladen.'
              : JSON.stringify(sevdeskJobsState.payload, null, 2)}
          </pre>
          <pre className="mt-2 max-h-40 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {sevdeskProcessState.status === 'idle'
              ? 'Noch keine Verarbeitung ausgeführt.'
              : JSON.stringify(sevdeskProcessState.payload, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  )
}
