import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { resolveReviewItem, type ReviewResolution } from '@/lib/customer/match-merge'

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

  return NextResponse.json({
    ok: true,
    review: result.item,
  })
}
