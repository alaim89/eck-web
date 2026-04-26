'use client';

import { motion } from 'motion/react';

const branches = [
  { label: 'Security',  sub: 'Risiko & Compliance' },
  { label: 'Plattform', sub: 'M365 / Azure / Infra' },
  { label: 'Prozesse',  sub: 'CRM / Vertrieb' },
  { label: 'Betrieb',   sub: 'Monitoring / Backup' },
] as const;

// Organic staggered drop heights so branches don't feel like a table
const stemH = ['h-[8px]', 'h-[20px]', 'h-[12px]', 'h-[16px]'];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function anim(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
  };
}

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative flex flex-col items-center select-none py-2">

      {/* Label */}
      <motion.p
        {...anim(0)}
        className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5"
      >
        Strategische Systemkarte
      </motion.p>

      {/* IT-Check top node */}
      <motion.div {...anim(0.06)}>
        <div className="px-7 py-2.5 rounded-full border border-primary/25 bg-white shadow-[0_0_0_5px_rgba(0,95,107,0.06),0_2px_12px_-4px_rgba(0,95,107,0.15)]">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            IT-Check
          </span>
        </div>
      </motion.div>

      {/* Vertical stem → Diagnose */}
      <div
        aria-hidden
        className="w-0.5 h-10 bg-gradient-to-b from-slate-300 to-primary/50 mt-0.5"
      />

      {/* Diagnose & Routing block */}
      <motion.div {...anim(0.14)} className="relative w-full max-w-[400px]">
        {/* Soft ambient glow — no hard border box */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[1.25rem] bg-primary/[0.07] blur-2xl scale-110 pointer-events-none"
        />
        <div className="relative rounded-[1.25rem] border border-primary/[0.18] bg-white/95 px-6 py-5 shadow-[0_8px_32px_-12px_rgba(0,95,107,0.22),0_0_0_1px_rgba(0,95,107,0.05)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1.5">
            Diagnose &amp; Routing
          </p>
          <p className="text-sm font-semibold text-slate-900 leading-snug">
            Komplexität wird in klare Verantwortung übersetzt.
          </p>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            Ohne Diagnose bleibt Verantwortung unklar.
          </p>
        </div>
      </motion.div>

      {/* Branch connector: short stem → horizontal spread line */}
      <div aria-hidden className="w-full max-w-[420px] flex flex-col items-center">
        <div className="w-0.5 h-5 bg-gradient-to-b from-primary/40 to-primary/20" />
        <div className="w-[86%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      {/* Branch items */}
      <div className="w-full max-w-[420px] grid grid-cols-4 gap-2 px-1">
        {branches.map((branch, i) => (
          <motion.div
            key={branch.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 + i * 0.07, ease }}
            className="flex flex-col items-center"
          >
            {/* Variable-height stem: creates branching feel, not a grid table */}
            <div
              aria-hidden
              className={`w-px ${stemH[i]} bg-gradient-to-b from-primary/25 to-primary/10`}
            />
            <div className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-2 py-2.5 hover:border-primary/25 hover:bg-white hover:shadow-[0_0_0_3px_rgba(0,95,107,0.07)] transition-all duration-300 cursor-default text-center">
              <p className="text-[11px] font-semibold text-slate-900 leading-tight">
                {branch.label}
              </p>
              <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">
                {branch.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.56, duration: 0.5 }}
        className="mt-6 flex items-center gap-3 text-[10px] text-slate-400 w-full max-w-[420px]"
      >
        <span className="shrink-0">Verantwortung unklar</span>
        <div
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-slate-200 via-primary/35 to-primary/60"
        />
        <span className="shrink-0 text-primary/80 font-medium">
          Verantwortung zugeordnet
        </span>
      </motion.div>
    </div>
  );
}
