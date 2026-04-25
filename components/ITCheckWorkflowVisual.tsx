import { motion } from 'motion/react';

const responsibilityAreas = [
  { title: 'Security', subline: 'Risiko' },
  { title: 'Plattform', subline: 'M365 / Azure / Infrastruktur' },
  { title: 'Prozesse', subline: 'CRM / Business Prozesse' },
  { title: 'Betrieb', subline: 'Stabilität / Monitoring / Backup' },
] as const;

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-white px-6 py-8 md:px-10 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1/2 top-[22%] h-44 w-44 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[920px]">
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Strategische Systemkarte</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-fit rounded-full border border-slate-300 bg-white/90 px-6 py-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">IT-Check</p>
        </motion.div>

        <div aria-hidden="true" className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-slate-300 to-primary/40" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative mx-auto max-w-[520px] rounded-[1.75rem] border border-primary/35 bg-white px-6 py-6 md:px-7 md:py-7 shadow-[0_16px_30px_-24px_rgba(0,95,107,0.45)]"
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-[1.75rem] border border-primary/10" />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Diagnose & Routing</p>
          <p className="mt-2 text-base font-semibold text-slate-900">Hier wird Komplexität in klare Verantwortung übersetzt.</p>
          <p className="mt-3 text-sm text-slate-600">Ohne Diagnose bleibt Verantwortung unklar.</p>
        </motion.div>

        <div
          aria-hidden="true"
          className="mx-auto mt-4 grid w-full max-w-[760px] grid-cols-4 gap-3 px-2 md:px-6"
        >
          <span className="col-span-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <span className="mx-auto h-6 w-px bg-slate-300" />
          <span className="mx-auto h-7 w-px bg-slate-300" />
          <span className="mx-auto h-5 w-px bg-slate-300" />
          <span className="mx-auto h-6 w-px bg-slate-300" />
        </div>

        <div className="mt-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {responsibilityAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 + index * 0.07 }}
              className={`rounded-2xl border border-slate-200 bg-white/95 px-4 py-4 ${
                index === 1 ? 'lg:mt-3' : index === 2 ? 'lg:-mt-2' : ''
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{area.title}</p>
              <p className="mt-1 text-xs text-slate-600">{area.subline}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>Verantwortung unklar</span>
          <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          <span className="text-primary">Verantwortung zugeordnet</span>
        </div>
      </div>
    </div>
  );
}
