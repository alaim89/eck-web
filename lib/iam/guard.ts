import { NextResponse } from 'next/server'
import { AuthError, getRequestUser } from '@/lib/iam/auth'
import { hasPermission, type Permission } from '@/lib/iam/permissions'

export const requirePermission = async (permission: Permission) => {
  let user

  try {
    user = await getRequestUser()
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        ok: false as const,
        response: NextResponse.json(
          {
            error: 'unauthorized',
            message: error.message,
          },
          { status: 401 }
        ),
      }
    }

    return {
      ok: false as const,
      response: NextResponse.json(
        {
          error: 'unauthorized',
        },
        { status: 401 }
      ),
    }
  }

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
