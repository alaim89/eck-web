
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getStoredConsent, CookieConsent } from '@/lib/cookie-consent';
import { getGtagConsentState } from '@/lib/consent-manager';

function gtagPush(...args: unknown[]) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function (...a: unknown[]) { window.dataLayer.push(a); };
  window.gtag(...args);
}

const getInitialAnalyticsConsent = () => {
  if (typeof window === 'undefined') return false;
  return getStoredConsent()?.analytics ?? false;
};

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [analyticsConsent, setAnalyticsConsent] = useState(getInitialAnalyticsConsent);

  useEffect(() => {
    // Initialize gtag stub and set consent defaults (all denied until user chooses)
    gtagPush('consent', 'default', getGtagConsentState(null));

    const stored = getStoredConsent();
    if (stored) {
      gtagPush('consent', 'update', getGtagConsentState(stored));
    }

    const handleUpdate = (e: Event) => {
      const updated = (e as CustomEvent<CookieConsent>).detail;
      // Signal consent change to GA regardless of whether the script is loaded
      gtagPush('consent', 'update', getGtagConsentState(updated));
      setAnalyticsConsent(updated.analytics);
    };

    window.addEventListener('cookie-consent-updated', handleUpdate);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdate);
  }, []);

  if (!analyticsConsent) return null;

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
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
