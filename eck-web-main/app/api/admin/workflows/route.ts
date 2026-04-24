import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/iam/guard'
import { createWorkflow, listWorkflows, type WorkflowType } from '@/lib/workflows/approval-workflow'

export async function GET() {
  const access = await requirePermission('audit.view')
  if (!access.ok) return access.response

  return NextResponse.json({
    ok: true,
    workflows: listWorkflows(),
  })
}

export async function POST(request: Request) {
  const access = await requirePermission('campaign.publish')
  if (!access.ok) return access.response

  const body = (await request.json()) as {
    type: WorkflowType
    objectType: string
    objectId: string
  }

  const workflow = createWorkflow({
    type: body.type,
    objectType: body.objectType,
    objectId: body.objectId,
    actor: access.user.email,
  })

  return NextResponse.json({
    ok: true,
    workflow,
  })
}
