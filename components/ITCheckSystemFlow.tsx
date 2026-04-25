const flowSteps = [
  { title: 'Trigger', text: 'Unklarheit im Alltag wird konkret benannt.' },
  { title: 'IT-Check', text: 'Systeme, Verantwortungen und Risiken werden erfasst.' },
  { title: 'Diagnose', text: 'Symptome werden zu belastbaren Zusammenhängen.' },
  { title: 'Decision', text: 'Prioritäten und Verantwortung werden verbindlich.' },
  { title: 'Measures', text: 'Die nächsten Schritte werden präzise definiert.' },
  { title: 'Execution', text: 'Umsetzung folgt entlang klarer Zuständigkeiten.' },
  { title: 'Operation', text: 'Stabilität wird im Betrieb wiederholbar.' },
] as const;

const routingBranches = [
  'M365: Governance und Rollen klären',
  'Azure: Architektur und Reihenfolge strukturieren',
  'CRM: Prozesse und Nutzung verbindlich machen',
  'Betrieb: Monitoring und Backup stabilisieren',
] as const;

export function ITCheckSystemFlow() {
  return (
    <section aria-labelledby="system-flow-heading" className="relative px-6 py-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Systemfluss</p>
          <h2 id="system-flow-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ein zusammenhängender Entscheidungsweg statt einzelner Maßnahmen.
          </h2>
        </div>

        <div className="relative rounded-[2.5rem] bg-white px-6 py-10 md:px-10 md:py-14 shadow-[0_46px_84px_-48px_rgba(15,23,42,0.48)]">
          <div aria-hidden="true" className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-primary/15 via-primary/40 to-primary/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {flowSteps.slice(0, 4).map((step, idx) => (
              <article key={step.title} className="relative md:mx-auto md:max-w-[560px] md:px-2">
                <span aria-hidden="true" className="absolute left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-primary/35 bg-white md:left-1/2" />
                <div className="pl-10 md:pl-0 md:text-center">
                  <p className="text-xs font-bold tracking-[0.14em] text-primary/75 mb-1">{String(idx + 1).padStart(2, '0')}</p>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-[1.65] text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative my-11">
            <div className="md:mx-auto md:max-w-[560px] pl-10 md:pl-0 md:text-center">
              <span aria-hidden="true" className="absolute left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-primary/45 bg-white md:left-1/2" />
              <h3 className="text-lg font-bold tracking-tight text-slate-900">Routing</h3>
              <p className="mt-1 text-sm leading-[1.65] text-slate-600">
                Nach der Entscheidung teilt sich der Pfad in den passenden Umsetzungsweg.
              </p>
            </div>
            <div aria-hidden="true" className="absolute left-6 top-14 h-8 w-px bg-gradient-to-b from-primary/40 to-primary/10 md:left-1/2 md:-translate-x-1/2" />
            <div aria-hidden="true" className="absolute left-10 right-6 top-[88px] hidden h-px bg-gradient-to-r from-primary/15 via-primary/35 to-primary/15 md:block" />

            <div className="mt-12 space-y-3 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
              {routingBranches.map((branch) => (
                <p key={branch} className="text-sm leading-[1.6] text-slate-700 md:text-center">
                  {branch}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {flowSteps.slice(4).map((step, idx) => (
              <article key={step.title} className="relative md:mx-auto md:max-w-[560px] md:px-2">
                <span aria-hidden="true" className="absolute left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-primary/35 bg-white md:left-1/2" />
                <div className="pl-10 md:pl-0 md:text-center">
                  <p className="text-xs font-bold tracking-[0.14em] text-primary/75 mb-1">{String(idx + 5).padStart(2, '0')}</p>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-[1.65] text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
