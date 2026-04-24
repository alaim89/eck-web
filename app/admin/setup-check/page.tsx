import Link from 'next/link'
import { getRequestUser, isAdminAuthDisabled } from '@/lib/iam/auth'
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

  return [
    {
      key: 'ADMIN_AUTH_DISABLED',
      required: true,
      configured: process.env.ADMIN_AUTH_DISABLED === 'true' || process.env.ADMIN_AUTH_DISABLED === 'false',
      valueHint: process.env.ADMIN_AUTH_DISABLED || 'unset',
    },
    {
      key: 'ADMIN_AUTH_DISABLED_EMAIL',
      required: false,
      configured: Boolean(process.env.ADMIN_AUTH_DISABLED_EMAIL),
      valueHint: process.env.ADMIN_AUTH_DISABLED_EMAIL || 'unset',
    },
    {
      key: 'ADMIN_DUMMY_USERS_JSON',
      required: !isAdminAuthDisabled(),
      configured: dummyUsers.trim().length > 0,
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
  ]
}

export default async function AdminSetupCheckPage() {
  const user = await getRequestUser()
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

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Setup Check</h1>
          <p className="mt-1 text-sm text-gray-600">Schneller Health-Check für IAM/Auth-Konfiguration.</p>
        </div>
        <Link href="/admin" className="text-sm text-primary underline">
          Zurück
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-3 py-2">Variable</th>
              <th className="px-3 py-2">Pflicht</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Hinweis</th>
            </tr>
          </thead>
          <tbody>
            {checks.map((item) => {
              const state = item.configured ? 'OK' : item.required ? 'FEHLT' : 'optional'

              return (
                <tr key={item.key} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-mono text-xs">{item.key}</td>
                  <td className="px-3 py-2">{item.required ? 'Ja' : 'Nein'}</td>
                  <td className="px-3 py-2">{state}</td>
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
