import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { listReviewQueue } from '@/lib/customer/match-merge'

export async function GET() {
  const access = await requirePermission('customer.match.resolve')

  if (!access.ok) {
    return access.response
  }

  return NextResponse.json({
    ok: true,
    reviews: listReviewQueue(),
  })
}
