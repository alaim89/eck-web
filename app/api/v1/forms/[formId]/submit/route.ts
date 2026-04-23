import { NextResponse } from 'next/server'
import { queueLeadForCrmSync } from '@/lib/integrations/crm-sync'
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
  const crmQueueResult = queueLeadForCrmSync({
    idempotencyKey,
    leadReference: registered.leadReference,
    payload: result,
  })

  return NextResponse.json({
    ok: true,
    status: registered.status,
    leadReference: registered.leadReference,
    crmSync: {
      state: crmQueueResult.job.status,
      jobId: crmQueueResult.job.jobId,
      duplicateJob: crmQueueResult.duplicate,
    },
  })
}
