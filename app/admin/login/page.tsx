const errorMessages: Record<string, string> = {
  invalid_credentials: 'Ungültige Dummy-Kennung.',
  invalid_token: 'Ungültiger Bootstrap-Token.',
  email_not_mapped: 'E-Mail ist nicht für Bootstrap freigeschaltet.',
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  const error = params.error ? errorMessages[params.error] || 'Anmeldung fehlgeschlagen.' : null

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-2xl font-semibold">Admin Login</h1>
      <p className="mt-2 text-sm text-gray-600">
        Für interne Nutzung: entweder Dummy-Kennung (E-Mail/Passwort) oder Bootstrap-Token.
      </p>

      {error ? (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <form action="/api/admin/auth/login" method="POST" className="space-y-4 rounded-lg border border-gray-200 p-4">
          <h2 className="text-sm font-semibold">Dummy-Kennung</h2>

          <div>
            <label className="mb-1 block text-sm font-medium">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Passwort</label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
          >
            Mit Dummy-Kennung anmelden
          </button>
        </form>

        <form action="/api/admin/auth/bootstrap" method="POST" className="space-y-4 rounded-lg border border-gray-200 p-4">
          <h2 className="text-sm font-semibold">Bootstrap-Token</h2>

          <div>
            <label className="mb-1 block text-sm font-medium">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Bootstrap Token</label>
            <input
              type="password"
              name="token"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white"
          >
            Mit Bootstrap anmelden
          </button>
        </form>
      </section>
    </main>
  )
}
