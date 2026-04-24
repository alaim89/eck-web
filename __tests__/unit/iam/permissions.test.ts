import { describe, expect, it } from 'vitest'
import { hasPermission } from '@/lib/iam/permissions'

describe('iam permissions', () => {
  it('grants super_admin access to settings.manage', () => {
    expect(hasPermission('super_admin', 'settings.manage')).toBe(true)
  })

  it('does not allow editor to publish pages', () => {
    expect(hasPermission('editor', 'page.publish')).toBe(false)
  })

  it('allows sales_campaign_manager to run crm sync', () => {
    expect(hasPermission('sales_campaign_manager', 'crm.sync')).toBe(true)
  })

  it('prevents partner from managing users', () => {
    expect(hasPermission('partner', 'user.manage')).toBe(false)
  })
})
