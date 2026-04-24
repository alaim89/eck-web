import { describe, it, expect, beforeEach } from 'vitest';
import {
  CONSENT_VERSION,
  CONSENT_STORAGE_KEY,
  CONSENT_LOG_KEY,
  getStoredConsent,
  setStoredConsent,
  getConsentLog,
} from '@/lib/cookie-consent';

const BASE_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
  externalMedia: false,
};

beforeEach(() => {
  localStorage.clear();
});

describe('getStoredConsent', () => {
  it('returns null when localStorage is empty', () => {
    expect(getStoredConsent()).toBeNull();
  });

  it('returns null when stored consent has an old version', () => {
    const stale = { ...BASE_CONSENT, version: '1', timestamp: new Date().toISOString() };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stale));
    expect(getStoredConsent()).toBeNull();
  });

  it('returns null when stored JSON is corrupt', () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'not-valid-json{{{');
    expect(getStoredConsent()).toBeNull();
  });

  it('returns the stored consent when version matches', () => {
    const valid = { ...BASE_CONSENT, analytics: true, version: CONSENT_VERSION, timestamp: '2026-01-01T00:00:00.000Z' };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(valid));
    const result = getStoredConsent();
    expect(result).not.toBeNull();
    expect(result!.analytics).toBe(true);
    expect(result!.version).toBe(CONSENT_VERSION);
  });
});

describe('setStoredConsent', () => {
  it('persists consent with current version and timestamp', () => {
    const result = setStoredConsent(BASE_CONSENT, 'accept-all');
    expect(result.version).toBe(CONSENT_VERSION);
    expect(result.timestamp).toBeTruthy();
    expect(new Date(result.timestamp).getFullYear()).toBeGreaterThanOrEqual(2025);
  });

  it('stored consent is readable by getStoredConsent', () => {
    setStoredConsent({ ...BASE_CONSENT, analytics: true }, 'accept-all');
    const read = getStoredConsent();
    expect(read?.analytics).toBe(true);
    expect(read?.marketing).toBe(false);
  });

  it('always forces necessary=true regardless of input', () => {
    setStoredConsent({ ...BASE_CONSENT, necessary: true }, 'save-choice');
    expect(getStoredConsent()?.necessary).toBe(true);
  });

  it('appends an entry to the consent log', () => {
    setStoredConsent(BASE_CONSENT, 'accept-all');
    const log = getConsentLog();
    expect(log).toHaveLength(1);
    expect(log[0].action).toBe('accept-all');
  });

  it('accumulates multiple log entries', () => {
    setStoredConsent(BASE_CONSENT, 'save-choice');
    setStoredConsent({ ...BASE_CONSENT, analytics: true }, 'accept-all');
    expect(getConsentLog()).toHaveLength(2);
  });

  it('log entry contains userAgent', () => {
    setStoredConsent(BASE_CONSENT, 'save-choice');
    const [entry] = getConsentLog();
    expect(typeof entry.userAgent).toBe('string');
  });
});

describe('getConsentLog', () => {
  it('returns empty array when no log exists', () => {
    expect(getConsentLog()).toEqual([]);
  });

  it('returns empty array when log JSON is corrupt', () => {
    localStorage.setItem(CONSENT_LOG_KEY, 'broken[[[');
    expect(getConsentLog()).toEqual([]);
  });
});
