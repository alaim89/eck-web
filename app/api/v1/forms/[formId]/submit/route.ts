import { NextResponse } from 'next/server'
import { registerLeadSubmission, validateLeadPayload } from '@/lib/lead/intake'

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      formId: string
    }>
  }
) {
  const { formId } = await context.params
  const idempotencyKey = request.headers.get('x-idempotency-key')

  if (!idempotencyKey) {
    return NextResponse.json(
      {
        error: 'missing_idempotency_key',
      },
      { status: 400 }
    )
  }

  const payload = await request.json()

  const result = validateLeadPayload(payload)

  if (!result.consent) {
    return NextResponse.json(
      {
        error: 'missing_consent',
      },
      { status: 400 }
    )
  }

  const registered = registerLeadSubmission(formId, result, idempotencyKey)

  return NextResponse.json({
    ok: true,
    status: registered.status,
    leadReference: registered.leadReference,
    crmSync: {
      state: 'queued',
      reason: 'Phase 3 foundation: CRM connector pending',
    },
  })
}
