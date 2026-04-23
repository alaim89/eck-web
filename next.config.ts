import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
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
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
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
  // Only upload source maps when an auth token is explicitly set
  sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN },
  // Suppress build-time output when Sentry is not configured
  silent: true,
  disableLogger: true,
});
