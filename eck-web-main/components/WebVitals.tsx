'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (typeof window === 'undefined') return;

    // Round CLS to integer (it's in 0–1 range; GA expects integers)
    const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);

    // Forward to GA4 if analytics consent was given and gtag is loaded
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value,
        non_interaction: true,
      });
    }
  });

  return null;
}
