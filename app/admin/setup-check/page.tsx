import { redirect } from 'next/navigation'
import Link from 'next/link'
import { AuthError, getRequestUser, isAdminAuthDisabled } from '@/lib/iam/auth'
import { hasPermission } from '@/lib/iam/permissions'

type CheckResult = {
  key: string
  required: boolean
  configured: boolean
  valueHint: string
}

const mask = (value?: string) => {
  if (!value) return '—'
  if (value.length <= 4) return '****'
  return `${value.slice(0, 2)}***${value.slice(-2)}`
}

const getChecks = (): CheckResult[] => {
  const dummyUsers = process.env.ADMIN_DUMMY_USERS_JSON || ''
  const hasAdminUsername = Boolean(process.env.ADMIN_USERNAME)
  const hasAdminPasswordHash = Boolean(process.env.ADMIN_PASSWORD_HASH)
  const hasAnyCredentials = hasAdminUsername || dummyUsers.trim().length > 0

  return [
    {
      key: 'SESSION_SECRET',
      required: true,
      configured: Boolean(process.env.SESSION_SECRET),
      valueHint: process.env.SESSION_SECRET ? `${process.env.SESSION_SECRET.length} chars` : 'unset – cookie signing disabled',
    },
    {
      key: 'ADMIN_USERNAME',
      required: false,
      configured: hasAdminUsername,
      valueHint: process.env.ADMIN_USERNAME ? mask(process.env.ADMIN_USERNAME) : 'unset',
    },
    {
      key: 'ADMIN_PASSWORD_HASH',
      required: false,
      configured: hasAdminPasswordHash,
      valueHint: hasAdminPasswordHash ? `bcrypt hash (${process.env.ADMIN_PASSWORD_HASH?.length} chars)` : 'unset',
    },
    {
      key: 'ADMIN_DUMMY_USERS_JSON',
      required: !hasAdminUsername && !isAdminAuthDisabled(),
      configured: hasAnyCredentials,
      valueHint: dummyUsers ? `${dummyUsers.length} chars` : 'unset',
    },
    {
      key: 'IAM_BOOTSTRAP_ROLE_MAP',
      required: false,
      configured: Boolean(process.env.IAM_BOOTSTRAP_ROLE_MAP),
      valueHint: process.env.IAM_BOOTSTRAP_ROLE_MAP ? 'configured' : 'unset',
    },
    {
      key: 'ADMIN_BOOTSTRAP_TOKEN',
      required: false,
      configured: Boolean(process.env.ADMIN_BOOTSTRAP_TOKEN),
      valueHint: mask(process.env.ADMIN_BOOTSTRAP_TOKEN),
    },
    {
      key: 'ADMIN_AUTH_DISABLED',
      required: false,
      configured: Boolean(process.env.ADMIN_AUTH_DISABLED),
      valueHint: process.env.ADMIN_AUTH_DISABLED || 'unset (defaults to false)',
    },
  ]
}

export default async function AdminSetupCheckPage() {
  let user
  try {
    user = await getRequestUser()
  } catch (err) {
    if (err instanceof AuthError) redirect('/admin/login')
    throw err
  }

  const canView = hasPermission(user.role, 'settings.manage') || hasPermission(user.role, 'audit.view')

  if (!canView) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-2xl font-semibold">Keine Berechtigung</h1>
        <p className="mt-3 text-sm text-gray-600">Setup-Checks sind nur für Admin-Rollen sichtbar.</p>
        <Link href="/admin" className="mt-6 inline-flex text-sm text-primary underline">
          Zurück
        </Link>
      </main>
    )
  }

  const checks = getChecks()
  const missing = checks.filter((c) => c.required && !c.configured)

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Setup Check</h1>
          <p className="mt-1 text-sm text-gray-600">
            Konfigurationsstatus für Auth, IAM und Session.
          </p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      {missing.length > 0 ? (
        <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <strong>Achtung:</strong> {missing.length} Pflichtfeld
          {missing.length > 1 ? 'er fehlen' : ' fehlt'}:{' '}
          {missing.map((m) => m.key).join(', ')}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Alle Pflichtfelder sind konfiguriert.
        </div>
      )}

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-3 py-2 font-medium">Variable</th>
              <th className="px-3 py-2 font-medium">Pflicht</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Hinweis</th>
            </tr>
          </thead>
          <tbody>
            {checks.map((item) => {
              const state = item.configured ? 'OK' : item.required ? 'FEHLT' : 'optional'
              const stateColor = item.configured
                ? 'text-green-700'
                : item.required
                  ? 'text-red-700 font-semibold'
                  : 'text-gray-400'

              return (
                <tr key={item.key} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-mono text-xs">{item.key}</td>
                  <td className="px-3 py-2">{item.required ? 'Ja' : 'Nein'}</td>
                  <td className={`px-3 py-2 ${stateColor}`}>{state}</td>
                  <td className="px-3 py-2 text-gray-600">{item.valueHint}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
