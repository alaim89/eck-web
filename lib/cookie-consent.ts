
export type ConsentStatus = 'granted' | 'denied';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
}

export const CONSENT_STORAGE_KEY = 'eeksolution_cookie_consent';

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function setStoredConsent(consent: CookieConsent) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}
