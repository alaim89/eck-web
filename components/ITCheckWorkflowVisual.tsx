import { motion } from 'motion/react';
import { AlertTriangle, Search, GitBranch, ClipboardList, Wrench, ShieldCheck } from 'lucide-react';

const triggers = [
  'Migrationen stehen an',
  'Verantwortung ist nicht eindeutig',
  'Sicherheitslage ist unklar',
  'Betrieb funktioniert nur reaktiv',
] as const;

const outcomeItems = [
  'Kritische Systeme identifiziert',
  'Verantwortung klar zugeordnet',
  'Risiken priorisiert',
  'Umsetzungspfad beschlossen',
  'Betrieb belastbar aufgestellt',
] as const;

const interactiveNodeClass =
  'rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.28)] transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_20px_40px_-24px_rgba(0,95,107,0.35)] hover:-translate-y-0.5';

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-white px-6 py-8 md:px-10 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[980px]">
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Decision Map</p>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr_1fr]">
          {/* LEFT ZONE */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white/90 p-5"
            aria-label="Ausgangslage"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-3">Links · Ausgangslage</p>
            <div className="mb-4 flex items-center gap-3 rounded-xl border border-amber-200/60 bg-amber-50/70 px-3 py-2 text-sm text-slate-700">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              Trigger: Systeme laufen, Klarheit fehlt
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {triggers.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* CENTER ZONE */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative rounded-2xl border border-primary/20 bg-white p-5"
            aria-label="Diagnose und Routing"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-4">Mitte · Diagnose & Entscheidung</p>

            <div className="space-y-3">
              <div className={interactiveNodeClass}>
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-slate-900">IT-Check → Diagnose</p>
                </div>
                <p className="mt-2 text-xs text-slate-600">Wir erfassen Systemlage, Abhängigkeiten und Verantwortungslücken.</p>
              </div>

              <div className="mx-auto h-5 w-px bg-gradient-to-b from-primary/35 to-slate-300" aria-hidden="true" />

              <div className={interactiveNodeClass}>
                <div className="flex items-center gap-3">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-slate-900">Entscheidung / Routing</p>
                </div>
                <p className="mt-2 text-xs text-slate-600">Was bleibt, was geändert wird und welcher Pfad Priorität hat.</p>
              </div>

              <div className="mx-auto h-5 w-px bg-gradient-to-b from-primary/35 to-slate-300" aria-hidden="true" />

              <div className={interactiveNodeClass}>
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-slate-900">Maßnahmenplan</p>
                </div>
                <p className="mt-2 text-xs text-slate-600">Reihenfolge, Zuständigkeit und Aufwand nachvollziehbar festgelegt.</p>
              </div>
            </div>
          </motion.section>

          {/* RIGHT ZONE */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="rounded-2xl border border-slate-200 bg-white/90 p-5"
            aria-label="Ergebnis und Kontrolle"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-3">Rechts · Ergebnis / Kontrolle</p>

            <div className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <div className={interactiveNodeClass}>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Wrench className="h-4 w-4 text-primary" /> Umsetzung
                </div>
              </div>
              <div className={interactiveNodeClass}>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Betrieb
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-600">
              {outcomeItems.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Desktop connectors between zones */}
        <div aria-hidden="true" className="pointer-events-none hidden lg:block">
          <div className="absolute left-[31.5%] top-1/2 h-px w-[6.8%] -translate-y-1/2 bg-gradient-to-r from-slate-300 to-primary/40" />
          <div className="absolute right-[31.5%] top-1/2 h-px w-[6.8%] -translate-y-1/2 bg-gradient-to-r from-primary/40 to-slate-300" />
        </div>
      </div>
    </div>
  );
}
