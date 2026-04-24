import crypto from 'node:crypto'
import { z } from 'zod'

const leadPayloadSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  phone: z.string().optional(),
  message: z.string().min(1),
  consent: z.boolean(),
  campaignId: z.string().optional(),
  landingPageSlug: z.string().optional(),
  isTest: z.boolean().default(false),
})

export type LeadPayload = z.infer<typeof leadPayloadSchema>

const seenIdempotencyKeys = new Map<string, string>()

export const validateLeadPayload = (payload: unknown): LeadPayload => leadPayloadSchema.parse(payload)

const buildFingerprint = (formId: string, payload: LeadPayload) =>
  crypto
    .createHash('sha256')
    .update(
      JSON.stringify({
        formId,
        email: payload.email.toLowerCase(),
        company: payload.company.toLowerCase(),
        campaignId: payload.campaignId || null,
      })
    )
    .digest('hex')

export const registerLeadSubmission = (formId: string, payload: LeadPayload, idempotencyKey: string) => {
  const existing = seenIdempotencyKeys.get(idempotencyKey)

  if (existing) {
    return {
      status: 'duplicate' as const,
      leadReference: existing,
    }
  }

  const leadReference = buildFingerprint(formId, payload)
  seenIdempotencyKeys.set(idempotencyKey, leadReference)

  return {
    status: 'accepted' as const,
    leadReference,
  }
}
