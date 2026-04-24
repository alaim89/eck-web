import { getReviewQueueSummary } from '@/lib/customer/match-merge'
import { isAdminAuthDisabled } from '@/lib/iam/auth'
import { getCrmSyncSummary } from '@/lib/integrations/crm-sync'
import { getAuditLogSummary } from '@/lib/ops/audit-log'

export type HealthSeverity = 'ok' | 'warning' | 'critical'

export type HealthCheckItem = {
  key: string
  severity: HealthSeverity
  message: string
  value: Record<string, unknown>
}

export const getOperationsHealth = () => {
  const crm = getCrmSyncSummary()
  const review = getReviewQueueSummary()
  const audit = getAuditLogSummary()

  const checks: HealthCheckItem[] = []

  checks.push({
    key: 'crm_queue_depth',
    severity: crm.queued > 10 ? 'warning' : 'ok',
    message: crm.queued > 10 ? 'CRM queue backlog is elevated' : 'CRM queue depth is healthy',
    value: crm,
  })

  checks.push({
    key: 'review_queue_open',
    severity: review.open > 5 ? 'warning' : 'ok',
    message: review.open > 5 ? 'Customer review queue needs attention' : 'Customer review queue is healthy',
    value: review,
  })

  checks.push({
    key: 'audit_activity',
    severity: audit.total === 0 ? 'warning' : 'ok',
    message: audit.total === 0 ? 'No audit activity recorded yet' : 'Audit pipeline active',
    value: audit,
  })

  checks.push({
    key: 'admin_auth_mode',
    severity: isAdminAuthDisabled() ? 'critical' : 'ok',
    message: isAdminAuthDisabled()
      ? 'Admin auth is temporarily disabled'
      : 'Admin auth is enforced',
    value: {
      disabled: isAdminAuthDisabled(),
    },
  })

  const overallSeverity: HealthSeverity = checks.some((c) => c.severity === 'critical')
    ? 'critical'
    : checks.some((c) => c.severity === 'warning')
      ? 'warning'
      : 'ok'

  return {
    overallSeverity,
    checks,
    generatedAt: new Date().toISOString(),
  }
}
