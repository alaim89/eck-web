'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, TriangleAlert, Workflow, Compass } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';

const integrationChips = ['Microsoft 365', 'Azure', 'CRM', 'Backup', 'Security', 'Monitoring', 'Automatisierung'];

const symptoms = [
  'Projekte werden gestartet, aber nie sauber abgeschlossen.',
  'Systeme sind eingeführt, aber niemand verantwortet den Gesamtablauf.',
  'Neue Tools wurden ergänzt, ohne die bestehende Komplexität zu reduzieren.',
  'Entscheidungen werden vertagt, weil die technische Ausgangslage unklar bleibt.',
];

const contrarianStatements = [
  'Die meisten IT-Probleme sind keine Technikprobleme.',
  'Mehr Tools schaffen selten mehr Klarheit.',
  'Projekte scheitern dort, wo Verantwortung nicht eindeutig ist.',
];

const checkpoints = [
  {
    title: 'Eingang klären',
    text: 'Welche Symptome sind operativ sichtbar und wie wirken sie auf Vertrieb, Projektgeschäft und Betrieb?',
  },
  {
    title: 'Diagnose sichern',
    text: 'Welche Ursachen sind technisch, welche organisatorisch, welche rein Entscheidungsfragen?',
  },
  {
    title: 'Verantwortung definieren',
    text: 'Wer entscheidet, wer liefert zu, wer trägt die Umsetzung im Tagesgeschäft?',
  },
  {
    title: 'Maßnahmen priorisieren',
    text: 'Was reduziert Risiko sofort, was schafft Stabilität mittelfristig, was kann bewusst warten?',
  },
];

export default function LandingPageContent() {
  const renderedIntegrationChips = integrationChips.map((chip) => (
    <span
      key={chip}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_16px_-14px_rgba(15,23,42,0.38)]"
    >
      {chip}
    </span>
  ));

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-28 pb-24">
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
                  IT-Check für Mittelstand & Projektverantwortliche
                </div>
                <h1
                  id="hero-heading"
                  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-7 leading-[1.04]"
                >
                  IT-Probleme sichtbar machen. Prozesse verbinden. Lösungen automatisieren.
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
                  Mit dem IT-Check analysieren wir IT, Microsoft 365, Azure, CRM und Vertriebsprozesse, und bauen
                  daraus einen klaren Workflow für Stabilität, Sicherheit und Wachstum.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/kontakt"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    IT-Check starten <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#system-map"
                    className="px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    So funktioniert der Ablauf
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  {renderedIntegrationChips}
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
          <section aria-labelledby="realization-heading" className="scroll-mt-32">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)]">
                <h2 id="realization-heading" className="text-2xl font-bold tracking-tight mb-6">
                  Typische Lage vor einer Fehlentscheidung
                </h2>
                <ul className="space-y-4 text-slate-700">
                  {symptoms.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <TriangleAlert className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.18em] mb-5">Beobachtung aus der Praxis</p>
                <div className="space-y-4">
                  {contrarianStatements.map((statement) => (
                    <p key={statement} className="text-slate-800 font-medium leading-relaxed">
                      {statement}
                    </p>
                  ))}
                </div>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  Jede Verzögerung erhöht operative Kosten, bindet Management-Aufmerksamkeit und verschiebt notwendige
                  Entscheidungen weiter nach hinten.
                </p>
              </aside>
            </div>
          </section>

          <section id="system-map" aria-labelledby="system-map-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary" />
              </div>
              <h2 id="system-map-heading" className="text-2xl font-bold tracking-tight">
                Entscheidungssystem statt Tool-Sammlung
              </h2>
            </div>

            <div className="space-y-4">
              {checkpoints.map((item, index) => (
                <article key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)] relative">
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="cta-heading" className="scroll-mt-32">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_28px_48px_-28px_rgba(0,95,107,0.65)]">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-white/80 mb-3">Nächster sinnvoller Schritt</p>
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Wir sind nicht an Tools im Überfluss interessiert. Wir schaffen Entscheidungsfähigkeit.
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  Der IT-Check ist die Voraussetzung, um Risiken zu bewerten, Verantwortlichkeiten festzulegen und
                  Umsetzung sicher zu priorisieren.
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

          <section aria-labelledby="secondary-entry-heading" className="scroll-mt-32">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 id="secondary-entry-heading" className="text-lg font-bold tracking-tight">
                    Für projektbezogene Anfragen mit klarem Verantwortungsrahmen
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Sekundärer Einstieg für Recruiter und Projektanfragen.
                  </p>
                </div>
                <Link
                  href="/recruiter"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Zur Projektanfrage <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
