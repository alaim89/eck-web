const paths = [
  {
    title: 'Security',
    subline: 'Risiko priorisieren',
    detail: 'Kritische Angriffsflächen werden zuerst reduziert und klar verantwortet.',
  },
  {
    title: 'M365 & Azure',
    subline: 'Plattform ordnen',
    detail: 'Rollen, Richtlinien und Architektur werden zusammengeführt.',
  },
  {
    title: 'CRM & Prozesse',
    subline: 'Abläufe verbinden',
    detail: 'Technik und Vertrieb greifen wieder in einem belastbaren Prozess ineinander.',
  },
  {
    title: 'Betrieb',
    subline: 'Stabilität sichern',
    detail: 'Monitoring, Backup und Betrieb werden dauerhaft planbar.',
  },
] as const;

export function ITCheckRoutingMap() {
  return (
    <div className="premium-surface p-6 md:p-8 lg:p-10">
      <div className="mx-auto max-w-[920px]">
        <p className="text-center text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-500">
          Diagnosepfad
        </p>

        <div className="mt-4 flex flex-col items-center">
          <p className="text-base md:text-lg font-semibold text-slate-900">Diagnose</p>
          <div aria-hidden className="flowline my-3 h-8" />
          <p className="text-sm md:text-base text-primary font-semibold">Routing</p>
        </div>

        <div className="relative mt-8 md:mt-10">
          <div aria-hidden className="hidden md:block branch-line absolute top-0 left-[10%] right-[10%]" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:pt-6">
            {paths.map((path) => (
              <article key={path.title} className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 md:p-5 premium-hover">
                <p className="text-sm md:text-base font-semibold tracking-tight text-slate-900">{path.title}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-primary">{path.subline}</p>
                <p className="mt-3 text-sm leading-[1.65] text-slate-600">{path.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
