'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckDecisionFlowVisual } from '@/components/ITCheckDecisionFlowVisual';
import { ITCheckRoutingMap } from '@/components/ITCheckRoutingMap';

const realityPoints = [
  'Systeme sind eingeführt, aber niemand verantwortet die Struktur übergreifend.',
  'Projekte laufen weiter, aber Entscheidungen bleiben unklar oder werden verschoben.',
  'Neue Tools kommen dazu, während Prozesse operativ schwach bleiben.',
  'Risiken sind bekannt, aber nicht belastbar priorisiert.',
];

const outcomePoints = [
  'Klare Ausgangslage über Systeme, Abhängigkeiten und kritische Bereiche.',
  'Priorisierte Risiken statt unverbundener Einzelmaßnahmen.',
  'Verantwortlichkeiten für Entscheidungen, Umsetzung und Betrieb.',
  'Ein belastbarer Maßnahmenplan mit klarer Reihenfolge.',
  'Entscheidungssicherheit für die nächsten Investitions- und Umsetzungsfragen.',
];

const solutionPaths = [
  {
    title: 'Umsetzung durch Ecksolution-IT',
    text: 'Wenn externe Umsetzung sinnvoll ist, übernehmen wir Verantwortung bis in den Betrieb.',
  },
  {
    title: 'Sparring mit interner IT',
    text: 'Wenn intern umgesetzt wird, schaffen wir Entscheidungs- und Strukturklarheit im Vorgehen.',
  },
  {
    title: 'Managed Service / Betrieb',
    text: 'Wenn Stabilität im Alltag fehlt, wird Betrieb dokumentiert, überwachbar und planbar gemacht.',
  },
  {
    title: 'Projektstabilisierung',
    text: 'Wenn Projekte feststecken, priorisieren wir sauber und führen in einen belastbaren Pfad zurück.',
  },
];

const sectionClass = 'scroll-mt-32 relative lg:pl-14';

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-28 pb-24">
        {/* 1) Hero */}
        <section className="px-6 pt-10 pb-16" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.02fr_1fr] gap-12 xl:gap-16 items-center">
              <div className="pr-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-gray-200 shadow-sm">
                  <Workflow className="w-4 h-4 text-primary" />
                  Schritt 1 · Ausgangslage klären
                </div>

                <h1 id="hero-heading" className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-7 leading-[1.04]">
                  Ihre IT läuft.
                  <br />
                  Aber sie ist nicht unter Kontrolle.
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
                  Microsoft 365 ist da, Azure ist angebunden, Backups und CRM existieren. Der Betrieb läuft weiter.
                  Unklar bleibt oft, wie die Teile zusammenhängen, wo Verantwortung liegt und welche Risiken gerade
                  wirklich relevant sind.
                </p>

                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  IT-Check starten <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 blur-3xl pointer-events-none" />
                <ITCheckDecisionFlowVisual />
              </div>
            </div>
          </div>
        </section>

        <div className="relative max-w-[1200px] mx-auto px-6 space-y-16">
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/25 to-primary/10"
          />

          {/* 2) Reality / Problem */}
          <section aria-labelledby="reality-heading" className={sectionClass}>
            <span
              aria-hidden="true"
              className="hidden lg:block absolute left-[30px] top-[14px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Schritt 2 · Realität sichtbar machen</p>
            <h2 id="reality-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Wenn Systeme vorhanden sind, aber Führung fehlt
            </h2>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <ul className="space-y-4 text-slate-700">
                {realityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm text-slate-600">Von Symptomen geht der Prozess in eine belastbare Diagnose über.</p>
          </section>

          {/* 3) Routing */}
          <section aria-labelledby="routing-heading" className={sectionClass}>
            <span
              aria-hidden="true"
              className="hidden lg:block absolute left-[30px] top-[14px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Schritt 3 · Routinglogik</p>
            <h2 id="routing-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Nach der Diagnose wird nicht geraten. Es wird geroutet.
            </h2>
            <ITCheckRoutingMap />
            <p className="mt-6 text-sm text-slate-600">So wird aus Analyse eine klar verantwortete Richtung.</p>
          </section>

          {/* 4) Outcome */}
          <section aria-labelledby="outcome-heading" className={sectionClass}>
            <span
              aria-hidden="true"
              className="hidden lg:block absolute left-[30px] top-[14px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Schritt 4 · Ergebnis des IT-Checks</p>
            <h2 id="outcome-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Was nach dem IT-Check klar ist
            </h2>
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <ul className="space-y-3 text-slate-700">
                {outcomePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5) Solution Paths */}
          <section aria-labelledby="paths-heading" className={sectionClass}>
            <span
              aria-hidden="true"
              className="hidden lg:block absolute left-[30px] top-[14px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Schritt 5 · Mögliche Umsetzungswege</p>
            <h2 id="paths-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Was nach dem IT-Check folgen kann
            </h2>
            <div className="space-y-4">
              {solutionPaths.map((path) => (
                <article key={path.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold tracking-tight mb-2">{path.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{path.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 6) Final CTA */}
          <section aria-labelledby="cta-heading" className={sectionClass}>
            <span
              aria-hidden="true"
              className="hidden lg:block absolute left-[30px] top-[14px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Schritt 6 · Nächster Schritt</p>
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_28px_48px_-28px_rgba(0,95,107,0.65)]">
              <div className="max-w-3xl">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  IT-Check starten
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Bevor Sie migrieren, erweitern oder neu investieren: Erst klären, was wirklich da ist.
                </p>
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  IT-Check starten <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Hinweis: Für Recruiter- und projektbezogene Anfragen steht der separate Einstieg unter{' '}
              <Link href="/recruiter" className="text-primary font-semibold hover:underline">
                /recruiter
              </Link>{' '}
              bereit.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
