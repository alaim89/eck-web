import { redirect } from 'next/navigation'
import { isAdminAuthDisabled } from '@/lib/iam/auth'

const errorMessages: Record<string, string> = {
  invalid_credentials: 'E-Mail oder Passwort ungültig.',
  invalid_token: 'Bootstrap-Token ungültig.',
  email_not_mapped: 'Diese E-Mail-Adresse ist nicht für den Bootstrap-Zugang freigeschaltet.',
  credentials_not_configured:
    'Keine Admin-Zugangsdaten konfiguriert. Bitte ADMIN_USERNAME/ADMIN_PASSWORD_HASH oder ADMIN_DUMMY_USERS_JSON setzen.',
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  if (isAdminAuthDisabled()) {
    redirect('/admin')
  }

  const params = await searchParams
  const error = params.error ? (errorMessages[params.error] ?? 'Anmeldung fehlgeschlagen.') : null

  const hasBootstrapToken = Boolean(process.env.ADMIN_BOOTSTRAP_TOKEN)

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Admin Login</h1>
          <p className="mt-2 text-sm text-gray-500">Interner Administrationsbereich</p>
        </div>

        {error ? (
          <div
            role="alert"
            className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        ) : null}

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form action="/api/admin/auth/login" method="POST" className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-700">Mit Passwort anmelden</h2>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="username"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Passwort
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Anmelden
            </button>
          </form>
        </div>

        {hasBootstrapToken ? (
          <details className="mt-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <summary className="cursor-pointer text-sm font-medium text-gray-600">
              Bootstrap-Token verwenden
            </summary>
            <form action="/api/admin/auth/bootstrap" method="POST" className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="bootstrap-email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  E-Mail
                </label>
                <input
                  id="bootstrap-email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="bootstrap-token"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Bootstrap Token
                </label>
                <input
                  id="bootstrap-token"
                  type="password"
                  name="token"
                  required
                  autoComplete="off"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Mit Bootstrap-Token anmelden
              </button>
            </form>
          </details>
        ) : null}
      </div>
    </main>
  )
}
