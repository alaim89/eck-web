import Link from 'next/link'
import { AuthError, type AuthUser, getRequestUser } from '@/lib/iam/auth'

const adminModules = [
  'Dashboard',
  'Seiten / Landingpages',
  'Kampagnen',
  'Templates',
  'Medien / Assets',
  'Formulare',
  'Leads / CRM-Übergaben',
  'Kunden / Zuordnungen',
  'Benutzer',
  'Rollen / Rechte',
  'Systemeinstellungen',
  'Sync-Logs / Integrationsstatus',
]

export default async function AdminPage() {
  let user: AuthUser | null = null
  let authMessage: string | null = null

  try {
    user = await getRequestUser()
  } catch (error) {
    authMessage =
      error instanceof AuthError ? error.message : 'Authentication could not be resolved.'
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-2xl font-semibold">Admin-Zugriff erforderlich</h1>
        <p className="mt-3 text-sm text-gray-600">{authMessage}</p>
        <Link
          href="/admin/login"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
        >
          Zum Admin-Login
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Internal Operations Platform</h1>
      <p className="mt-3 text-sm text-gray-600">
        Nutzer: <span className="font-medium">{user.email}</span> · Rolle:{' '}
        <span className="font-medium">{user.role}</span>
      </p>

      <form action="/api/admin/auth/logout" method="POST" className="mt-3">
        <button type="submit" className="rounded-md border border-gray-300 px-3 py-1 text-xs">
          Abmelden
        </button>
      </form>

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        {adminModules.map((moduleName) => (
          <article key={moduleName} className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-base font-medium">{moduleName}</h2>
          </article>
        ))}
      </section>

      <p className="mt-6 text-xs text-gray-500">
        Hinweis: Diese erste Implementierung stellt die modulare Struktur bereit. Die
        serverseitigen Berechtigungen werden auf API-Ebene durchgesetzt.
      </p>
    </main>
  )
}
