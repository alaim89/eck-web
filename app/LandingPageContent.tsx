'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';
import { ITCheckRoutingMap } from '@/components/ITCheckRoutingMap';

const realityPatterns = [
  'Die meisten Systeme funktionieren – aber niemand weiß, wer entscheidet.',
  'Verantwortung ist oft verteilt, aber nicht geklärt.',
  'Migrationen werden verschoben, weil die Grundlage unklar ist.',
  'Tools sind vorhanden, aber Risiken bleiben unpriorisiert.',
];

const routingSignals = [
  'Migration geplant, aber Reihenfolge unklar',
  'Umgebung gewachsen, aber ohne Gesamtüberblick',
  'Sicherheits- oder Compliance-Druck ohne klare Priorisierung',
  'Betrieb läuft, aber nur reaktiv stabil',
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

const solutionPaths = [
  'Umsetzung durch Ecksolution-IT',
  'Sparring mit interner IT',
  'Managed Service / Betrieb',
  'Projektstabilisierung',
];

const glowCard =
  'transition-all duration-200 ease-out hover:border-[#005F6B]/30 hover:bg-[#005F6B]/[0.04] hover:shadow-[0_20px_40px_-24px_rgba(0,95,107,0.35)] hover:-translate-y-[1px]';

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-6 pt-12 pb-24" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.98fr_1.02fr] gap-12 xl:gap-16 items-center">
            <div className="pr-2">
              <h1 id="hero-heading" className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-[-0.025em] mb-8 leading-[1.03]">
                Ihre IT läuft.
                <br />
                Aber sie ist nicht unter Kontrolle.
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl leading-[1.66] mb-11">
                Microsoft 365 ist da, Azure ist angebunden, Backups und CRM existieren. Der Betrieb läuft weiter.
                Unklar bleibt oft, wie alles zusammenhängt, wer entscheidet und welche Risiken wirklich Priorität
                haben.
              </p>

              <Link
                href="/kontakt"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out shadow-[0_24px_42px_-26px_rgba(0,95,107,0.55)] hover:shadow-[0_28px_48px_-28px_rgba(0,95,107,0.62)] hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                IT-Check starten <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative py-2">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 blur-3xl pointer-events-none" />
              <ITCheckWorkflowVisual />
            </div>
          </div>
        </section>

        <div className="relative max-w-[1200px] mx-auto px-6 space-y-24">
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/30 to-primary/15"
          />

          {/* Reality */}
          <section aria-labelledby="reality-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Realität</p>
            <h2 id="reality-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Wo Unklarheit im Alltag entsteht
            </h2>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="space-y-4 text-slate-800">
                {realityPatterns.map((line) => (
                  <p key={line} className="text-lg leading-[1.65]">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">Aus Symptomen wird im nächsten Schritt eine belastbare Einordnung.</p>
          </section>

          {/* Routing */}
          <section aria-labelledby="routing-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Einordnung</p>
            <h2 id="routing-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Wo stehen Sie gerade?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {routingSignals.map((signal) => (
                <article key={signal} className={`rounded-2xl border border-slate-200 bg-white px-5 py-4 ${glowCard}`}>
                  <p className="text-sm font-medium text-slate-800 leading-[1.6]">{signal}</p>
                </article>
              ))}
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-5">Nach der Diagnose wird nicht geraten. Es wird geroutet.</h3>
            <ITCheckRoutingMap />
          </section>

          {/* Decision architecture */}
          <section aria-labelledby="architecture-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Struktur</p>
            <h2 id="architecture-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Hier passiert der entscheidende Wechsel: von Komplexität zu Verantwortung.
            </h2>
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <div className="grid md:grid-cols-3 gap-6 relative">
                {[1, 2].map((i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`hidden md:block absolute top-8 h-px w-[11%] bg-gradient-to-r from-slate-300 to-primary/35 ${i === 1 ? 'left-[30.8%]' : 'left-[64.2%]'}`}
                  />
                ))}
                {['Diagnose', 'Entscheidung', 'Routing in Verantwortung'].map((item, idx) => (
                  <article key={item} className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_24px_-22px_rgba(15,23,42,0.22)] ${glowCard}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-2">{idx + 1}</p>
                    <p className="text-base font-bold tracking-tight text-slate-900">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section aria-labelledby="outcome-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Klarheit</p>
            <h2 id="outcome-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Was nach dem IT-Check klar wird
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {outcomeGroups.map((group) => (
                <article key={group.title} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_24px_-22px_rgba(15,23,42,0.2)] ${glowCard}`}>
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

          {/* Solution paths */}
          <section aria-labelledby="paths-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Handlung</p>
            <h2 id="paths-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-7">
              Was danach folgen kann
            </h2>
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 leading-[1.65]">
              {solutionPaths.map((path) => (
                <p key={path} className="leading-relaxed">
                  • {path}
                </p>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section aria-labelledby="cta-heading" className="relative lg:pl-14">
            <span aria-hidden="true" className="hidden lg:block absolute left-[30px] top-[12px] h-4 w-4 rounded-full border border-primary/35 bg-white shadow-[0_0_0_6px_rgba(0,95,107,0.08)]" />
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_30px_54px_-30px_rgba(0,95,107,0.68)]">
              <div className="max-w-3xl">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  IT-Check starten
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Bevor Sie migrieren, erweitern oder neu investieren: Erst klären, was wirklich da ist.
                </p>
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-200 ease-out hover:bg-gray-100 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_-22px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
