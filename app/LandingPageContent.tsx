'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckSystemFlow } from '@/components/ITCheckSystemFlow';

const realityPatterns = [
  'Die meisten Systeme funktionieren – aber niemand weiß, wer entscheidet.',
  'Verantwortung ist oft verteilt, aber nicht geklärt.',
  'Migrationen werden verschoben, weil die Grundlage unklar ist.',
  'Tools sind vorhanden, aber Risiken bleiben unpriorisiert.',
];

const outcomeGroups = [
  {
    title: 'Systeme',
    points: ['Welche Systeme kritisch sind.', 'Welche Abhängigkeiten zuerst aufgelöst werden müssen.'],
  },
  {
    title: 'Verantwortung',
    points: ['Wer entscheidet.', 'Wer Umsetzung und Betrieb verbindlich trägt.'],
  },
  {
    title: 'Risiken',
    points: ['Welche Risiken aktuell bestehen.', 'Welche Risiken zuerst reduziert werden.'],
  },
  {
    title: 'Prioritäten',
    points: ['Was zuerst entschieden wird.', 'Was bewusst zurückgestellt wird.'],
  },
  {
    title: 'Nächster Pfad',
    points: ['Welcher Umsetzungspfad sinnvoll ist.', 'Wie dieser Pfad konkret gestartet wird.'],
  },
];

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24 relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-24 h-[520px] bg-[radial-gradient(circle_at_25%_20%,rgba(0,95,107,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.08),transparent_40%)]" />

        {/* Hero */}
        <section className="px-6 pt-10 pb-20 relative" aria-labelledby="hero-heading">
          <div className="max-w-[1120px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 backdrop-blur px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-7">
              <span className="h-2 w-2 rounded-full bg-primary" />
              IT-Check Methodik
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-[-0.03em] text-slate-950 mb-8 leading-[1.01]">
              Ihre IT läuft.
              <br />
              Aber sie ist nicht unter Kontrolle.
            </h1>

            <p className="text-lg text-slate-600 max-w-3xl leading-[1.68]">
              Microsoft 365 ist da, Azure ist angebunden, Backups und CRM existieren. Der Betrieb läuft weiter.
              Unklar bleibt oft, wie alles zusammenhängt, wer entscheidet und welche Risiken wirklich Priorität
              haben.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-11">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-primary hover:bg-primary/92 text-white rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_24px_42px_-26px_rgba(0,95,107,0.56)] hover:shadow-[0_28px_46px_-28px_rgba(0,95,107,0.6)]"
              >
                IT-Check starten <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#reality-heading" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                Erst die Ausgangslage verstehen
              </a>
            </div>
          </div>
        </section>

        <ITCheckSystemFlow />

        <div className="max-w-[1120px] mx-auto px-6 space-y-24">
          {/* Problem */}
          <section aria-labelledby="reality-heading">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">Realität</p>
            <h2 id="reality-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Wo Unklarheit im Alltag entsteht
            </h2>
            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 md:p-10 shadow-[0_26px_48px_-36px_rgba(15,23,42,0.24)]">
              <div className="space-y-4 text-slate-800">
                {realityPatterns.map((line) => (
                  <p key={line} className="text-lg leading-[1.58]">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section aria-labelledby="outcome-heading">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">Klarheit</p>
            <h2 id="outcome-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Was nach dem IT-Check klar wird
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 rounded-3xl bg-slate-50/65 p-4">
              {outcomeGroups.map((group) => (
                <article key={group.title} className="rounded-2xl bg-white p-5 border border-slate-200/70 shadow-[0_12px_26px_-24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-700 mb-3">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section aria-labelledby="cta-heading">
            <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_34px_60px_-30px_rgba(0,95,107,0.68)]">
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="max-w-3xl">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  IT-Check starten
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Bevor Sie entscheiden: Erst klären.
                </p>
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  IT-Check starten <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Für Recruiter- und projektbezogene Anfragen steht ein separater Einstieg unter{' '}
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
