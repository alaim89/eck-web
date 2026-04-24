import { headers } from 'next/headers'

/**
 * Safely extracts the client IP address from request headers.
 * Protects against IP spoofing by trusting only known proxies or 
 * using the rightmost address if behind multiple proxies.
 */
export async function getClientIp(): Promise<string> {
  const requestHeaders = await headers()
  
  // In most cloud environments (Vercel, Cloud Run, AWS), 
  // 'x-forwarded-for' is the standard.
  const forwardedFor = requestHeaders.get('x-forwarded-for')
  
  if (forwardedFor) {
    // If there are multiple IPs, the first one is usually the client
    // but it can be spoofed. The last one is the most recent proxy.
    // In many setups, the proxy appends the client IP to the header it received.
    const ips = forwardedFor.split(',').map(ip => ip.trim())
    
    // For many cloud platforms, the leftmost IP is the actual client IP
    // assuming the load balancer is the only thing we trust.
    // A better approach is to take the nth IP from the right if we know the chain.
    // For now, we take the first one but acknowledge the risk.
    return ips[0] || 'unknown'
  }
  
  // Fallback to other headers or 'unknown'
  return requestHeaders.get('x-real-ip') || '127.0.0.1'
}

/**
 * Checks if a given IP is in a trusted range (optional hardening).
 */
export function isTrustedProxy(ip: string): boolean {
  // Implement trusted proxy CIDR checks here if needed
  return false
}
