import { beforeEach, describe, expect, it } from 'vitest'
import { appendAuditLog, getAuditLogSummary, listAuditLogs, resetAuditLogs } from '@/lib/ops/audit-log'

describe('audit log', () => {
  beforeEach(() => {
    resetAuditLogs()
  })

  it('stores and lists audit entries in reverse chronological order', () => {
    appendAuditLog({
      level: 'info',
      actor: 'alice@example.com',
      action: 'admin.login.succeeded',
      objectType: 'session',
    })

    appendAuditLog({
      level: 'warn',
      actor: 'bob@example.com',
      action: 'admin.login.failed',
      objectType: 'session',
    })

    const logs = listAuditLogs()
    expect(logs).toHaveLength(2)
    expect(logs[0].actor).toBe('bob@example.com')
    expect(logs[1].actor).toBe('alice@example.com')

    const summary = getAuditLogSummary()
    expect(summary.total).toBe(2)
    expect(summary.latestAction).toBe('admin.login.failed')
  })

  it('filters by actor and action', () => {
    appendAuditLog({
      level: 'info',
      actor: 'alice@example.com',
      action: 'crm.sync.process_next',
      objectType: 'crm_sync_job',
    })

    appendAuditLog({
      level: 'info',
      actor: 'alice@example.com',
      action: 'admin.logout',
      objectType: 'session',
    })

    const byAction = listAuditLogs({ action: 'admin.logout' })
    expect(byAction).toHaveLength(1)
    expect(byAction[0].action).toBe('admin.logout')

    const byActor = listAuditLogs({ actor: 'alice@example.com' })
    expect(byActor).toHaveLength(2)
  })
})
