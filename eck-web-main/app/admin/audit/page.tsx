import { redirect } from 'next/navigation'
import Link from 'next/link'
import { AuthError, getRequestUser } from '@/lib/iam/auth'
import { hasPermission } from '@/lib/iam/permissions'
import { listAuditLogs } from '@/lib/ops/audit-log'

export default async function AdminAuditPage({
  searchParams,
}: {
  searchParams: Promise<{ action?: string; actor?: string }>
}) {
  let user
  try {
    user = await getRequestUser()
  } catch (err) {
    if (err instanceof AuthError) {
      redirect('/admin/login')
    }
    throw err
  }

  if (!hasPermission(user.role, 'audit.view')) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-2xl font-semibold">Keine Berechtigung</h1>
        <p className="mt-3 text-sm text-gray-600">
          Deine Rolle hat keinen Zugriff auf Audit-Logs.
        </p>
        <Link href="/admin" className="mt-6 inline-flex text-sm text-primary underline">
          Zurück zum Admin-Bereich
        </Link>
      </main>
    )
  }

  const params = await searchParams
  const logs = listAuditLogs({
    action: params.action,
    actor: params.actor,
    limit: 200,
  })

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Audit Logs</h1>
          <p className="mt-1 text-sm text-gray-600">
            Nachvollziehbarkeit für Login-, Sync- und Review-Entscheidungen.
          </p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      <form className="mt-6 grid gap-3 rounded-lg border border-gray-200 p-4 md:grid-cols-3">
        <input
          name="actor"
          defaultValue={params.actor || ''}
          placeholder="Filter Actor"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="action"
          defaultValue={params.action || ''}
          placeholder="Filter Action"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">
          Filtern
        </button>
      </form>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-3 py-2">Zeit</th>
              <th className="px-3 py-2">Level</th>
              <th className="px-3 py-2">Actor</th>
              <th className="px-3 py-2">Action</th>
              <th className="px-3 py-2">Objekt</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((entry) => (
              <tr key={entry.id} className="border-t border-gray-100 align-top">
                <td className="px-3 py-2 whitespace-nowrap">{entry.createdAt}</td>
                <td className="px-3 py-2">{entry.level}</td>
                <td className="px-3 py-2">{entry.actor}</td>
                <td className="px-3 py-2">{entry.action}</td>
                <td className="px-3 py-2">{entry.objectType}</td>
              </tr>
            ))}
            {logs.length === 0 ? (
              <tr>
                <td className="px-3 py-5 text-gray-500" colSpan={5}>
                  Keine Einträge für den gewählten Filter.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </main>
  )
}
