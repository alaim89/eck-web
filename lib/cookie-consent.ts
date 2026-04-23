
export const CONSENT_VERSION = '2';
export const CONSENT_STORAGE_KEY = 'eeksolution_cookie_consent';
export const CONSENT_LOG_KEY = 'eeksolution_consent_log';

export type ConsentStatus = 'granted' | 'denied';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  externalMedia: boolean;
  version: string;
  timestamp: string;
}

export type ConsentCategory = keyof Omit<CookieConsent, 'version' | 'timestamp'>;

export interface ConsentLogEntry {
  consent: CookieConsent;
  action: 'accept-all' | 'save-choice' | 'revoke';
  userAgent: string;
}

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed: CookieConsent = JSON.parse(stored);
    // Re-require consent when the consent model version changes
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setStoredConsent(
  consent: Omit<CookieConsent, 'version' | 'timestamp'>,
  action: ConsentLogEntry['action'] = 'save-choice',
): CookieConsent {
  const full: CookieConsent = {
    ...consent,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  if (typeof window === 'undefined') return full;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(full));
  appendConsentLog({ consent: full, action, userAgent: navigator.userAgent });
  return full;
}

export function getConsentLog(): ConsentLogEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(CONSENT_LOG_KEY);
    return stored ? (JSON.parse(stored) as ConsentLogEntry[]) : [];
  } catch {
    return [];
  }
}

function appendConsentLog(entry: ConsentLogEntry): void {
  try {
    const stored = localStorage.getItem(CONSENT_LOG_KEY);
    const log: ConsentLogEntry[] = stored ? JSON.parse(stored) : [];
    log.push(entry);
    localStorage.setItem(CONSENT_LOG_KEY, JSON.stringify(log));
  } catch {
    // ignore storage errors
  }
}
