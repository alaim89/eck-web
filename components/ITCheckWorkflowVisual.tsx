import { CheckCircle2, Circle } from 'lucide-react';

const coreNodes = ['Anfrage', 'IT-Check', 'Diagnose', 'Routing', 'Maßnahmenplan', 'Umsetzung', 'Betrieb'];
const branchNodes = ['IT-Sicherheit', 'Microsoft 365 / Azure', 'CRM & Vertrieb', 'Backup & Betrieb'];

export function ITCheckWorkflowVisual() {
  return (
    <div className="relative rounded-3xl border border-gray-200 bg-white p-6 md:p-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {coreNodes.map((node, index) => (
            <div key={node} className="relative">
              <article className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-gray-800">{node}</p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3 h-3" /> aktiv
                  </span>
                </div>
              </article>

              {index < coreNodes.length - 1 && (
                <div className="hidden xl:flex absolute top-1/2 -right-2 translate-x-full -translate-y-1/2 items-center gap-1 text-gray-300">
                  <span className="w-8 h-px bg-current" />
                  <Circle className="w-2 h-2 fill-current" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Routing-Pfade</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {branchNodes.map((node, index) => (
              <div key={node} className="rounded-xl border border-gray-200 bg-white px-4 py-3 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-gray-700">{node}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    index % 2 === 0 ? 'bg-sky-50 text-sky-700 border border-sky-200' : 'bg-violet-50 text-violet-700 border border-violet-200'
                  }`}
                >
                  Pfad
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
