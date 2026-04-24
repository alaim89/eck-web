import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  appendAuditLog,
  getAuditLogSummary,
  listAuditLogs,
  purgeAuditLogsBefore,
  resetAuditLogs,
} from '@/lib/ops/audit-log'

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
    expect(logs[0].actor).toBe('b***@example.com')
    expect(logs[1].actor).toBe('a***@example.com')

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

  it('purges old entries by retention helper', () => {
    appendAuditLog({
      level: 'info',
      actor: 'old@example.com',
      action: 'old.action',
      objectType: 'test',
    })

    const removed = purgeAuditLogsBefore(new Date(Date.now() + 1_000).toISOString())
    expect(removed).toBe(1)
    expect(listAuditLogs()).toHaveLength(0)
  })
})

describe('audit log persistence', () => {
  const previousMode = process.env.OPS_PERSISTENCE_MODE
  const previousDir = process.env.OPS_DATA_DIR

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = previousMode
    process.env.OPS_DATA_DIR = previousDir
  })

  it('restores audit entries from file persistence after reload', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'audit-log-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir

    const first = await import('@/lib/ops/audit-log')
    first.resetAuditLogs()
    first.appendAuditLog({
      level: 'info',
      actor: 'persist@example.com',
      action: 'persist.test',
      objectType: 'test',
    })

    vi.resetModules()

    const second = await import('@/lib/ops/audit-log')
    const logs = second.listAuditLogs()
    expect(logs).toHaveLength(1)
    expect(logs[0].action).toBe('persist.test')
  })
})
