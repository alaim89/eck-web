export const permissions = {
  'page.create': 'Create pages',
  'page.edit': 'Edit pages',
  'page.publish': 'Publish pages',
  'page.delete': 'Delete pages',
  'campaign.create': 'Create campaigns',
  'campaign.edit': 'Edit campaigns',
  'campaign.publish': 'Publish campaigns',
  'campaign.archive': 'Archive campaigns',
  'template.manage': 'Manage templates',
  'media.upload': 'Upload assets',
  'media.delete': 'Delete assets',
  'form.manage': 'Manage forms',
  'lead.view': 'View leads',
  'lead.export': 'Export leads',
  'crm.sync': 'Execute CRM sync operations',
  'customer.match.resolve': 'Resolve customer matching conflicts',
  'seo.edit': 'Edit SEO metadata',
  'user.manage': 'Manage users',
  'settings.manage': 'Manage platform settings',
  'audit.view': 'View audit logs',
  'analytics.view': 'View visitor analytics',
  'pii.view': 'View unmasked personal data',
  'integration.manage': 'Manage external integrations',
  'role.manage': 'Manage role definitions',
} as const

export type Permission = keyof typeof permissions

export const roles = [
  'super_admin',
  'admin',
  'content_manager',
  'editor',
  'sales_campaign_manager',
  'seo_analyst',
  'partner',
] as const

export type Role = (typeof roles)[number]

const allPermissions = Object.keys(permissions) as Permission[]

export const rolePermissionMap: Record<Role, Permission[]> = {
  super_admin: allPermissions,
  admin: allPermissions.filter((permission) => !['role.manage', 'pii.view'].includes(permission)),
  content_manager: [
    'page.create',
    'page.edit',
    'page.publish',
    'campaign.create',
    'campaign.edit',
    'campaign.publish',
    'campaign.archive',
    'template.manage',
    'media.upload',
    'seo.edit',
  ],
  editor: ['page.edit', 'media.upload'],
  sales_campaign_manager: [
    'campaign.create',
    'campaign.edit',
    'campaign.publish',
    'campaign.archive',
    'lead.view',
    'lead.export',
    'crm.sync',
    'customer.match.resolve',
  ],
  seo_analyst: ['seo.edit', 'audit.view', 'analytics.view'],
  partner: ['campaign.edit', 'media.upload'],
}

export const hasPermission = (role: Role, permission: Permission): boolean =>
  rolePermissionMap[role].includes(permission)
