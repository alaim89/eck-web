import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  requirePermissionMock,
  submitWorkflowForApprovalMock,
  approveWorkflowMock,
  publishWorkflowMock,
  rejectWorkflowMock,
  reopenWorkflowMock,
  rollbackWorkflowStateMock,
} = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  submitWorkflowForApprovalMock: vi.fn(),
  approveWorkflowMock: vi.fn(),
  publishWorkflowMock: vi.fn(),
  rejectWorkflowMock: vi.fn(),
  reopenWorkflowMock: vi.fn(),
  rollbackWorkflowStateMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/workflows/approval-workflow', () => ({
  submitWorkflowForApproval: submitWorkflowForApprovalMock,
  approveWorkflow: approveWorkflowMock,
  publishWorkflow: publishWorkflowMock,
  rejectWorkflow: rejectWorkflowMock,
  reopenWorkflow: reopenWorkflowMock,
  rollbackWorkflowState: rollbackWorkflowStateMock,
}))

import { POST } from '@/app/api/admin/workflows/[workflowId]/transition/route'

describe('workflow transition route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns guard response when unauthorized', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })
    const request = new Request('http://localhost/api/admin/workflows/w1/transition', {
      method: 'POST',
      body: JSON.stringify({ action: 'approve' }),
    })
    const response = await POST(request, { params: Promise.resolve({ workflowId: 'w1' }) })
    expect(response.status).toBe(403)
  })

  it('executes transition and returns updated workflow', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'admin' },
    })
    approveWorkflowMock.mockReturnValueOnce({
      ok: true,
      item: { workflowId: 'w1', state: 'approved' },
    })
    const request = new Request('http://localhost/api/admin/workflows/w1/transition', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'approve' }),
    })
    const response = await POST(request, { params: Promise.resolve({ workflowId: 'w1' }) })
    const body = await response.json()
    expect(response.status).toBe(200)
    expect(body.workflow.state).toBe('approved')
  })

  it('returns 400 for invalid action', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'admin' },
    })
    const request = new Request('http://localhost/api/admin/workflows/w1/transition', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'nope' }),
    })
    const response = await POST(request, { params: Promise.resolve({ workflowId: 'w1' }) })
    expect(response.status).toBe(400)
  })
})
