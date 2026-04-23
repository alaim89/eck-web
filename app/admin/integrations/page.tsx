'use client'

import { useState } from 'react'
import Link from 'next/link'

type ApiState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  payload?: unknown
}

export default function AdminIntegrationsPage() {
  const [jobsState, setJobsState] = useState<ApiState>({ status: 'idle' })
  const [processState, setProcessState] = useState<ApiState>({ status: 'idle' })

  const loadJobs = async () => {
    setJobsState({ status: 'loading' })
    try {
      const response = await fetch('/api/admin/integrations/dynamics/jobs')
      const data = await response.json()
      setJobsState({ status: 'success', payload: data })
    } catch {
      setJobsState({ status: 'error' })
    }
  }

  const processNext = async () => {
    setProcessState({ status: 'loading' })
    try {
      const response = await fetch('/api/admin/integrations/dynamics/process-next', {
        method: 'POST',
      })
      const data = await response.json()
      setProcessState({ status: 'success', payload: data })
      await loadJobs()
    } catch {
      setProcessState({ status: 'error' })
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Integrationen</h1>
          <p className="mt-1 text-sm text-gray-600">Dynamics Queue steuern und Job-Status prüfen.</p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={loadJobs} className="rounded-md border border-gray-300 px-4 py-2 text-sm">
          Jobs laden
        </button>
        <button onClick={processNext} className="rounded-md bg-primary px-4 py-2 text-sm text-white">
          Nächsten Job verarbeiten
        </button>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="mb-2 text-sm font-semibold">Jobs API</h2>
          <pre className="max-h-80 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {jobsState.status === 'idle' ? 'Noch nicht geladen.' : JSON.stringify(jobsState.payload, null, 2)}
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="mb-2 text-sm font-semibold">Process API</h2>
          <pre className="max-h-80 overflow-auto rounded bg-gray-50 p-3 text-xs">
            {processState.status === 'idle'
              ? 'Noch keine Verarbeitung ausgeführt.'
              : JSON.stringify(processState.payload, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  )
}
