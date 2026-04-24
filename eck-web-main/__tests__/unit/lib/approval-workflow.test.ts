import { beforeEach, describe, expect, it } from 'vitest'
import {
  approveWorkflow,
  createWorkflow,
  listWorkflows,
  publishWorkflow,
  rejectWorkflow,
  reopenWorkflow,
  resetWorkflows,
  rollbackWorkflowState,
  submitWorkflowForApproval,
} from '@/lib/workflows/approval-workflow'

describe('approval workflow', () => {
  beforeEach(() => {
    resetWorkflows()
  })

  it('supports content and campaign publish approvals with explicit states', () => {
    const content = createWorkflow({
      type: 'content_publish',
      objectType: 'page',
      objectId: 'page-1',
      actor: 'author@example.com',
    })
    const campaign = createWorkflow({
      type: 'campaign_publish',
      objectType: 'campaign',
      objectId: 'camp-1',
      actor: 'author@example.com',
    })

    const submitted = submitWorkflowForApproval({
      workflowId: content.workflowId,
      actor: 'author@example.com',
    })
    expect(submitted.ok).toBe(true)
    if (!submitted.ok) return

    const approved = approveWorkflow({
      workflowId: content.workflowId,
      actor: 'approver@example.com',
    })
    expect(approved.ok).toBe(true)
    if (!approved.ok) return

    const published = publishWorkflow({
      workflowId: content.workflowId,
      actor: 'publisher@example.com',
    })
    expect(published.ok).toBe(true)
    if (published.ok) {
      expect(published.item.state).toBe('published')
      expect(published.item.history.length).toBeGreaterThanOrEqual(4)
    }

    expect(campaign.type).toBe('campaign_publish')
  })

  it('supports reject, reopen and rollback', () => {
    const item = createWorkflow({
      type: 'commercial_sevdesk',
      objectType: 'sevdesk_job',
      objectId: 'job-1',
      actor: 'system',
    })

    submitWorkflowForApproval({ workflowId: item.workflowId, actor: 'ops@example.com' })
    const rejected = rejectWorkflow({
      workflowId: item.workflowId,
      actor: 'approver@example.com',
      note: 'needs correction',
    })
    expect(rejected.ok).toBe(true)

    const reopened = reopenWorkflow({
      workflowId: item.workflowId,
      actor: 'ops@example.com',
    })
    expect(reopened.ok).toBe(true)

    const rollback = rollbackWorkflowState({
      workflowId: item.workflowId,
      actor: 'admin@example.com',
      to: 'pending_approval',
    })
    expect(rollback.ok).toBe(true)
    if (rollback.ok) {
      expect(rollback.item.state).toBe('pending_approval')
    }
  })

  it('persists created workflows in list', () => {
    createWorkflow({
      type: 'content_publish',
      objectType: 'page',
      objectId: 'page-2',
      actor: 'author@example.com',
    })

    expect(listWorkflows().length).toBe(1)
  })
})
