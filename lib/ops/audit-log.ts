import { readJsonFile, writeJsonFile } from '@/lib/ops/persistence'

export type AuditLevel = 'info' | 'warn' | 'error'

export type AuditEntry = {
  id: string
  createdAt: string
  level: AuditLevel
  actor: string
  action: string
  objectType: string
  objectId?: string
  details?: Record<string, unknown>
}

const AUDIT_FILE = 'audit-log.json'

const auditLogEntries: AuditEntry[] = readJsonFile<AuditEntry[]>(AUDIT_FILE, [])

const createId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

const persist = () => {
  writeJsonFile(AUDIT_FILE, auditLogEntries)
}

const maskEmail = (value: string) => value.replace(/(^.).*(@.*$)/, '$1***$2')
const maskPhone = (value: string) => value.replace(/\d(?=\d{2})/g, '*')
const maskText = (value: string) =>
  value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, (match) => maskEmail(match))
    .replace(/\+?[0-9][0-9\s-]{6,}[0-9]/g, (match) => maskPhone(match))

const maskRecord = (input: unknown): unknown => {
  if (Array.isArray(input)) return input.map(maskRecord)
  if (typeof input === 'string') return maskText(input)
  if (!input || typeof input !== 'object') return input

  const record = input as Record<string, unknown>
  return Object.entries(record).reduce<Record<string, unknown>>((acc, [key, value]) => {
    if (/email/i.test(key) && typeof value === 'string') {
      acc[key] = maskEmail(value)
      return acc
    }
    if (/(phone|tax|vat|iban)/i.test(key) && typeof value === 'string') {
      acc[key] = maskPhone(value)
      return acc
    }
    acc[key] = maskRecord(value)
    return acc
  }, {})
}

const applyRetention = () => {
  const retentionDays = Number(process.env.PII_RETENTION_DAYS || '365')
  if (!Number.isFinite(retentionDays) || retentionDays <= 0) return

  const threshold = Date.now() - retentionDays * 24 * 60 * 60 * 1000
  const before = auditLogEntries.length
  for (let idx = auditLogEntries.length - 1; idx >= 0; idx -= 1) {
    const createdAt = Date.parse(auditLogEntries[idx].createdAt)
    if (Number.isFinite(createdAt) && createdAt < threshold) {
      auditLogEntries.splice(idx, 1)
    }
  }
  if (auditLogEntries.length !== before) {
    persist()
  }
}

export const appendAuditLog = (entry: Omit<AuditEntry, 'id' | 'createdAt'>) => {
  applyRetention()

  const enriched: AuditEntry = {
    ...entry,
    actor: maskEmail(entry.actor),
    details: (maskRecord(entry.details) as Record<string, unknown>) || undefined,
    id: createId(),
    createdAt: new Date().toISOString(),
  }

  auditLogEntries.unshift(enriched)
  if (auditLogEntries.length > 5000) {
    auditLogEntries.length = 5000
  }

  persist()

  return enriched
}

export const listAuditLogs = (options?: {
  action?: string
  actor?: string
  limit?: number
  includeSensitive?: boolean
}) => {
  applyRetention()
  const limit = options?.limit ?? 100

  const records = auditLogEntries
    .filter((entry) => (options?.action ? entry.action === options.action : true))
    .filter((entry) => (options?.actor ? entry.actor === maskEmail(options.actor) : true))
    .slice(0, limit)

  if (options?.includeSensitive) {
    return records
  }

  return records.map((entry) => ({
    ...entry,
    objectId: entry.objectId ? `masked:${entry.objectType}` : undefined,
    details: undefined,
  }))
}

export const resetAuditLogs = () => {
  auditLogEntries.length = 0
  persist()
}

export const getAuditLogSummary = () => ({
  total: auditLogEntries.length,
  latestAction: auditLogEntries[0]?.action || null,
  latestAt: auditLogEntries[0]?.createdAt || null,
})

export const purgeAuditLogsBefore = (isoDate: string) => {
  const threshold = Date.parse(isoDate)
  if (!Number.isFinite(threshold)) return 0

  const before = auditLogEntries.length
  for (let idx = auditLogEntries.length - 1; idx >= 0; idx -= 1) {
    const createdAt = Date.parse(auditLogEntries[idx].createdAt)
    if (Number.isFinite(createdAt) && createdAt < threshold) {
      auditLogEntries.splice(idx, 1)
    }
  }
  persist()
  return before - auditLogEntries.length
}
