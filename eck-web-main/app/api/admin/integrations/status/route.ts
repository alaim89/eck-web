import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'

export async function GET() {
  const access = await requirePermission('crm.sync')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    environments: {
      dynamics: 'connected',
      sevdesk: 'connected',
    },
    safeguards: {
      is_test_guard: true,
      idempotency_required: true,
      retry_with_dlq: true,
    },
  })
}
