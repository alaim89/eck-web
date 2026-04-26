'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Workflow } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';

// ─── Data ────────────────────────────────────────────────────────────────────

const missingThings = [
  {
    label: 'Verantwortung fehlt.',
    text: 'Niemand trägt Verantwortung für den Gesamtablauf. Systeme laufen — aber niemand steuert.',
  },
  {
    label: 'Entscheidungen fehlen.',
    text: 'Prioritäten verschieben sich, weil die technische Ausgangslage nie klar dokumentiert wurde.',
  },
  {
    label: 'Klarheit fehlt.',
    text: 'Jedes neue Tool erhöht die Komplexität. Selten sinkt sie dadurch.',
  },
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

// ─── Motion primitives ───────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// ─── Animated flowline connector between sections ─────────────────────────────

function FlowConnector({ height = 'h-16' }: { height?: string }) {
  return (
    <div aria-hidden className="flex justify-center py-2">
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6, ease }}
        style={{ originY: 0 }}
        className={`w-px ${height} bg-gradient-to-b from-primary/25 via-primary/40 to-primary/60`}
      />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30 overflow-x-hidden">
      <Header />

      <main>

        {/* ════════════════════════════════════════════════════════════
            HERO — Diagnose als Anker
        ════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-heading"
          className="relative px-6 pt-36 pb-16 overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/[0.05] via-primary/[0.02] to-transparent"
          />

          <div className="relative max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">

              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger}
                className="pr-2"
              >
                <motion.div variants={fadeUp}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-gray-200 shadow-sm">
                    <Workflow className="w-4 h-4 text-primary" />
                    IT-Check für Mittelstand &amp; Projektverantwortliche
                  </div>
                </motion.div>

                <motion.h1
                  id="hero-heading"
                  variants={fadeUp}
                  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-7 leading-[1.04]"
                >
                  Diagnose zuerst. Dann Entscheidung. Dann Umsetzung.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10"
                >
                  Der IT-Check analysiert Systeme, Verantwortlichkeiten und Risiken —
                  und schafft die Grundlage für Entscheidungen, die tragen.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/kontakt"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    IT-Check starten <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#wie-es-funktioniert"
                    className="px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    So funktioniert der Ablauf
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.6, ease }}
                className="relative"
              >
                <div
                  aria-hidden
                  className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 blur-3xl pointer-events-none"
                />
                <ITCheckWorkflowVisual />
              </motion.div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white/60"
          />
        </section>

        <FlowConnector height="h-16" />

        {/* ════════════════════════════════════════════════════════════
            REALITY — drei harte Wahrheiten; keine Boxen
        ════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="reality-heading"
          className="relative px-6 py-20"
        >
          <div className="max-w-[860px] mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease }}
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400 mb-14"
            >
              Was diese Situation kennzeichnet
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
              }}
              className="space-y-0"
            >
              {missingThings.map((thing) => (
                <motion.div
                  key={thing.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
                  }}
                  className="grid md:grid-cols-[1fr_1.3fr] gap-4 md:gap-14 items-baseline border-t border-slate-100 py-10 first:border-t-0 first:pt-0"
                >
                  <h2
                    id={thing.label === missingThings[0].label ? 'reality-heading' : undefined}
                    className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
                  >
                    {thing.label}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {thing.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-12 pt-10 border-t border-slate-100 text-slate-400 text-sm leading-relaxed max-w-md"
            >
              Jede Verzögerung erhöht operative Kosten, bindet Aufmerksamkeit
              und verschiebt notwendige Entscheidungen weiter nach hinten.
            </motion.p>
          </div>
        </section>

        <FlowConnector height="h-20" />

        {/* ════════════════════════════════════════════════════════════
            FLOW — Prozess und Routing; Flow ist die Struktur
        ════════════════════════════════════════════════════════════ */}
        <section
          id="wie-es-funktioniert"
          aria-labelledby="flow-heading"
          className="relative px-6 py-16 scroll-mt-28"
        >
          <div className="max-w-[1200px] mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease }}
              className="mb-16"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400 mb-4">
                Entscheidungssystem
              </p>
              <h2
                id="flow-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight max-w-lg leading-tight"
              >
                Von der Diagnose zur klaren Umsetzung.
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left: checkpoints — vertical timeline */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
                }}
                className="relative space-y-9"
              >
                <div
                  aria-hidden
                  className="absolute left-[15px] top-3 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent pointer-events-none"
                />
                {checkpoints.map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0.5 w-[30px] h-[30px] rounded-full bg-white border border-primary/25 shadow-[0_0_0_4px_rgba(0,95,107,0.06)] flex items-center justify-center z-10">
                      <span className="text-[11px] font-bold text-primary leading-none">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px]">{item.text}</p>
                  </motion.article>
                ))}
              </motion.div>

              {/* Right: routing — der Differenzierer */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.15, ease }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6">
                  Routing nach Diagnose
                </p>
                <p className="text-xl font-bold text-slate-900 leading-snug mb-10 max-w-xs">
                  Die Diagnose entscheidet, welcher Pfad der richtige ist.
                </p>

                <div className="space-y-7">
                  {routingPaths.map((path, i) => (
                    <motion.div
                      key={path.area}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.09, ease }}
                      className="flex items-start gap-5"
                    >
                      <div className="w-16 shrink-0 pt-0.5">
                        <span className="text-sm font-bold text-primary">{path.area}</span>
                      </div>
                      <div>
                        <div aria-hidden className="h-px w-full bg-slate-100 mb-3" />
                        <p className="text-slate-700 text-[15px] leading-relaxed">{path.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intensifying connector into CTA */}
        <div aria-hidden className="flex justify-center py-6">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.7, ease }}
            style={{ originY: 0 }}
            className="w-px h-20 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/90"
          />
        </div>

        {/* ════════════════════════════════════════════════════════════
            CTA — unvermeidbar
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="cta-heading" className="px-6 pb-10">
          <div className="max-w-[1200px] mx-auto">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease }}
              className="text-center text-slate-400 text-sm mb-2 leading-relaxed"
            >
              Es gibt nur einen Weg, diesen Zustand zu durchbrechen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="relative overflow-hidden p-8 md:p-14 rounded-3xl bg-primary text-white shadow-[0_32px_64px_-20px_rgba(0,95,107,0.55)] mt-6"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative max-w-2xl">
                <h2
                  id="cta-heading"
                  className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.07]"
                >
                  Wir schaffen Entscheidungsfähigkeit. Nicht mehr. Nicht weniger.
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-md text-[15px]">
                  Der IT-Check ist der erste Schritt — und die Voraussetzung für alles, was folgt.
                </p>
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  IT-Check anfragen <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECONDARY ENTRY — understated
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="secondary-entry-heading" className="px-6 py-12 pb-24">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 border-t border-slate-100"
            >
              <div>
                <h2
                  id="secondary-entry-heading"
                  className="text-base font-bold tracking-tight text-slate-800"
                >
                  Für projektbezogene Anfragen mit klarem Verantwortungsrahmen
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Sekundärer Einstieg für Recruiter und Projektanfragen.
                </p>
              </div>
              <Link
                href="/recruiter"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded shrink-0"
              >
                Zur Projektanfrage <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
