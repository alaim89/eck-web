import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import {
  approveWorkflow,
  publishWorkflow,
  rejectWorkflow,
  reopenWorkflow,
  rollbackWorkflowState,
  submitWorkflowForApproval,
  type WorkflowState,
} from '@/lib/workflows/approval-workflow'

type TransitionAction =
  | 'submit'
  | 'approve'
  | 'publish'
  | 'reject'
  | 'reopen'
  | 'rollback'

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      workflowId: string
    }>
  }
) {
  const access = await requirePermission('campaign.publish')
  if (!access.ok) return access.response

  const { workflowId } = await context.params
  const body = (await request.json()) as {
    action: TransitionAction
    note?: string
    to?: WorkflowState
  }

  const actor = access.user.email

  const result =
    body.action === 'submit'
      ? submitWorkflowForApproval({ workflowId, actor })
      : body.action === 'approve'
        ? approveWorkflow({ workflowId, actor })
        : body.action === 'publish'
          ? publishWorkflow({ workflowId, actor })
          : body.action === 'reject'
            ? rejectWorkflow({ workflowId, actor, note: body.note })
            : body.action === 'reopen'
              ? reopenWorkflow({ workflowId, actor })
              : body.action === 'rollback'
                ? rollbackWorkflowState({
                    workflowId,
                    actor,
                    to: body.to || 'draft',
                  })
                : { ok: false as const, reason: 'invalid_action' as const }

  if (!result.ok) {
    return NextResponse.json({ error: result.reason }, { status: 400 })
  }

  return NextResponse.json({
    ok: true,
    workflow: result.item,
  })
}
