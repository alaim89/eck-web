const boardRows = [
  {
    stage: 'Input',
    title: 'Ausgangslage',
    text: 'Systeme laufen, Zuständigkeit bleibt unklar.',
    tone: 'neutral',
  },
  {
    stage: 'Prozess',
    title: 'Diagnose',
    text: 'Fakten statt Vermutungen: Architektur, Risiken, Abhängigkeiten.',
    tone: 'focus',
  },
  {
    stage: 'Prozess',
    title: 'Entscheidung & Routing',
    text: 'Priorisierung und Verantwortungszuordnung auf belastbarer Grundlage.',
    tone: 'focus',
  },
  {
    stage: 'Prozess',
    title: 'Maßnahmenplan',
    text: 'Klarer Ablauf: Was zuerst, was später, was bewusst nicht.',
    tone: 'primary',
  },
  {
    stage: 'Output',
    title: 'Umsetzung / Betrieb',
    text: 'Klarheit, Verantwortung und priorisierte Maßnahmen im Alltag.',
    tone: 'primary',
  },
] as const;

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.75rem] border border-primary/20 bg-white px-8 py-10 md:px-12 md:py-12 shadow-[0_44px_84px_-44px_rgba(15,23,42,0.45)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative mx-auto max-w-[660px]">
        <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">Decision Board</p>

        <div aria-hidden="true" className="absolute left-7 top-12 bottom-10 w-px bg-gradient-to-b from-slate-300/90 via-primary/40 to-slate-300/90" />

        <div className="space-y-[18px]">
          {boardRows.map((row, idx) => {
            const focus = row.tone === 'focus';
            const primary = row.tone === 'primary';

            return (
              <article
                key={row.title}
                className={`relative ml-12 rounded-2xl border px-5 py-4 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-[#005F6B]/28 hover:bg-[#005F6B]/[0.035] ${
                  focus
                    ? 'border-primary/35 bg-primary/[0.04]'
                    : primary
                      ? 'border-primary/18 bg-white'
                      : 'border-slate-200/90 bg-white'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[44px] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border text-[10px] font-semibold flex items-center justify-center ${
                    focus || primary
                      ? 'border-primary/40 bg-primary/10 text-primary'
                      : 'border-slate-300 bg-white text-slate-500'
                  }`}
                >
                  {idx + 1}
                </span>

                {focus && (
                  <div aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/10 blur-lg" />
                )}

                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{row.stage}</p>
                  <h3 className="mt-1 text-base font-bold tracking-tight text-slate-900">{row.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-[1.62]">{row.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Wir sind nicht auf der Suche nach mehr Tools — wir schaffen Klarheit, damit Verantwortung möglich wird.
        </p>
      </div>
    </div>
  );
}
