import type {Metadata} from 'next';
import { Suspense } from 'react';
import Script from 'next/script';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/context/LanguageContext';
import { CookieConsentBanner } from '@/components/CookieConsent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { WebVitals } from '@/components/WebVitals';
import { VisitorTracker } from '@/components/VisitorTracker';

import { getMetadata } from '@/lib/seo';
import { getLocalBusinessSchema, getOrganizationSchema } from '@/lib/jsonld';

export const metadata = getMetadata();

export default function RootLayout({children}: {children: React.ReactNode}) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="de">
      <body className="font-poppins antialiased" suppressHydrationWarning>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        <CookieConsentBanner />
        <Suspense fallback={null}>
          <VisitorTracker />
        </Suspense>
        <WebVitals />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
