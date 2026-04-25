'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Compass, Route, CheckCircle2, Workflow } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';

const routeOptions = [
  {
    title: 'Migration geplant',
    text: 'Bevor der nächste Schritt gemacht wird: Abhängigkeiten, Reihenfolge und Risiken sauber klären.',
  },
  {
    title: 'Umgebung gewachsen, aber kein Überblick',
    text: 'Systeme laufen, aber keiner kann belastbar sagen, wie alles zusammenhängt und wer entscheidet.',
  },
  {
    title: 'Sicherheits- oder Compliance-Druck',
    text: 'Nicht einzelne Maßnahmen, sondern eine nachvollziehbare Priorisierung mit klarer Verantwortung.',
  },
  {
    title: 'Betrieb läuft, aber nicht stabil',
    text: 'Wiederkehrende Störungen, aufgeschobene Änderungen und zu viel Vorsicht im Alltag.',
  },
];

const solutionCategories = [
  {
    title: 'Migrationen',
    text: 'Raus aus gewachsenen Systemen, ohne neues Chaos zu erzeugen.',
  },
  {
    title: 'Microsoft 365 & Azure',
    text: 'Sauber aufgebaut, nachvollziehbar verwaltet, nicht nur „läuft irgendwie“.',
  },
  {
    title: 'Betrieb',
    text: 'Dokumentiert, wartbar und mit klarer Verantwortung.',
  },
  {
    title: 'Sicherheit & Compliance',
    text: 'Nicht als einmaliges Projekt, sondern als belastbarer Zustand.',
  },
];

const outcomePoints = [
  'Welche Systeme kritisch sind.',
  'Wo Verantwortung fehlt.',
  'Welche Risiken aktuell bestehen.',
  'Welche Entscheidungen zuerst getroffen werden müssen.',
  'Welche Maßnahmen bewusst nicht priorisiert werden.',
  'Welcher Umsetzungspfad sinnvoll ist.',
];

const technologyChips = ['Microsoft 365', 'Azure', 'Entra ID', 'Intune', 'Veeam', 'CRM', 'Monitoring'];

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-28 pb-24">
        {/* 1) Hero */}
        <section className="px-6 pt-10 pb-16" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pr-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-gray-200 shadow-sm">
                  <Workflow className="w-4 h-4 text-primary" />
                  IT-Check für Geschäftsführer, IT-Leitung und Projektverantwortliche
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    IT-Check anfragen <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#routing"
                    className="px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Wo stehen Sie gerade?
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 blur-3xl pointer-events-none" />
                <ITCheckWorkflowVisual />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 space-y-24">
          {/* 2) Problem */}
          <section aria-labelledby="problem-heading" className="scroll-mt-32">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)]">
                <h2 id="problem-heading" className="text-2xl font-bold tracking-tight mb-6">
                  Wenn IT läuft, aber nicht geführt ist
                </h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  Microsoft 365 ist eingerichtet.
                  {'\n'}Azure läuft irgendwo mit.
                  {'\n'}Backups gibt es auch.
                  {'\n\n'}Aber:{'\n\n'}Niemand weiß genau,
                  {'\n'}wie alles zusammenhängt.
                  {'\n\n'}Änderungen sind vorsichtig.
                  {'\n'}Migrationen werden geschoben.
                  {'\n'}Und Sicherheit ist ein Gefühl – kein Zustand.
                </p>
              </div>

              <aside className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.18em] mb-5">Auswirkung im Alltag</p>
                <div className="space-y-4 text-slate-700">
                  <p>Entscheidungen dauern länger als nötig, weil die Ausgangslage nicht belastbar beschrieben ist.</p>
                  <p>Teams arbeiten vorsichtig statt wirksam, um keine unerwarteten Kettenreaktionen auszulösen.</p>
                  <p>Investitionen werden gemacht, bevor klar ist, welche Maßnahme wirklich Priorität hat.</p>
                </div>
              </aside>
            </div>
          </section>

          {/* 3) Routing / Self-selection */}
          <section id="routing" aria-labelledby="routing-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <Route className="w-5 h-5 text-primary" />
              </div>
              <h2 id="routing-heading" className="text-2xl font-bold tracking-tight">
                Wo stehen Sie gerade?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {routeOptions.map((option) => (
                <article
                  key={option.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)]"
                >
                  <h3 className="text-base font-bold tracking-tight text-slate-900 mb-2">{option.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{option.text}</p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    Mit IT-Check klären <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-2xl border border-slate-200 bg-slate-50/70">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Sekundär:</span> Wenn Sie gezielt Unterstützung in laufenden Projekten
                oder über Recruiter-Anfragen benötigen, finden Sie den separaten Einstieg unter{' '}
                <Link href="/recruiter" className="text-primary font-semibold hover:underline">
                  /recruiter
                </Link>
                .
              </p>
            </div>
          </section>

          {/* 4) Workflow / Decision architecture */}
          <section aria-labelledby="decision-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary" />
              </div>
              <h2 id="decision-heading" className="text-2xl font-bold tracking-tight">
                Entscheidungsarchitektur statt Aktionismus
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Diagnose',
                  text: 'Wir klären, was wirklich da ist.',
                },
                {
                  title: 'Entscheidung',
                  text: 'Was bleibt, was geht, was geändert wird.',
                },
                {
                  title: 'Umsetzung & Betrieb',
                  text: 'Sauber, nachvollziehbar, stabil.',
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)] relative"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 5) What we solve */}
          <section aria-labelledby="solve-heading" className="scroll-mt-32">
            <h2 id="solve-heading" className="text-2xl font-bold tracking-tight mb-8">
              Was wir konkret lösen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutionCategories.map((category) => (
                <article key={category.title} className="p-8 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold tracking-tight mb-3">{category.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{category.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 6) Outcome */}
          <section aria-labelledby="outcome-heading" className="scroll-mt-32">
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70">
              <h2 id="outcome-heading" className="text-2xl font-bold tracking-tight mb-6">
                Was nach dem IT-Check klar ist
              </h2>
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

          {/* 7) Final CTA */}
          <section aria-labelledby="cta-heading" className="scroll-mt-32">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_28px_48px_-28px_rgba(0,95,107,0.65)]">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-white/80 mb-3">Nächster sinnvoller Schritt</p>
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  IT-Check anfragen
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Bevor Sie migrieren, erweitern oder neu investieren: Erst klären, was wirklich da ist.
                </p>
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  IT-Check anfragen <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* 8) Technologies (support only) */}
          <section aria-labelledby="tech-heading" className="scroll-mt-32">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h2 id="tech-heading" className="text-lg font-bold tracking-tight mb-4">
                Technologien im Einsatz
              </h2>
              <div className="flex flex-wrap gap-3">
                {technologyChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
