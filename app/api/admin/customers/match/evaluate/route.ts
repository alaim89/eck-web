import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import {
  evaluateCustomerCandidate,
  type CustomerCandidate,
  type CustomerRecord,
} from '@/lib/customer/match-merge'

export async function POST(request: Request) {
  const access = await requirePermission('customer.match.resolve')

  if (!access.ok) {
    return access.response
  }

  const body = (await request.json()) as {
    incoming: CustomerCandidate
    existingCustomers: CustomerRecord[]
  }

  const result = evaluateCustomerCandidate(body.incoming, body.existingCustomers || [])

  return NextResponse.json({
    ok: true,
    result,
  })
}
