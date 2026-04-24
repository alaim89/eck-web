import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getGtagConsentState, dispatchConsentUpdate } from '@/lib/consent-manager';
import type { CookieConsent } from '@/lib/cookie-consent';

const makeConsent = (overrides: Partial<CookieConsent> = {}): CookieConsent => ({
  necessary: true,
  analytics: false,
  marketing: false,
  externalMedia: false,
  version: '2',
  timestamp: '2026-01-01T00:00:00.000Z',
  ...overrides,
});

describe('getGtagConsentState', () => {
  it('returns all denied when consent is null (privacy by default)', () => {
    const state = getGtagConsentState(null);
    expect(state.analytics_storage).toBe('denied');
    expect(state.ad_storage).toBe('denied');
    expect(state.ad_user_data).toBe('denied');
    expect(state.ad_personalization).toBe('denied');
  });

  it('always grants functionality_storage and security_storage', () => {
    const state = getGtagConsentState(null);
    expect(state.functionality_storage).toBe('granted');
    expect(state.security_storage).toBe('granted');
  });

  it('grants analytics_storage when analytics=true', () => {
    const state = getGtagConsentState(makeConsent({ analytics: true }));
    expect(state.analytics_storage).toBe('granted');
    expect(state.ad_storage).toBe('denied');
  });

  it('grants ad signals when marketing=true', () => {
    const state = getGtagConsentState(makeConsent({ marketing: true }));
    expect(state.ad_storage).toBe('granted');
    expect(state.ad_user_data).toBe('granted');
    expect(state.ad_personalization).toBe('granted');
  });

  it('grants all signals when analytics and marketing are both true', () => {
    const state = getGtagConsentState(makeConsent({ analytics: true, marketing: true }));
    expect(state.analytics_storage).toBe('granted');
    expect(state.ad_storage).toBe('granted');
  });

  it('denies ad signals when only analytics is granted', () => {
    const state = getGtagConsentState(makeConsent({ analytics: true, marketing: false }));
    expect(state.analytics_storage).toBe('granted');
    expect(state.ad_storage).toBe('denied');
  });
});

describe('dispatchConsentUpdate', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('dispatches cookie-consent-updated event with consent as detail', () => {
    const consent = makeConsent({ analytics: true });
    const listener = vi.fn((e: Event) => e);
    window.addEventListener('cookie-consent-updated', listener);

    dispatchConsentUpdate(consent);

    expect(listener).toHaveBeenCalledOnce();
    const evt = listener.mock.calls[0][0] as CustomEvent<CookieConsent>;
    expect(evt.detail.analytics).toBe(true);

    window.removeEventListener('cookie-consent-updated', listener);
  });
});
