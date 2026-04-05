import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Database, AlertTriangle, Settings, TrendingUp, Activity, Cpu } from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: ITZBund Applikationsbetrieb",
  description: "Betrieb, Härtung und Migration produktiver Linux-Systemlandschaften für das ITZBund.",
  canonical: "/case-studies/itzbund-applikationsbetrieb",
});

export default function CaseStudyITZBund() {
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
              <span className="text-gray-700 font-medium">ITZBund</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Betrieb und Weiterentwicklung einer Linux-Applikationsplattform
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Eine gewachsene, komplexe Linux-Applikationsplattform mit verschiedenen Middleware-Komponenten und Datenbanken erforderte eine Stabilisierung und Modernisierung, um den steigenden Anforderungen an Verfügbarkeit und Sicherheit gerecht zu werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Herausforderung
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Hohe Komplexität der bestehenden Systemlandschaft und Middleware-Stacks.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Notwendigkeit einer sauberen Migration kritischer Applikationen im laufenden Betrieb.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Strenge Sicherheitsanforderungen und notwendige Härtungsmaßnahmen nach Bundesvorgaben.
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
                      "Betrieb und Härtung produktiver Linux-Systemlandschaften (RHEL/Ubuntu)",
                      "Migration und Optimierung von Middleware- und Datenbank-Plattformen",
                      "Implementierung strukturierter Sicherheitsmaßnahmen und Systemhärtung",
                      "Analyse und Behebung komplexer Performance-Engpässe im Applikationsstack",
                      "Dokumentation und Prozessoptimierung für einen stabilen 24/7-Betrieb"
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
                    <h4 className="font-bold text-black mb-2">Stabiler Betrieb</h4>
                    <p className="text-sm text-gray-700">Deutlich erhöhte Verfügbarkeit und Performance der zentralen Applikationsplattform.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Sichere Infrastruktur</h4>
                    <p className="text-sm text-gray-700">Erfolgreiche Umsetzung von Härtungsmaßnahmen und Einhaltung höchster Sicherheitsstandards.</p>
                  </div>
                </div>
              </section>

              <TechStack technologies={["RHEL", "Linux", "Middleware", "MySQL", "PostgreSQL", "Apache", "Nginx", "BSI IT-Grundschutz", "Shell Scripting", "Monitoring Tools"]} />
            </div>

            <div className="space-y-8">
              <CTASection 
                variant="card"
                title="Applikationsbetrieb optimieren?"
                description="Wir unterstützen Sie dabei, komplexe Applikationslandschaften zu stabilisieren, zu härten und effizient zu betreiben."
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
