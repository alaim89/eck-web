import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Settings,
  TrendingUp,
  Activity
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: ITZBund - Linux-Applikationsplattform stabilisiert und weiterentwickelt",
  description:
    "Wie eine komplexe Linux-Applikationsplattform im laufenden Betrieb stabilisiert, gehärtet und für steigende Anforderungen weiterentwickelt wurde.",
  canonical: "/case-studies/itzbund-applikationsbetrieb",
});

export default function CaseStudyITZBund() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zu den Praxisbeispielen
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">ITZBund</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Komplexe Linux-Applikationsplattform stabilisiert, im laufenden Betrieb und unter hohen Sicherheitsanforderungen
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Plattform war über Jahre gewachsen und technisch anspruchsvoll. Ziel war es,
              den Betrieb zuverlässig abzusichern, kritische Systeme kontrolliert weiterzuentwickeln und
              Migrationen umzusetzen, ohne die Stabilität der produktiven Umgebung zu gefährden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die Linux-Applikationsplattform bestand aus einer gewachsenen Systemlandschaft mit
                  unterschiedlichen Middleware- und Datenbank-Komponenten. Betrieb, Änderungen und
                  Weiterentwicklung mussten in einer Umgebung erfolgen, die gleichzeitig hohe Anforderungen
                  an Verfügbarkeit, Performance und Sicherheit erfüllen musste.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Die bestehende Plattform war technisch komplex und im Betrieb entsprechend anfällig für Reibung und Abstimmungsaufwand.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Kritische Applikationen mussten sauber migriert und optimiert werden, ohne den laufenden Betrieb zu gefährden.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Gleichzeitig mussten strenge Sicherheitsvorgaben eingehalten und Härtungsmaßnahmen konsequent umgesetzt werden.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Plattform wurde im laufenden Betrieb stabilisiert, technisch weiterentwickelt und
                    gezielt gehärtet. Dabei lag der Fokus nicht nur auf dem Betrieb selbst, sondern auch auf
                    sauberer Migration, Performance und nachvollziehbaren Prozessen.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Betrieb und Härtung produktiver Linux-Systemlandschaften",
                      "Migration und Optimierung von Middleware- und Datenbank-Plattformen",
                      "Umsetzung strukturierter Sicherheitsmaßnahmen und Systemhärtung",
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
                    <h4 className="font-bold text-black mb-2">Stabilerer Betrieb</h4>
                    <p className="text-sm text-gray-700">
                      Die Plattform wurde technisch so weiterentwickelt, dass Verfügbarkeit und Performance im Betrieb spürbar abgesichert wurden.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Höhere Sicherheit</h4>
                    <p className="text-sm text-gray-700">
                      Sicherheitsanforderungen wurden konsequent umgesetzt und die Umgebung gezielt gehärtet.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine belastbare Applikationsplattform, die im laufenden Betrieb besser
                  beherrschbar ist, höhere Anforderungen sauber abbildet und gleichzeitig den Sicherheitsvorgaben gerecht wird.
                </p>
              </section>

              <TechStack
                technologies={[
                  "RHEL",
                  "Linux",
                  "Middleware",
                  "MySQL",
                  "PostgreSQL",
                  "Apache",
                  "Nginx",
                  "BSI IT-Grundschutz",
                  "Shell Scripting",
                  "Monitoring Tools",
                  "Tomcat",
                  "JBoss",
                  "SUSE Enterprise",
                  "SUSE to RHEL Migration",
                  "Confluence"
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Läuft Ihre Plattform stabil oder nur mit viel Aufwand?"
                description="Wenn Betrieb, Sicherheit und Änderungen zu viel Reibung erzeugen, schauen wir uns die Situation gemeinsam an."
                buttonText="Kurz abstimmen"
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