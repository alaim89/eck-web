import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    // VERSION and UPTIME removed for security hardening (BSI Grundschutz / OWASP)
  });
}
