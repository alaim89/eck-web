import Link from 'next/link'
import { redirect } from 'next/navigation'
import { AuthError, type AuthUser, getRequestUser } from '@/lib/iam/auth'
import { hasPermission } from '@/lib/iam/permissions'

type AdminModule = {
  name: string
  href: string
  description: string
  permission?: Parameters<typeof hasPermission>[1]
}

const allModules: AdminModule[] = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    description: 'Live-Metriken für CRM, Review Queue und System-Health',
  },
  {
    name: 'Integrationen',
    href: '/admin/integrations',
    description: 'Dynamics- und sevdesk-Queues steuern und Sync-Status prüfen',
    permission: 'crm.sync',
  },
  {
    name: 'Audit Logs',
    href: '/admin/audit',
    description: 'Login-, Sync- und Review-Entscheidungen nachvollziehen',
    permission: 'audit.view',
  },
  {
    name: 'Reconciliation',
    href: '/admin/reconciliation',
    description: 'Offene CRM-, sevdesk- und Review-Aufgaben im Überblick',
  },
  {
    name: 'Setup Check',
    href: '/admin/setup-check',
    description: 'Konfigurationsstatus für Auth, IAM und Session prüfen',
    permission: 'settings.manage',
  },
]

export default async function AdminPage() {
  let user: AuthUser

  try {
    user = await getRequestUser()
  } catch (err) {
    if (err instanceof AuthError) redirect('/admin/login')
    throw err
  }

  const visibleModules = allModules.filter(
    (m) => !m.permission || hasPermission(user.role, m.permission)
  )

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Admin</h1>
          <p className="mt-1 text-sm text-gray-500">
            Angemeldet als <span className="font-medium text-gray-700">{user.email}</span> ·{' '}
            <span className="font-medium text-gray-700">{user.role}</span>
          </p>
        </div>
        <form action="/api/admin/auth/logout" method="POST">
          <button
            type="submit"
            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
          >
            Abmelden
          </button>
        </form>
      </div>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleModules.map((module) => (
          <Link
            key={module.name}
            href={module.href}
            className="group rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary/40 hover:bg-gray-50"
          >
            <h2 className="text-sm font-semibold text-gray-900 group-hover:text-primary">
              {module.name}
            </h2>
            <p className="mt-1 text-xs text-gray-500">{module.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
