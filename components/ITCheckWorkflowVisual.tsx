const flowSteps = [
  { title: 'Anfrage', text: 'Auslöser aus dem Alltag wird greifbar gemacht.', tone: 'base' },
  { title: 'IT-Check', text: 'Systeme, Zuständigkeiten und Risiken werden aufgenommen.', tone: 'base' },
  { title: 'Diagnose', text: 'Aus Symptomen werden belastbare Zusammenhänge.', tone: 'focus' },
  { title: 'Entscheidung', text: 'Verantwortung, Priorität und Reihenfolge werden verbindlich.', tone: 'focus' },
  { title: 'Routing', text: 'Der passende Umsetzungspfad wird klar zugeordnet.', tone: 'focus' },
  { title: 'Maßnahmenplan', text: 'Nächste Schritte sind konkret und realistisch terminiert.', tone: 'base' },
  { title: 'Umsetzung', text: 'Teams arbeiten entlang klarer Zuständigkeiten.', tone: 'base' },
  { title: 'Betrieb', text: 'Stabilität wird wiederholbar statt zufällig.', tone: 'base' },
] as const;

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.75rem] border border-primary/20 bg-white px-6 py-10 md:px-10 md:py-14 shadow-[0_52px_96px_-44px_rgba(15,23,42,0.52)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      <div className="relative mx-auto max-w-[760px]">
        <p className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Signature Flow</p>

        <div aria-hidden="true" className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/45 to-primary/10 md:block" />

        <div className="space-y-6 md:space-y-7">
          {flowSteps.map((step, idx) => {
            const focused = step.tone === 'focus';

            return (
              <article
                key={step.title}
                className={`relative mx-auto max-w-[560px] rounded-2xl px-5 py-5 md:px-7 md:py-6 ${
                  focused ? 'bg-primary/[0.06] ring-1 ring-primary/25' : 'bg-slate-50/75'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border md:block ${
                    focused ? 'border-primary/50 bg-white' : 'border-slate-300 bg-white'
                  }`}
                />

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-xs font-bold tracking-[0.14em] text-primary/75">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-[1.65] text-slate-600">{step.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
