import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.sentry.io",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/hybrid-it-infrastruktur',
        destination: '/solutions/hybrid-it-infrastruktur',
        permanent: true,
      },
      {
        source: '/managed-it-services',
        destination: '/solutions/managed-it-service',
        permanent: true,
      },
      {
        source: '/solutions/managed-it-services',
        destination: '/solutions/managed-it-service',
        permanent: true,
      },
      {
        source: '/solutions/it-support-for-businesses',
        destination: '/solutions/managed-it-service',
        permanent: true,
      },
      {
        source: '/solutions/managed-it-operations',
        destination: '/solutions/managed-it-service',
        permanent: true,
      },
      {
        source: '/solutions/cybersecurity-protection',
        destination: '/solutions/it-sicherheit',
        permanent: true,
      },
      {
        source: '/solutions/backup-and-security',
        destination: '/solutions/it-sicherheit',
        permanent: true,
      },
      {
        source: '/solutions/network-management',
        destination: '/solutions/netzwerk-management',
        permanent: true,
      },
      {
        source: '/solutions/hardware-lifecycle',
        destination: '/solutions/hardware-client-management',
        permanent: true,
      },
      {
        source: '/solutions/it-risk-audit',
        destination: '/solutions/it-risiko-audit',
        permanent: true,
      },
      {
        source: '/solutions/strategic-it-roadmap',
        destination: '/solutions/strategische-it-betreuung',
        permanent: true,
      },
      {
        source: '/solutions/microsoft-365-services',
        destination: '/solutions/microsoft-365-compliance-betreuung',
        permanent: true,
      },
      {
        source: '/solutions/azure-hybrid-infrastructure',
        destination: '/solutions/azure-hybrid-betreuung',
        permanent: true,
      },
      {
        source: '/solutions/backup-security',
        destination: '/solutions/it-sicherheit',
        permanent: true,
      },
      {
        source: '/retainer',
        destination: '/solutions/externer-it-verantwortlicher',
        permanent: true,
      },
      {
        source: '/solutions/retainer',
        destination: '/solutions/externer-it-verantwortlicher',
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN },
  silent: true,
  disableLogger: true,
});
