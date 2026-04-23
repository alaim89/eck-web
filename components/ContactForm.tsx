'use client';

import { useState } from 'react';
import {
  Building2,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export function ContactForm() {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      company: formData.get('company')?.toString() || '',
      employees: formData.get('employees')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      website: formData.get('website')?.toString() || '', // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setFormState('success');
      form.reset();

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submit', {
          event_category: 'lead',
          event_label: 'Kontaktformular erfolgreich gesendet',
        });

        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Kontakt',
          event_label: 'Formular erfolgreich abgeschickt',
        });

        // Optional: Google Ads Conversion
         (window as any).gtag('event', 'conversion', {
           send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
           value: 1.0,
           currency: 'EUR',
         });
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-20">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-8">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Anfrage gesendet!</h2>
        <p className="text-gray-600 mb-8">
          Vielen Dank für Ihr Vertrauen. Wir melden uns innerhalb der nächsten
          24 Stunden bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setFormState('idle')}
          className="text-primary font-bold hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
          >
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="max@unternehmen.de"
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
        >
          Unternehmen
        </label>
        <div className="relative">
          <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Muster GmbH"
            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="employees"
          className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
        >
          Mitarbeiteranzahl
        </label>
        <div className="relative">
          <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            id="employees"
            name="employees"
            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none"
            defaultValue="10-50"
          >
            <option value="1-5">1-5 Mitarbeiter</option>
            <option value="6-10">6-10 Mitarbeiter</option>
            <option value="10-50">10-50 Mitarbeiter</option>
            <option value="50-150">50-150 Mitarbeiter</option>
            <option value="150-250">150-250 Mitarbeiter</option>
            <option value="250+">250+ Mitarbeiter</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1"
        >
          Ihr Anliegen
        </label>
        <div className="relative">
          <MessageCircle className="absolute left-6 top-6 w-5 h-5 text-gray-400" />
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Beschreiben Sie kurz Ihre aktuelle IT-Herausforderung (z. B. Ausfälle, Migration, Sicherheit)..."
            className="w-full pl-14 pr-6 py-6 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'click', {
              event_category: 'CTA',
              event_label: 'Kontaktformular Button',
            });
          }
        }}
        className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-3"
      >
        {formState === 'submitting' ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Kostenlose IT-Einschätzung anfordern{' '}
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {formState === 'error' && (
        <p className="text-sm text-red-600 text-center">
          Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie
          es erneut.
        </p>
      )}

      <div className="text-center text-xs text-gray-400 space-y-1">
        <p>• Antwort innerhalb von 24h</p>
        <p>• 100% unverbindlich</p>
        <p>• Keine Weitergabe Ihrer Daten</p>
      </div>
    </form>
  );
}