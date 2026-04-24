import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { AuthError, getRequestUser } from '@/lib/iam/auth'
import { hasPermission, type Permission } from '@/lib/iam/permissions'
import { consumeRateLimit } from '@/lib/security/rate-limit'

export const requirePermission = async (permission: Permission) => {
  const requestHeaders = await headers()
  const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  const limit = Number(process.env.ADMIN_RATE_LIMIT_PER_MINUTE || '120')
  const rate = consumeRateLimit({
    key: `admin:${ip}`,
    limit: Number.isFinite(limit) ? Math.max(1, limit) : 120,
    windowMs: 60_000,
  })

  if (!rate.allowed) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          error: 'rate_limited',
          message: 'Too many admin requests',
        },
        { status: 429 }
      ),
    }
  }

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
