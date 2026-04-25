const steps = [
  { label: 'Ausgangslage', tone: 'neutral' },
  { label: 'IT-Check', tone: 'primary' },
  { label: 'Diagnose', tone: 'focus' },
  { label: 'Routing', tone: 'focus' },
  { label: 'Maßnahmenplan', tone: 'primary' },
  { label: 'Umsetzung / Betrieb', tone: 'neutral' },
] as const;

export function ITCheckDecisionFlowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-white px-6 py-8 md:px-10 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative mx-auto max-w-[520px]">
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Klärungsprozess</p>

        <div aria-hidden="true" className="absolute left-1/2 top-9 bottom-9 w-px -translate-x-1/2 bg-gradient-to-b from-slate-300 via-primary/40 to-slate-300" />

        <div className="space-y-5">
          {steps.map((step, index) => {
            const isFocus = step.tone === 'focus';
            const isPrimary = step.tone === 'primary';

            return (
              <div key={step.label} className="relative flex items-center justify-center">
                <div
                  className={`relative z-10 min-w-[230px] rounded-xl border px-5 py-3 text-center shadow-[0_12px_24px_-20px_rgba(15,23,42,0.28)] ${
                    isFocus
                      ? 'border-primary/40 bg-primary/[0.04]'
                      : isPrimary
                        ? 'border-primary/25 bg-white'
                        : 'border-slate-200 bg-white'
                  }`}
                >
                  {isFocus && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/10 blur-xl"
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                        isFocus || isPrimary ? 'bg-primary/15 text-primary' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className={`text-sm font-semibold ${isFocus || isPrimary ? 'text-slate-900' : 'text-slate-700'}`}>
                      {step.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Unklare IT-Situationen werden in verantwortete Entscheidungen übersetzt.
        </p>
      </div>
    </div>
  );
}
