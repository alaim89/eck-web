import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function SecurityComplianceCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Zurück zu den Case Studies
          </Link>
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6">
              Case Study: Security & Compliance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Audit-bereite IT durch strukturierte Sicherheit
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie ein Unternehmen mit regulatorischen Anforderungen durch ein strukturiertes Sicherheits- und Governance-Framework die Audit-Bereitschaft erreichte.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Situation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">1</span>
                Die Ausgangslage
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ein Unternehmen mit strengen regulatorischen Anforderungen betrieb IT-Systeme, die weder ordnungsgemäß dokumentiert noch konform waren. Dieser Mangel an Struktur stellte ein erhebliches Risiko für den Geschäftsbetrieb und die rechtliche Stellung dar.
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">2</span>
                Das Problem
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Erhebliche Compliance-Risiken durch undokumentierte Systeme.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Sicherheitslücken, die sensible Daten angreifbar machten.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Kein klares Governance-Framework für den IT-Betrieb.</span>
                </li>
              </ul>
            </section>

            {/* 3. Decision Point */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">3</span>
                Der Wendepunkt
              </h2>
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-900 leading-relaxed text-lg font-medium">
                  Ein anstehendes Audit erforderte eine strukturierte IT-Umgebung. Das Unternehmen erkannte, dass sofortiges Handeln nötig war, um die Sicherheits- und Compliance-Mängel zu beheben.
                </p>
              </div>
            </section>

            {/* 4. Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">4</span>
                Die Lösung
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ecksolution-IT implementierte ein umfassendes Sicherheits- und Compliance-Framework:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Gap-Analyse:</strong> Durchführung einer gründlichen Gap-Analyse der bestehenden IT-Umgebung.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Sicherheitsrichtlinien:</strong> Implementierung umfassender Sicherheitsrichtlinien.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Governance-Framework:</strong> Erstellung eines strukturierten Governance-Frameworks für den IT-Betrieb.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Dokumentation:</strong> Vollständige Dokumentation aller IT-Systeme und Sicherheitsmaßnahmen.</span>
                </li>
              </ul>
            </section>

            {/* 5. Result */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">5</span>
                Das Ergebnis
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Audit</div>
                  <div className="text-sm text-gray-700 font-medium">Bereit</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Risiko</div>
                  <div className="text-sm text-gray-700 font-medium">Reduziert</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Klare</div>
                  <div className="text-sm text-gray-700 font-medium">Prozesse</div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Audit-bereite IT-Systeme, die alle regulatorischen Anforderungen erfüllen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Deutlich reduziertes Sicherheitsrisiko durch strukturierte Governance.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Klare und dokumentierte Prozesse für alle IT-Abläufe.</span>
                </li>
              </ul>
            </section>

            {/* 6. Stability / Long-term outcome */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">6</span>
                Langfristige Stabilität
              </h2>
              <div className="p-8 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
                <p className="leading-relaxed text-lg font-medium text-white/90">
                  Das Unternehmen verfügt nun über ein robustes Sicherheitsfundament, das es ihnen ermöglicht, alle regulatorischen Anforderungen sicher zu erfüllen und sich auf ihr Geschäftswachstum zu konzentrieren.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
