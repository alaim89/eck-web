import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { queueLeadForCrmSync } from '@/lib/integrations/crm-sync'
import { registerLeadSubmission, validateLeadPayload } from '@/lib/lead/intake'
import { consumeRateLimit } from '@/lib/security/rate-limit'
import { getClientIp } from '@/lib/security/ip'

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      formId: string
    }>
  }
) {
  const { formId } = await context.params
  const ip = await getClientIp()
  const limit = Number(process.env.FORMS_RATE_LIMIT_PER_MINUTE || '30')
  const rate = consumeRateLimit({
    key: `form:${ip}:${formId}`,
    limit: Number.isFinite(limit) ? Math.max(1, limit) : 30,
    windowMs: 60_000,
  })

  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: 'rate_limited',
      },
      { status: 429 }
    )
  }

  const idempotencyKey = request.headers.get('x-idempotency-key')

  if (!idempotencyKey) {
    return NextResponse.json(
      {
        error: 'missing_idempotency_key',
      },
      { status: 400 }
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  let result
  try {
    result = validateLeadPayload(payload)
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: 'validation_failed', issues: err.issues },
        { status: 422 }
      )
    }
    return NextResponse.json({ error: 'invalid_payload' }, { status: 400 })
  }

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
