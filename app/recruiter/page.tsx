import Link from 'next/link';
import { ArrowRight, Briefcase, Workflow, CheckCircle2, XCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Für Recruiter & Projektanfragen',
  description:
    'Projektanfragen mit Fokus auf Ergebnis, Verantwortung und stabile Umsetzung statt klassischer Ressourcenvermittlung.',
  canonical: '/recruiter',
});

const approachSteps = ['1. Anfrage', '2. Analyse', '3. Maßnahmenplan', '4. Umsetzung', '5. Betrieb'];

export default function RecruiterPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <section className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-gray-100">
              <Briefcase className="w-4 h-4 text-primary" />
              Recruiter & Projektanfragen
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Für Recruiter & Projektanfragen</h1>
            <p className="text-xl text-gray-700 font-medium mb-4">Keine klassische Ressource – sondern klare IT-Ergebnisse.</p>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Viele Ressourcenanfragen sind in Wahrheit strukturelle IT-Probleme: festgefahrene Projekte, unklare
              Verantwortung, unstrukturierte Microsoft-365-/Azure-Umgebungen oder ineffiziente CRM- und
              Vertriebsprozesse.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">A) Problem Framing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Projekte hängen fest',
                'Microsoft 365 / Azure ist unstrukturiert',
                'CRM / Vertrieb ineffizient',
                'Verantwortung unklar',
              ].map((item) => (
                <article key={item} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-gray-800 font-medium">{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">B) Vorgehen</h2>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-5 h-5 text-primary" />
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">IT-Check → Lieferung</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {approachSteps.map((step) => (
                  <div key={step} className="px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium text-sm">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">C) Positionierung</h2>
            <blockquote className="p-8 rounded-3xl bg-primary text-white text-xl leading-relaxed font-medium">
              Ich arbeite nicht als austauschbare Ressource, sondern über klar definierte Ergebnisse und
              Verantwortlichkeiten.
            </blockquote>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">D) Fit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Passt, wenn...</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Sie ein klares Ziel und belastbare Umsetzung brauchen.</li>
                  <li>Verantwortung für kritische IT-Themen explizit geregelt sein soll.</li>
                  <li>Sie Tempo und Verlässlichkeit statt reiner Kapazität erwarten.</li>
                </ul>
              </article>

              <article className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Passt eher nicht, wenn...</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>nur ein austauschbares Profil ohne Ergebnisverantwortung gesucht wird.</li>
                  <li>es keinen Entscheidungsspielraum oder keine Zielklarheit gibt.</li>
                  <li>ein reines Body-Leasing-Modell ohne Struktur bevorzugt wird.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100">
            <h2 className="text-2xl font-bold tracking-tight mb-4">E) Nächster Schritt</h2>
            <Link
              href="/kontakt?type=recruiter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Projektanfrage stellen <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
