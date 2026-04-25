const branches = [
  { title: 'M365', detail: 'Rollen, Governance und Compliance werden geordnet.' },
  { title: 'Azure', detail: 'Architektur, Reihenfolge und Verantwortungen werden geklärt.' },
  { title: 'CRM', detail: 'Prozesse, Datenfluss und Nutzung werden verbindlich gemacht.' },
  { title: 'Betrieb', detail: 'Monitoring, Backup und Betriebssicherheit werden stabilisiert.' },
] as const;

export function ITCheckRoutingMap() {
  return (
    <div className="relative rounded-3xl bg-slate-50/70 px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Routing</p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-slate-900">Diagnose → Entscheidung → Pfad</h3>
        </div>

        <div className="relative pb-2">
          <div className="mx-auto w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-primary/20">
            Routing-Entscheidung
          </div>
          <div aria-hidden="true" className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-gradient-to-b from-primary/45 to-primary/10" />
          <div aria-hidden="true" className="absolute left-[14%] right-[14%] top-[88px] hidden h-px bg-gradient-to-r from-primary/20 via-primary/35 to-primary/20 md:block" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {branches.map((branch) => (
            <article key={branch.title} className="relative pt-4 text-center">
              <span aria-hidden="true" className="mx-auto mb-3 block h-2.5 w-2.5 rounded-full bg-primary/40" />
              <h4 className="text-sm font-bold tracking-tight text-slate-900">{branch.title}</h4>
              <p className="mt-2 text-xs leading-[1.6] text-slate-600">{branch.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
