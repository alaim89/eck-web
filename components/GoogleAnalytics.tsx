
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getStoredConsent, CookieConsent } from '@/lib/cookie-consent';

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    // Initial check
    setConsent(getStoredConsent());

    // Listen for updates
    const handleUpdate = (e: any) => {
      setConsent(e.detail);
    };
    window.addEventListener('cookie-consent-updated', handleUpdate);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdate);
  }, []);

  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
