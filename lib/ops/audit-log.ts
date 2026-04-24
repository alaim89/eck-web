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

export const appendAuditLog = (entry: Omit<AuditEntry, 'id' | 'createdAt'>) => {
  const enriched: AuditEntry = {
    ...entry,
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

export const listAuditLogs = (options?: { action?: string; actor?: string; limit?: number }) => {
  const limit = options?.limit ?? 100

  return auditLogEntries
    .filter((entry) => (options?.action ? entry.action === options.action : true))
    .filter((entry) => (options?.actor ? entry.actor === options.actor : true))
    .slice(0, limit)
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
