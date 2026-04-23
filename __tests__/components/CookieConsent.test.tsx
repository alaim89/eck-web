import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CookieConsentBanner, RevokeConsent } from '@/components/CookieConsent';
import { CONSENT_STORAGE_KEY, CONSENT_VERSION } from '@/lib/cookie-consent';

vi.mock('lucide-react', () => ({
  Shield: () => null,
  Check: () => null,
}));

function storedConsent(overrides = {}) {
  return JSON.stringify({
    necessary: true,
    analytics: false,
    marketing: false,
    externalMedia: false,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    ...overrides,
  });
}

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('CookieConsentBanner – visibility', () => {
  it('shows the banner when no consent is stored', async () => {
    render(<CookieConsentBanner />);
    expect(await screen.findByText(/Datenschutz & Cookies/i)).toBeInTheDocument();
  });

  it('hides the banner when valid consent is already stored', async () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, storedConsent());
    render(<CookieConsentBanner />);
    await waitFor(() => {
      expect(screen.queryByText(/Datenschutz & Cookies/i)).not.toBeInTheDocument();
    });
  });

  it('shows the banner again when consent has an old version', async () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, storedConsent({ version: '1' }));
    render(<CookieConsentBanner />);
    expect(await screen.findByText(/Datenschutz & Cookies/i)).toBeInTheDocument();
  });
});

describe('CookieConsentBanner – categories', () => {
  it('renders all four consent category labels', async () => {
    render(<CookieConsentBanner />);
    await screen.findByText(/Datenschutz & Cookies/i);
    expect(screen.getByText('Notwendig')).toBeInTheDocument();
    expect(screen.getByText('Analyse')).toBeInTheDocument();
    expect(screen.getByText('Marketing')).toBeInTheDocument();
    expect(screen.getByText('Externe Medien')).toBeInTheDocument();
  });

  it('has Notwendig as always-on (no checkbox)', async () => {
    render(<CookieConsentBanner />);
    await screen.findByText('Notwendig');
    const checkboxes = screen.getAllByRole('checkbox');
    // Only analytics, marketing, externalMedia have checkboxes — not necessary
    expect(checkboxes).toHaveLength(3);
  });

  it('analytics toggle is off by default', async () => {
    render(<CookieConsentBanner />);
    await screen.findByText('Analyse');
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((cb) => expect(cb).not.toBeChecked());
  });

  it('toggles analytics checkbox', async () => {
    const user = userEvent.setup();
    render(<CookieConsentBanner />);
    await screen.findByText('Analyse');
    const [analyticsCheckbox] = screen.getAllByRole('checkbox');
    await user.click(analyticsCheckbox);
    expect(analyticsCheckbox).toBeChecked();
  });
});

describe('CookieConsentBanner – saving choices', () => {
  it('"Alle akzeptieren" persists all categories as true and hides the banner', async () => {
    const user = userEvent.setup();
    render(<CookieConsentBanner />);
    await screen.findByText(/Alle akzeptieren/i);
    await user.click(screen.getByRole('button', { name: /Alle akzeptieren/i }));

    expect(screen.queryByText(/Datenschutz & Cookies/i)).not.toBeInTheDocument();

    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY)!);
    expect(stored.analytics).toBe(true);
    expect(stored.marketing).toBe(true);
    expect(stored.externalMedia).toBe(true);
  });

  it('"Auswahl speichern" persists only checked categories', async () => {
    const user = userEvent.setup();
    render(<CookieConsentBanner />);
    await screen.findByText('Analyse');

    const [analyticsCheckbox] = screen.getAllByRole('checkbox');
    await user.click(analyticsCheckbox);
    await user.click(screen.getByRole('button', { name: /Auswahl speichern/i }));

    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY)!);
    expect(stored.analytics).toBe(true);
    expect(stored.marketing).toBe(false);
  });

  it('"Alle akzeptieren" dispatches cookie-consent-updated event', async () => {
    const user = userEvent.setup();
    const listener = vi.fn();
    window.addEventListener('cookie-consent-updated', listener);

    render(<CookieConsentBanner />);
    await screen.findByText(/Alle akzeptieren/i);
    await user.click(screen.getByRole('button', { name: /Alle akzeptieren/i }));

    expect(listener).toHaveBeenCalledOnce();
    window.removeEventListener('cookie-consent-updated', listener);
  });
});

describe('RevokeConsent', () => {
  it('renders a "Cookie-Einstellungen" button', () => {
    render(<RevokeConsent />);
    expect(screen.getByRole('button', { name: /Cookie-Einstellungen/i })).toBeInTheDocument();
  });

  it('clicking opens the consent banner via custom event', async () => {
    const user = userEvent.setup();
    localStorage.setItem(CONSENT_STORAGE_KEY, storedConsent());

    render(
      <>
        <CookieConsentBanner />
        <RevokeConsent />
      </>,
    );

    // Banner starts hidden (valid consent stored)
    await waitFor(() =>
      expect(screen.queryByText(/Datenschutz & Cookies/i)).not.toBeInTheDocument(),
    );

    await user.click(screen.getByRole('button', { name: /Cookie-Einstellungen/i }));

    expect(await screen.findByText(/Datenschutz & Cookies/i)).toBeInTheDocument();
  });
});
