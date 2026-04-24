import { beforeEach, describe, expect, it, vi } from 'vitest'

const { requirePermissionMock, listWorkflowsMock, createWorkflowMock } = vi.hoisted(() => ({
  requirePermissionMock: vi.fn(),
  listWorkflowsMock: vi.fn(),
  createWorkflowMock: vi.fn(),
}))

vi.mock('@/lib/iam/guard', () => ({
  requirePermission: requirePermissionMock,
}))

vi.mock('@/lib/workflows/approval-workflow', () => ({
  listWorkflows: listWorkflowsMock,
  createWorkflow: createWorkflowMock,
}))

import { GET, POST } from '@/app/api/admin/workflows/route'

describe('admin workflows route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('GET returns guard response when unauthorized', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: false,
      response: Response.json({ error: 'forbidden' }, { status: 403 }),
    })

    const response = await GET()
    expect(response.status).toBe(403)
  })

  it('GET returns workflow list on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'admin' },
    })
    listWorkflowsMock.mockReturnValueOnce([{ workflowId: 'w1' }])

    const response = await GET()
    const body = await response.json()
    expect(response.status).toBe(200)
    expect(body.workflows).toEqual([{ workflowId: 'w1' }])
  })

  it('POST creates workflow on success', async () => {
    requirePermissionMock.mockResolvedValueOnce({
      ok: true,
      user: { email: 'ops@example.com', role: 'admin' },
    })
    createWorkflowMock.mockReturnValueOnce({ workflowId: 'w2' })

    const request = new Request('http://localhost/api/admin/workflows', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        type: 'content_publish',
        objectType: 'page',
        objectId: 'page-1',
      }),
    })

    const response = await POST(request)
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.workflow.workflowId).toBe('w2')
    expect(createWorkflowMock).toHaveBeenCalledWith({
      type: 'content_publish',
      objectType: 'page',
      objectId: 'page-1',
      actor: 'ops@example.com',
    })
  })
})
