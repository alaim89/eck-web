'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CentralITModel } from '@/components/CentralITModel';

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
    title: 'Struktur erfassen',
    text: 'Systeme, Rollen und operative Engpässe werden transparent dokumentiert.',
  },
  {
    title: 'Abhängigkeiten klären',
    text: 'Kritische Schnittstellen und Entscheidungswege werden belastbar priorisiert.',
  },
  {
    title: 'Risiken reduzieren',
    text: 'Sicherheits-, Betriebs- und Projekt-Risiken werden gezielt adressiert.',
  },
  {
    title: 'Umsetzung starten',
    text: 'Ein klarer Pfad mit Verantwortlichkeiten und nächsten Schritten wird festgelegt.',
  },
];

const routingPaths = [
  'M365 Governance',
  'Azure Architektur',
  'CRM Prozessklarheit',
  'Betriebsstabilität',
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="overflow-x-hidden">
        <section aria-labelledby="hero-heading" className="px-6 pt-40 pb-28 bg-gradient-to-b from-slate-50/55 via-white to-white">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.19em] text-slate-500 font-semibold mb-8">
              IT-Check für Mittelstand &amp; Projektverantwortliche
            </motion.p>
            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.02em] leading-[1.04] mb-10 max-w-5xl"
            >
              IT-Probleme sichtbar machen. Prozesse verbinden. Lösungen automatisieren.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-700 leading-[1.75] max-w-3xl mb-12">
              Mit dem IT-Check analysieren wir IT, Microsoft 365, Azure, CRM und Vertriebsprozesse,
              und bauen daraus einen klaren Workflow für Stabilität, Sicherheit und Wachstum.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_10px_28px_-14px_rgba(15,23,42,0.65)]"
              >
                IT-Check starten <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#system-map"
                className="px-8 py-4 rounded-xl text-sm font-medium text-slate-600 border border-slate-300/90 inline-flex items-center justify-center transition-colors duration-300 hover:text-slate-900 hover:border-slate-400"
              >
                So funktioniert der Ablauf
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section aria-labelledby="realization-heading" className="px-6 py-24 border-y border-slate-200/60 bg-gradient-to-b from-white via-slate-50/30 to-white">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} id="realization-heading" className="text-4xl md:text-5xl font-semibold tracking-[-0.015em] mb-10">
                Typische Lage vor einer Fehlentscheidung
              </motion.h2>
              <motion.ul variants={stagger} className="space-y-6 text-lg text-slate-700 leading-[1.72]">
                {symptoms.map((item) => (
                  <motion.li variants={fadeUp} key={item} className="border-l border-slate-300/90 pl-6">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                Beobachtung aus der Praxis
              </motion.p>
              {contrarianStatements.map((statement) => (
                <motion.p variants={fadeUp} key={statement} className="text-2xl leading-tight font-normal text-slate-900 tracking-[-0.01em]">
                  {statement}
                </motion.p>
              ))}
              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-[1.75] pt-4">
                Jede Verzögerung erhöht operative Kosten, bindet Management-Aufmerksamkeit
                und verschiebt notwendige Entscheidungen weiter nach hinten.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section id="system-map" aria-labelledby="system-map-heading" className="px-6 py-28 scroll-mt-32 bg-gradient-to-b from-white via-primary/[0.03] to-white">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <h2 id="system-map-heading" className="text-4xl md:text-5xl font-semibold tracking-[-0.015em] text-center mb-6">
                Entscheidungssystem statt Tool-Sammlung
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12 leading-[1.75]">
                Wir arbeiten nicht von Tool zu Tool, sondern von Zustand zu Zustand:
                von unklarer IT über Diagnose zur Entscheidung und in eine verbindliche Umsetzung.
              </p>
            </motion.div>

            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute inset-x-20 inset-y-0 bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent blur-3xl" />
              <CentralITModel />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.14em] text-slate-500"
            >
              {routingPaths.map((path) => (
                <motion.span variants={fadeUp} key={path}>{path}</motion.span>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="mt-16 max-w-3xl mx-auto space-y-8"
            >
              {checkpoints.map((item) => (
                <motion.article variants={fadeUp} key={item.title} className="border-l border-slate-300/90 pl-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.01em] mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-[1.72]">{item.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="cta-heading" className="px-6 pb-14 pt-3">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="bg-primary text-white rounded-3xl p-10 md:p-14 shadow-[0_24px_60px_-28px_rgba(0,95,107,0.65)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70 mb-4">
                Nächster sinnvoller Schritt
              </p>
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.08] mb-5 max-w-4xl">
                Wir sind nicht an Tools im Überfluss interessiert. Wir schaffen Entscheidungsfähigkeit.
              </h2>
              <p className="text-lg text-white/85 leading-[1.72] mb-8 max-w-2xl">
                Der IT-Check ist die Voraussetzung, um Risiken zu bewerten, Verantwortlichkeiten festzulegen
                und Umsetzung sicher zu priorisieren.
              </p>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_14px_32px_-14px_rgba(255,255,255,0.8)] hover:bg-white/95"
              >
                IT-Check anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="secondary-entry-heading" className="px-6 py-20">
          <div className="max-w-[1100px] mx-auto border-t border-slate-200/80 pt-8">
            <h2 id="secondary-entry-heading" className="text-xl font-semibold tracking-[-0.01em] text-slate-900 mb-2">
              Für projektbezogene Anfragen mit klarem Verantwortungsrahmen
            </h2>
            <p className="text-slate-600 leading-[1.7] mb-5">
              Sekundärer Einstieg für Recruiter und Projektanfragen.
            </p>
            <Link href="/recruiter" className="inline-flex items-center gap-2 text-slate-800 font-semibold transition-colors hover:text-slate-950">
              Zur Projektanfrage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
