import Link from 'next/link'
import { AuthError, type AuthUser, getRequestUser } from '@/lib/iam/auth'

const adminModules: Array<{ name: string; href: string }> = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Seiten / Landingpages', href: '/admin' },
  { name: 'Kampagnen', href: '/admin' },
  { name: 'Templates', href: '/admin' },
  { name: 'Medien / Assets', href: '/admin' },
  { name: 'Formulare', href: '/admin' },
  { name: 'Leads / CRM-Übergaben', href: '/admin' },
  { name: 'Kunden / Zuordnungen', href: '/admin' },
  { name: 'Benutzer', href: '/admin' },
  { name: 'Rollen / Rechte', href: '/admin' },
  { name: 'Systemeinstellungen', href: '/admin' },
  { name: 'Sync-Logs / Integrationsstatus', href: '/admin/integrations' },
  { name: 'Audit Logs', href: '/admin/audit' },
  { name: 'Setup Check', href: '/admin/setup-check' },
  { name: 'Reconciliation', href: '/admin/reconciliation' },
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
        {adminModules.map((module) => (
          <Link
            key={module.name}
            href={module.href}
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
          >
            <h2 className="text-base font-medium">{module.name}</h2>
          </Link>
        ))}
      </section>

      <p className="mt-6 text-xs text-gray-500">
        Hinweis: Diese erste Implementierung stellt die modulare Struktur bereit. Die
        serverseitigen Berechtigungen werden auf API-Ebene durchgesetzt.
      </p>
    </main>
  )
}
