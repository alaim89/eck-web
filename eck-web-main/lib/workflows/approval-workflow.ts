import { readJsonFile, writeJsonFile } from '@/lib/ops/persistence'

export type WorkflowType = 'content_publish' | 'campaign_publish' | 'commercial_sevdesk'
export type WorkflowState = 'draft' | 'pending_approval' | 'approved' | 'published' | 'rejected'

export type WorkflowHistoryEntry = {
  actor: string
  action: 'created' | 'submitted' | 'approved' | 'published' | 'rejected' | 'reopened' | 'rollback'
  at: string
  from?: WorkflowState
  to?: WorkflowState
  note?: string
}

export type WorkflowItem = {
  workflowId: string
  type: WorkflowType
  objectType: string
  objectId: string
  state: WorkflowState
  history: WorkflowHistoryEntry[]
  createdAt: string
  updatedAt: string
}

const FILE = 'approval-workflows.json'
const workflows: WorkflowItem[] = readJsonFile<WorkflowItem[]>(FILE, [])

const persist = () => writeJsonFile(FILE, workflows)

const createId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

const pushHistory = (
  item: WorkflowItem,
  params: { actor: string; action: WorkflowHistoryEntry['action']; from?: WorkflowState; to?: WorkflowState; note?: string }
) => {
  item.history.unshift({
    actor: params.actor,
    action: params.action,
    from: params.from,
    to: params.to,
    note: params.note,
    at: new Date().toISOString(),
  })
  item.updatedAt = new Date().toISOString()
}

export const createWorkflow = (params: {
  type: WorkflowType
  objectType: string
  objectId: string
  actor: string
}) => {
  const item: WorkflowItem = {
    workflowId: createId(),
    type: params.type,
    objectType: params.objectType,
    objectId: params.objectId,
    state: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    history: [],
  }
  pushHistory(item, { actor: params.actor, action: 'created', to: 'draft' })
  workflows.unshift(item)
  persist()
  return item
}

export const submitWorkflowForApproval = (params: { workflowId: string; actor: string }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  if (!['draft', 'rejected'].includes(item.state)) return { ok: false as const, reason: 'invalid_state' as const }
  const previous = item.state
  item.state = 'pending_approval'
  pushHistory(item, { actor: params.actor, action: 'submitted', from: previous, to: item.state })
  persist()
  return { ok: true as const, item }
}

export const approveWorkflow = (params: { workflowId: string; actor: string }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  if (item.state !== 'pending_approval') return { ok: false as const, reason: 'invalid_state' as const }
  item.state = 'approved'
  pushHistory(item, { actor: params.actor, action: 'approved', from: 'pending_approval', to: 'approved' })
  persist()
  return { ok: true as const, item }
}

export const publishWorkflow = (params: { workflowId: string; actor: string }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  if (item.state !== 'approved') return { ok: false as const, reason: 'invalid_state' as const }
  item.state = 'published'
  pushHistory(item, { actor: params.actor, action: 'published', from: 'approved', to: 'published' })
  persist()
  return { ok: true as const, item }
}

export const rejectWorkflow = (params: { workflowId: string; actor: string; note?: string }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  if (!['pending_approval', 'approved'].includes(item.state)) return { ok: false as const, reason: 'invalid_state' as const }
  const previous = item.state
  item.state = 'rejected'
  pushHistory(item, { actor: params.actor, action: 'rejected', from: previous, to: 'rejected', note: params.note })
  persist()
  return { ok: true as const, item }
}

export const reopenWorkflow = (params: { workflowId: string; actor: string }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  const previous = item.state
  item.state = 'draft'
  pushHistory(item, { actor: params.actor, action: 'reopened', from: previous, to: 'draft' })
  persist()
  return { ok: true as const, item }
}

export const rollbackWorkflowState = (params: { workflowId: string; actor: string; to: WorkflowState }) => {
  const item = workflows.find((entry) => entry.workflowId === params.workflowId)
  if (!item) return { ok: false as const, reason: 'not_found' as const }
  const previous = item.state
  item.state = params.to
  pushHistory(item, { actor: params.actor, action: 'rollback', from: previous, to: params.to })
  persist()
  return { ok: true as const, item }
}

export const listWorkflows = () => [...workflows]

export const resetWorkflows = () => {
  workflows.length = 0
  persist()
}
