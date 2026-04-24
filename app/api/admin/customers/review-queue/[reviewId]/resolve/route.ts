import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { resolveReviewItem, type ReviewResolution } from '@/lib/customer/match-merge'
import { appendAuditLog } from '@/lib/ops/audit-log'

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      reviewId: string
    }>
  }
) {
  const access = await requirePermission('customer.match.resolve')

  if (!access.ok) {
    return access.response
  }

  const { reviewId } = await context.params
  const body = (await request.json()) as { resolution: ReviewResolution }

  const result = resolveReviewItem({
    reviewId,
    resolution: body.resolution,
    resolvedBy: access.user.email,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.reason }, { status: 404 })
  }

  appendAuditLog({
    level: 'info',
    actor: access.user.email,
    action: 'customer.review.resolved',
    objectType: 'customer_review',
    objectId: reviewId,
    details: {
      resolution: body.resolution,
      matchedCustomerId: result.item.matchedCustomerId,
      confidence: result.item.confidence,
    },
  })

  return NextResponse.json({
    ok: true,
    review: result.item,
  })
}
