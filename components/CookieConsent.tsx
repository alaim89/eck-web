
'use client';

import { useState, useEffect } from 'react';
import { CookieConsent, getStoredConsent, setStoredConsent } from '@/lib/cookie-consent';
import { Shield, X, Check } from 'lucide-react';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setIsVisible(true);
    } else {
      setConsent(stored);
    }

    // Listen for manual open trigger
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const handleAcceptAll = () => {
    const newConsent = { necessary: true, analytics: true };
    saveConsent(newConsent);
  };

  const handleSaveChoice = () => {
    saveConsent(consent);
  };

  const saveConsent = (newConsent: CookieConsent) => {
    setStoredConsent(newConsent);
    setIsVisible(false);
    // Trigger event for analytics component to pick up
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: newConsent }));
  };

  if (!isVisible) return null;

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
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
            <div>
              <div className="text-sm font-bold text-slate-900">Notwendig</div>
              <div className="text-xs text-slate-400">Erforderlich für den Betrieb der Website.</div>
            </div>
            <div className="text-primary"><Check className="w-5 h-5" /></div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
            <div>
              <div className="text-sm font-bold text-slate-900">Analyse</div>
              <div className="text-xs text-slate-400">Hilft uns, die Nutzung der Seite zu verstehen.</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                id="analytics-consent"
                type="checkbox" 
                className="sr-only peer" 
                checked={consent.analytics}
                onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
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
