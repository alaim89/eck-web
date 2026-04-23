
'use client';

import { useState, useEffect } from 'react';
import { CookieConsent, getStoredConsent, setStoredConsent } from '@/lib/cookie-consent';
import { dispatchConsentUpdate } from '@/lib/consent-manager';
import { Shield, Check } from 'lucide-react';

type ConsentCategories = Omit<CookieConsent, 'version' | 'timestamp'>;

const DEFAULT_CONSENT: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  externalMedia: false,
};

const getInitialConsent = (): ConsentCategories => {
  if (typeof window === 'undefined') return DEFAULT_CONSENT;
  const stored = getStoredConsent();

  if (!stored) return DEFAULT_CONSENT;

  return {
    necessary: stored.necessary,
    analytics: stored.analytics,
    marketing: stored.marketing,
    externalMedia: stored.externalMedia,
  };
};

const getInitialVisibility = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !getStoredConsent();
};

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);
  const [consent, setConsent] = useState<ConsentCategories>(getInitialConsent);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const saveConsent = (categories: ConsentCategories, action: 'accept-all' | 'save-choice') => {
    const stored = setStoredConsent(categories, action);
    setConsent(categories);
    setIsVisible(false);
    dispatchConsentUpdate(stored);
  };

  const handleAcceptAll = () =>
    saveConsent({ necessary: true, analytics: true, marketing: true, externalMedia: true }, 'accept-all');

  const handleSaveChoice = () => saveConsent(consent, 'save-choice');

  if (!isVisible) return null;

  const toggleRow = (
    key: keyof Omit<ConsentCategories, 'necessary'>,
    label: string,
    description: string,
  ) => (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
      <div>
        <div className="text-sm font-bold text-slate-900">{label}</div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={consent[key]}
          onChange={(e) => setConsent((prev) => ({ ...prev, [key]: e.target.checked }))}
        />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
      </label>
    </div>
  );

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Datenschutz & Cookies</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Wir nutzen Cookies, um unsere Website stabil zu halten und die Nutzung zu analysieren. Helfen Sie uns, den Service zu verbessern.
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {/* Necessary – always on */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
            <div>
              <div className="text-sm font-bold text-slate-900">Notwendig</div>
              <div className="text-xs text-slate-400">Erforderlich für den Betrieb der Website.</div>
            </div>
            <div className="text-primary"><Check className="w-5 h-5" /></div>
          </div>

          {toggleRow('analytics', 'Analyse', 'Hilft uns, die Nutzung der Seite zu verstehen.')}
          {toggleRow('marketing', 'Marketing', 'Ermöglicht personalisierte Werbung und Kampagnen-Tracking.')}
          {toggleRow('externalMedia', 'Externe Medien', 'Erlaubt das Einbinden externer Inhalte (z. B. Videos, Karten).')}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleSaveChoice}
            className="px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100"
          >
            Auswahl speichern
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-3 text-sm font-bold bg-primary text-white hover:bg-primary/90 rounded-xl transition-all shadow-lg shadow-primary/20"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

export function RevokeConsent() {
  const handleOpenSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <button
      onClick={handleOpenSettings}
      className="text-slate-400 hover:text-primary transition-colors text-xs font-medium"
    >
      Cookie-Einstellungen
    </button>
  );
}
