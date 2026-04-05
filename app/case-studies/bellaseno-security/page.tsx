import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, ShieldCheck, AlertTriangle, Settings, TrendingUp, Cpu } from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: Bellaseno GmbH - IT-Sicherheitsstrategie",
  description: "Erfahren Sie, wie wir für die Bellaseno GmbH eine strukturierte IT-Sicherheitsstrategie aufgebaut und kritische Schwachstellen identifiziert haben.",
  canonical: "/case-studies/bellaseno-security",
});

export default function CaseStudyBellaseno() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Zurück zu den Case Studies
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">Bellaseno GmbH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Analyse und Aufbau einer strukturierten IT-Sicherheitsstrategie
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen verfügte über gewachsene IT-Strukturen ohne klare Bewertung der aktuellen Sicherheitslage. Es fehlte eine strukturierte Übersicht über Risiken, Maßnahmen und Verantwortlichkeiten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Unklare Sicherheitslage und fehlende Priorisierung von Risiken.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Keine belastbare Entscheidungsgrundlage für Investitionen.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Keine definierte Sicherheitsorganisation im Unternehmen.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Durchführung einer GAP-Analyse zur Bewertung der bestehenden Sicherheitsmaßnahmen",
                      "Identifikation kritischer Schwachstellen",
                      "Entwicklung eines Maßnahmenkatalogs unter Berücksichtigung von Risiko und Wirtschaftlichkeit",
                      "Einführung eines IT-Reifegradmodells nach BSI-Vorgaben",
                      "Beratung der Geschäftsleitung zu Governance, Compliance und Sicherheitsstrategie",
                      "Aufbau interner Prozesse für eine nachhaltige Sicherheitsorganisation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-6 h-6" /> Ergebnis
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Transparenz</h4>
                    <p className="text-sm text-gray-700">Klare Übersicht über alle relevanten Sicherheitsrisiken.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Strategie</h4>
                    <p className="text-sm text-gray-700">Strukturierte Entscheidungsbasis für zukünftige Investitionen.</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Durch die priorisierte Maßnahmenplanung wurde eine nachhaltige Sicherheitsstruktur im Unternehmen etabliert, die sowohl regulatorische Anforderungen erfüllt als auch den Geschäftsbetrieb schützt.
                </p>
              </section>

              <TechStack technologies={["GAP-Analyse", "Risikomanagement", "BSI IT-Grundschutz", "Compliance", "Governance", "Security Strategy"]} />
            </div>

            <div className="space-y-8">
              <CTASection 
                variant="card"
                title="Sicherheit für Ihr KMU?"
                description="Lassen Sie uns gemeinsam Ihre IT-Sicherheitslage analysieren und eine Strategie entwickeln, die zu Ihrem Unternehmen passt."
                buttonText="Kostenlose IT-Einschätzung anfordern"
                buttonHref="/kontakt"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
