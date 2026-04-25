import { AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

const flowNodes = [
  { label: 'Anfrage', tone: 'neutral' },
  { label: 'IT-Check', tone: 'neutral' },
  { label: 'Diagnose', tone: 'focus' },
  { label: 'Routing', tone: 'focus' },
  { label: 'Maßnahmenplan', tone: 'decision' },
  { label: 'Umsetzung', tone: 'neutral' },
  { label: 'Betrieb', tone: 'neutral' },
] as const;

const branchNodes = ['IT-Sicherheit', 'Microsoft 365 / Azure', 'CRM & Vertrieb', 'Backup & Betrieb'];

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 overflow-hidden shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-slate-50 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.32] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Strategische Systemkarte</p>
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold text-primary">
            <ShieldCheck className="w-3 h-3" /> Entscheidungslogik
          </span>
        </div>

        <div className="relative rounded-2xl border border-slate-200 bg-white/90 p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-3">
            {flowNodes.map((node, index) => {
              const toneClass =
                node.tone === 'focus'
                  ? 'border-primary/40 bg-primary/[0.06]'
                  : node.tone === 'decision'
                    ? 'border-primary/60 bg-primary/[0.09]'
                    : 'border-slate-200 bg-white';

              return (
                <div key={node.label} className="relative">
                  <article className={`rounded-xl border px-3 py-3 min-h-[72px] shadow-[0_10px_20px_-16px_rgba(15,23,42,0.45)] ${toneClass}`}>
                    <p className="text-sm font-semibold text-slate-800">{node.label}</p>
                    {(node.label === 'Diagnose' || node.label === 'Maßnahmenplan') && (
                      <p className="text-[11px] text-slate-500 mt-1">
                        {node.label === 'Diagnose' ? 'Ursache klären' : 'Entscheidung fixieren'}
                      </p>
                    )}
                  </article>

                  {index < flowNodes.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-1.5 translate-x-full -translate-y-1/2 w-5 h-px bg-slate-300" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.18em] mb-3">Routing nach Verantwortungsfeld</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {branchNodes.map((node) => (
                <div
                  key={node}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-[0_8px_16px_-14px_rgba(15,23,42,0.35)]"
                >
                  <p className="text-sm font-medium text-slate-700">{node}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-3 text-xs">
          <div className="inline-flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Vor Diagnose ist Verantwortung oft unklar.</span>
          </div>
          <div className="inline-flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Ab Maßnahmenplan sind Entscheidungen eindeutig zugeordnet.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
