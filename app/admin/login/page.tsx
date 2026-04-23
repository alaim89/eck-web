export default function AdminLoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-2xl font-semibold">Admin Bootstrap Login</h1>
      <p className="mt-2 text-sm text-gray-600">
        Bitte mit freigeschalteter E-Mail und Bootstrap-Token anmelden.
      </p>

      <form action="/api/admin/auth/bootstrap" method="POST" className="mt-8 space-y-4">
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
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
        >
          Anmelden
        </button>
      </form>
    </main>
  )
}
