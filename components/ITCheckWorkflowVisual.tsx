'use client';

import { motion } from 'motion/react';

const branches = [
  { label: 'M365', sub: 'Governance' },
  { label: 'Azure', sub: 'Architektur' },
  { label: 'CRM', sub: 'Prozesse' },
  { label: 'Betrieb', sub: 'Monitoring' },
] as const;

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
    <div className="relative flex flex-col items-center select-none py-4">

      {/* IT-Check — minimal entry; deliberately small */}
      <motion.div {...anim(0.06)}>
        <div className="px-5 py-1.5 rounded-full border border-slate-200 bg-slate-50/80">
          <span className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
            IT-Check
          </span>
        </div>
      </motion.div>

      {/* Stem into diagnose */}
      <div aria-hidden className="w-0.5 h-7 bg-gradient-to-b from-slate-300/80 to-primary/60 mt-0.5" />

      {/* DIAGNOSE — dominant visual center */}
      <motion.div {...anim(0.14)} className="relative w-full max-w-[380px]">
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[2.5rem] bg-primary/[0.13] blur-3xl scale-110 pointer-events-none"
        />
        <div className="relative rounded-2xl border border-primary/25 bg-white px-7 py-8 shadow-[0_16px_52px_-16px_rgba(0,95,107,0.38),0_0_0_1px_rgba(0,95,107,0.07)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-primary/50 mb-3">
            Diagnose
          </p>
          <p className="text-[22px] font-bold text-slate-900 leading-tight tracking-tight mb-2">
            Entscheidungszentrum
          </p>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            Komplexität wird in klare Verantwortung übersetzt.
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-primary shrink-0"
            />
            <span className="text-[11px] text-primary font-semibold">Analyse aktiv</span>
          </div>
        </div>
      </motion.div>

      {/* Branch connector */}
      <div aria-hidden className="flex flex-col items-center w-full max-w-[380px]">
        <div className="w-0.5 h-5 bg-gradient-to-b from-primary/55 to-primary/20" />
        <div className="w-[84%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Routing branches */}
      <div className="w-full max-w-[380px] grid grid-cols-4 gap-1.5 px-0.5 mt-0.5">
        {branches.map((branch, i) => (
          <motion.div
            key={branch.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 + i * 0.07, ease }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-4 bg-gradient-to-b from-primary/30 to-primary/10" />
            <div className="w-full rounded-xl border border-slate-200/80 bg-white/90 px-2 py-3 text-center hover:border-primary/20 hover:shadow-[0_2px_12px_-6px_rgba(0,95,107,0.2)] transition-all duration-300 cursor-default">
              <p className="text-[12px] font-bold text-slate-900 tracking-tight">{branch.label}</p>
              <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{branch.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6 flex items-center gap-3 text-[10px] text-slate-400 w-full max-w-[380px]"
      >
        <span className="shrink-0">Unklarheit</span>
        <div aria-hidden className="h-px flex-1 bg-gradient-to-r from-slate-200 via-primary/40 to-primary/70" />
        <span className="shrink-0 text-primary/90 font-bold">Entscheidung</span>
      </motion.div>
    </div>
  );
}
