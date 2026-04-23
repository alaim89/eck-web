
import { CookieConsent } from './cookie-consent';

export function getGtagConsentState(
  consent: CookieConsent | null,
): Record<string, 'granted' | 'denied'> {
  return {
    ad_storage: consent?.marketing ? 'granted' : 'denied',
    ad_user_data: consent?.marketing ? 'granted' : 'denied',
    ad_personalization: consent?.marketing ? 'granted' : 'denied',
    analytics_storage: consent?.analytics ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  };
}

export function dispatchConsentUpdate(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<CookieConsent>('cookie-consent-updated', { detail: consent }),
  );
}
