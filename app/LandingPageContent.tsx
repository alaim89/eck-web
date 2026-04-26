'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, TriangleAlert, Workflow, Compass } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';

// ─── Data ────────────────────────────────────────────────────────────────────

const integrationChips = [
  'Microsoft 365', 'Azure', 'CRM', 'Backup', 'Security', 'Monitoring', 'Automatisierung',
];

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

// ─── Motion primitives ───────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Stagger container: triggers sequential reveal of direct children
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

// Standard fade-up child
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// Slide-in from left (symptoms list)
const slideLeft = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

// ─── Flowline divider between sections ───────────────────────────────────────

function Flowline({ from = 'transparent', via = 'primary/20', to = 'primary/30' }: {
  from?: string; via?: string; to?: string;
}) {
  return (
    <div aria-hidden className="flex justify-center py-4">
      <div
        className={`w-px h-12 bg-gradient-to-b from-${from} via-${via} to-${to}`}
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
            HERO — open, strong
        ════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-heading"
          className="relative px-6 pt-36 pb-12 overflow-hidden"
        >
          {/* Ambient teal glow — connects hero into the page below */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/[0.05] via-primary/[0.02] to-transparent"
          />

          <div className="relative max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-16 items-center">

              {/* Left: copy — staggered reveal on load */}
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
                  IT-Probleme sichtbar machen. Prozesse verbinden. Lösungen automatisieren.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10"
                >
                  Mit dem IT-Check analysieren wir IT, Microsoft 365, Azure, CRM und
                  Vertriebsprozesse, und bauen daraus einen klaren Workflow für Stabilität,
                  Sicherheit und Wachstum.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 mb-10"
                >
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
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-3"
                >
                  {integrationChips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_4px_12px_-8px_rgba(15,23,42,0.3)]"
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: workflow visual — no outer box, floats on ambient glow */}
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

          {/* Section exit: gradient fade — hero bleeds into next section */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-slate-50/50"
          />
        </section>

        {/* Flowline */}
        <div aria-hidden className="flex justify-center bg-gradient-to-b from-slate-50/50 to-slate-50/30 pt-0 pb-2">
          <div className="w-px h-12 bg-gradient-to-b from-primary/20 via-primary/15 to-transparent" />
        </div>

        {/* ════════════════════════════════════════════════════════════
            REALITY — denser, sharper; no hard cards
        ════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="realization-heading"
          className="relative px-6 py-20 bg-gradient-to-b from-slate-50/30 via-slate-50/20 to-white"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
              }}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start"
            >
              {/* Symptoms — left column */}
              <motion.div variants={fadeUp}>
                <h2
                  id="realization-heading"
                  className="text-2xl font-bold tracking-tight mb-8 text-slate-900"
                >
                  Typische Lage vor einer Fehlentscheidung
                </h2>
                <motion.ul
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07 } },
                  }}
                  className="space-y-5"
                >
                  {symptoms.map((item) => (
                    <motion.li
                      key={item}
                      variants={slideLeft}
                      className="flex items-start gap-3"
                    >
                      <TriangleAlert className="w-4 h-4 text-primary/70 mt-[3px] shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Contrarian statements — right column, pull-quote style */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease } },
                }}
                className="pt-1"
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.22em] mb-7">
                  Beobachtung aus der Praxis
                </p>
                <div className="space-y-5">
                  {contrarianStatements.map((statement) => (
                    <p
                      key={statement}
                      className="text-slate-800 font-medium leading-relaxed border-l-2 border-primary/30 pl-4"
                    >
                      {statement}
                    </p>
                  ))}
                </div>
                <p className="text-slate-500 mt-8 leading-relaxed text-sm">
                  Jede Verzögerung erhöht operative Kosten, bindet Management-Aufmerksamkeit
                  und verschiebt notwendige Entscheidungen weiter nach hinten.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Flowline from="transparent" via="primary/18" to="primary/30" />

        {/* ════════════════════════════════════════════════════════════
            CLARITY — vertical flowline timeline; no card grid
        ════════════════════════════════════════════════════════════ */}
        <section
          id="system-map"
          aria-labelledby="system-map-heading"
          className="relative px-6 py-16 scroll-mt-28"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-primary" />
              </div>
              <h2 id="system-map-heading" className="text-2xl font-bold tracking-tight">
                Entscheidungssystem statt Tool-Sammlung
              </h2>
            </motion.div>

            {/* Timeline — staggered scroll reveal */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
              }}
              className="relative max-w-[600px] space-y-9"
            >
              {/* Flowline rail */}
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
                  {/* Step node — sits on the flowline rail */}
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
          </div>
        </section>

        {/* Flowline → CTA: intensifies toward primary color */}
        <div aria-hidden className="flex justify-center py-4">
          <div className="w-px h-12 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
        </div>

        {/* ════════════════════════════════════════════════════════════
            CTA — strong conclusion
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="cta-heading" className="px-6 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease }}
              className="relative overflow-hidden p-8 md:p-12 rounded-3xl bg-primary text-white shadow-[0_32px_64px_-20px_rgba(0,95,107,0.55)]"
            >
              {/* Subtle dot texture */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-white/70 mb-3">
                  Nächster sinnvoller Schritt
                </p>
                <h2
                  id="cta-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
                >
                  Wir sind nicht an Tools im Überfluss interessiert. Wir schaffen
                  Entscheidungsfähigkeit.
                </h2>
                <p className="text-white/80 leading-relaxed mb-8 max-w-xl">
                  Der IT-Check ist die Voraussetzung, um Risiken zu bewerten,
                  Verantwortlichkeiten festzulegen und Umsetzung sicher zu priorisieren.
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
            SECONDARY ENTRY — understated, border-rule style
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
