import { getRequestUser } from '@/lib/iam/auth'

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
  const user = await getRequestUser()

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Internal Operations Platform</h1>
      <p className="mt-3 text-sm text-gray-600">
        Nutzer: <span className="font-medium">{user.email}</span> · Rolle:{' '}
        <span className="font-medium">{user.role}</span>
      </p>

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
