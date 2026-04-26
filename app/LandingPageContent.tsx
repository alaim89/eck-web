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

const routingPaths = [
  { area: 'M365', detail: 'Governance und Rollen werden verbindlich definiert.' },
  { area: 'Azure', detail: 'Architektur und Umsetzungsreihenfolge werden strukturiert.' },
  { area: 'CRM', detail: 'Prozesse und Nutzung werden klar geregelt.' },
  { area: 'Betrieb', detail: 'Monitoring und Backup werden stabilisiert.' },
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

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="overflow-x-hidden">
        <section aria-labelledby="hero-heading" className="px-6 pt-36 pb-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[1100px] mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-8">
              IT-Check für Mittelstand &amp; Projektverantwortliche
            </p>
            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.04] mb-10 max-w-5xl"
            >
              IT-Probleme sichtbar machen. Prozesse verbinden. Lösungen automatisieren.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mb-12">
              Mit dem IT-Check analysieren wir IT, Microsoft 365, Azure, CRM und Vertriebsprozesse,
              und bauen daraus einen klaren Workflow für Stabilität, Sicherheit und Wachstum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2"
              >
                IT-Check starten <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#system-map"
                className="px-8 py-4 rounded-xl text-sm font-medium text-slate-700 border border-slate-300 inline-flex items-center justify-center"
              >
                So funktioniert der Ablauf
              </Link>
            </div>
          </motion.div>
        </section>

        <section aria-labelledby="realization-heading" className="px-6 py-28 border-y border-slate-200/70">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <h2 id="realization-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
                Typische Lage vor einer Fehlentscheidung
              </h2>
              <ul className="space-y-6 text-lg text-slate-700 leading-relaxed">
                {symptoms.map((item) => (
                  <li key={item} className="border-l border-slate-300 pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
                Beobachtung aus der Praxis
              </p>
              {contrarianStatements.map((statement) => (
                <p key={statement} className="text-2xl leading-tight font-medium text-slate-900">
                  {statement}
                </p>
              ))}
              <p className="text-slate-600 text-lg leading-relaxed pt-4">
                Jede Verzögerung erhöht operative Kosten, bindet Management-Aufmerksamkeit
                und verschiebt notwendige Entscheidungen weiter nach hinten.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="system-map" aria-labelledby="system-map-heading" className="px-6 py-32 scroll-mt-32">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <h2 id="system-map-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-6">
                Entscheidungssystem statt Tool-Sammlung
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
                Wir arbeiten nicht von Tool zu Tool, sondern von Zustand zu Zustand:
                von unklarer IT über Diagnose zur Entscheidung und in eine verbindliche Umsetzung.
              </p>
            </motion.div>

            <CentralITModel />

            <div className="mt-20 max-w-3xl mx-auto space-y-8">
              {checkpoints.map((item) => (
                <article key={item.title} className="border-l border-slate-300 pl-6">
                  <h3 className="text-2xl font-semibold tracking-tight mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="cta-heading" className="px-6 pb-16">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="bg-primary text-white rounded-3xl p-10 md:p-14"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70 mb-4">
                Nächster sinnvoller Schritt
              </p>
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-5 max-w-4xl">
                Wir sind nicht an Tools im Überfluss interessiert. Wir schaffen Entscheidungsfähigkeit.
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
                Der IT-Check ist die Voraussetzung, um Risiken zu bewerten, Verantwortlichkeiten festzulegen
                und Umsetzung sicher zu priorisieren.
              </p>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2"
              >
                IT-Check anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="secondary-entry-heading" className="px-6 py-20">
          <div className="max-w-[1100px] mx-auto border-t border-slate-200 pt-8">
            <h2 id="secondary-entry-heading" className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
              Für projektbezogene Anfragen mit klarem Verantwortungsrahmen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Sekundärer Einstieg für Recruiter und Projektanfragen.
            </p>
            <Link href="/recruiter" className="inline-flex items-center gap-2 text-slate-900 font-semibold">
              Zur Projektanfrage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
