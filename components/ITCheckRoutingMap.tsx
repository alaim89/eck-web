const paths = [
  {
    title: 'Security',
    subline: 'Risiko priorisieren',
    detail: 'Schwachstellen werden bewertet und priorisiert behoben.',
  },
  {
    title: 'Plattform',
    subline: 'M365 / Azure strukturieren',
    detail: 'Verantwortung und Architektur werden klar zugeordnet.',
  },
  {
    title: 'Prozesse',
    subline: 'CRM / Abläufe verbinden',
    detail: 'Systeme und Arbeitsabläufe greifen nachvollziehbar ineinander.',
  },
  {
    title: 'Betrieb',
    subline: 'Monitoring / Backup stabilisieren',
    detail: 'Betrieb wird wartbar, dokumentiert und belastbar gemacht.',
  },
] as const;

export function ITCheckRoutingMap() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.2)]">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Diagnosepfad</p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            Diagnose → Routing → Verantwortung
          </h3>
        </div>

        <div className="relative mb-8">
          <div className="mx-auto w-fit rounded-xl border border-primary/30 bg-primary/[0.04] px-5 py-3 text-sm font-semibold text-slate-900">
            Routing
          </div>
          <div aria-hidden="true" className="hidden md:block absolute left-1/2 top-full h-7 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 to-slate-300" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paths.map((path) => (
            <article key={path.title} className="rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-4">
              <p className="text-sm font-bold tracking-tight text-slate-900">{path.title}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary">{path.subline}</p>
              <p className="mt-3 text-xs leading-[1.62] text-slate-600">{path.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
