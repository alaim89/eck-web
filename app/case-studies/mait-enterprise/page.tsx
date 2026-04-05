import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Database, AlertTriangle, Settings, TrendingUp, Cpu } from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: MAIT Germany GmbH - Enterprise IT Integration",
  description: "Integration hybrider IT-Infrastrukturen und Optimierung von Betriebsprozessen für die MAIT Germany GmbH.",
  canonical: "/case-studies/mait-enterprise",
});

export default function CaseStudyMait() {
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
                <Database className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">MAIT Germany GmbH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Integration hybrider IT-Infrastrukturen und Optimierung von Betriebsprozessen
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen benötigte Unterstützung bei der Integration komplexer hybrider IT-Infrastrukturen und der Optimierung seiner Betriebsprozesse im Enterprise-Umfeld.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Komplexität bei der Migration von On-Prem-Systemen in die Cloud.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Ineffiziente Betriebsprozesse durch mangelnde Integration.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Hoher Koordinationsaufwand zwischen verschiedenen IT-Teams.
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
                      "Planung und Umsetzung komplexer Microsoft-365-Migrationen",
                      "Integration von On-Premise- und Cloud-Systemen (Hybrid-Setup)",
                      "Optimierung von IT-Betriebsprozessen durch Automatisierung",
                      "Beratung und Unterstützung bei Enterprise-Grade IT-Projekten",
                      "Sicherstellung der Compliance und Datensicherheit im Hybrid-Umfeld"
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
                    <h4 className="font-bold text-black mb-2">Integration</h4>
                    <p className="text-sm text-gray-700">Nahtlose Zusammenarbeit zwischen On-Prem- und Cloud-Systemen.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Effizienz</h4>
                    <p className="text-sm text-gray-700">Optimierte Betriebsprozesse und reduzierte Komplexität.</p>
                  </div>
                </div>
              </section>

              <TechStack technologies={["Microsoft 365", "Hybrid IT", "Enterprise IT", "Automation", "Compliance", "Security"]} />
            </div>

            <div className="space-y-8">
              <CTASection 
                variant="card"
                title="Enterprise IT-Projekte?"
                description="Wir unterstützen Sie bei der Planung und Umsetzung komplexer IT-Infrastrukturen und Migrationen im Enterprise-Umfeld."
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
