import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Activity, AlertTriangle, Settings, TrendingUp, Cpu } from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: group24 AG - Azure Cloud Migration",
  description: "Erfahren Sie, wie wir die group24 AG bei der Migration in Microsoft Azure und dem Aufbau einer skalierbaren Cloud-Infrastruktur unterstützt haben.",
  canonical: "/case-studies/group24-azure",
});

export default function CaseStudyGroup24() {
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
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">group24 AG</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Migration in Microsoft Azure und Aufbau einer skalierbaren Cloud-Infrastruktur
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen betrieb seine Backend-Systeme in einer klassischen On-Premise-Umgebung, die an ihre Kapazitätsgrenzen stieß und unflexibel gegenüber neuen Anforderungen war.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Eingeschränkte Skalierbarkeit der bestehenden Hardware.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Hoher administrativer Aufwand für Wartung und Updates.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Fehlende Flexibilität für mobiles Arbeiten und Remote-Zugriffe.
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
                      "Migration bestehender Backend-Systeme in Microsoft Azure",
                      "Aufbau und Konfiguration von Azure Virtual Desktop (AVD)",
                      "Automatisierung der Infrastruktur-Bereitstellung",
                      "Integration von Sicherheitslösungen in der Cloud-Umgebung",
                      "Schulung des IT-Teams im Umgang mit Azure-Ressourcen"
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
                    <h4 className="font-bold text-black mb-2">Skalierbarkeit</h4>
                    <p className="text-sm text-gray-700">Ressourcen können nun flexibel an den Bedarf angepasst werden.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Effizienz</h4>
                    <p className="text-sm text-gray-700">Deutlich reduzierter Wartungsaufwand durch Cloud-Services.</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Die erfolgreiche Migration ermöglicht der group24 AG ein dynamisches Wachstum und bietet den Mitarbeitern eine moderne, ortsunabhängige Arbeitsumgebung.
                </p>
              </section>

              <TechStack technologies={["Azure", "Azure Virtual Desktop", "Azure Linux", "Cloud Migration", "Automation", "Security", "Refactor", "SQL Migration"]} />
            </div>

            <div className="space-y-8">
              <CTASection 
                variant="card"
                title="Cloud-Migration geplant?"
                description="Wir unterstützen Sie bei der Planung und Umsetzung Ihrer Azure-Strategie – sicher, effizient und zukunftsorientiert."
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
