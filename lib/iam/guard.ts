import { NextResponse } from 'next/server'
import { getRequestUser } from '@/lib/iam/auth'
import { hasPermission, type Permission } from '@/lib/iam/permissions'

export const requirePermission = async (permission: Permission) => {
  const user = await getRequestUser()

  if (!hasPermission(user.role, permission)) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          error: 'forbidden',
          permission,
          role: user.role,
        },
        { status: 403 }
      ),
    }
  }

  return {
    ok: true as const,
    user,
  }
}
