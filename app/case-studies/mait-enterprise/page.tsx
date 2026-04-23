import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  AlertTriangle,
  Settings,
  TrendingUp,
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: MAIT Germany GmbH - Hybrid-IT wieder beherrschbar gemacht",
  description:
    "Wie eine komplexe hybride IT-Umgebung strukturiert, integriert und im Betrieb deutlich einfacher gemacht wurde.",
  canonical: "/case-studies/mait-enterprise",
});

export default function CaseStudyMait() {
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
                <Database className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">MAIT Germany GmbH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Hybride IT-Struktur wieder beherrschbar gemacht - weniger Abstimmung, mehr Klarheit im Betrieb
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Umgebung bestand aus einer Mischung aus On-Premise- und Cloud-Systemen.
              Vieles funktionierte, aber nur mit hohem Abstimmungsaufwand zwischen Teams und ohne klare Struktur.
              Genau in solchen Situationen hilft eine saubere{" "}
              <Link
                href="/it-infrastruktur-betreuung"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Betreuung hybrider IT-Infrastrukturen
              </Link>
              , die Systeme wieder zusammenführt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die IT-Landschaft war hybrid aufgebaut und über verschiedene Systeme verteilt.
                  Das führte im Alltag zu steigender Komplexität und mehr Abstimmungen bei jeder Änderung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Migrationen zwischen On-Prem und Cloud waren unnötig komplex.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Prozesse waren nicht sauber integriert und erzeugten zusätzlichen Aufwand.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Abstimmungen zwischen Teams verzögerten Entscheidungen und Projekte.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Wenn mehrere Systeme zusammenkommen und niemand die Gesamtstruktur sauber steuert,
                  braucht es oft einen{" "}
                  <Link
                    href="/solutions/externer-it-verantwortlicher"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    externen IT-Verantwortlichen
                  </Link>
                  , der Entscheidungen bündelt und Komplexität reduziert.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Umgebung wurde strukturiert zusammengeführt und so aufgebaut,
                    dass sie im Betrieb klarer steuerbar ist und Änderungen sauber umgesetzt werden können.
                    Besonders wichtig war dabei die Integration von Microsoft-365-Komponenten in eine
                    stabile Gesamtstruktur durch gezielte{" "}
                    <Link
                      href="/microsoft-365-betreuung"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      Microsoft 365 Betreuung
                    </Link>
                    .
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Planung und Umsetzung komplexer Microsoft-365-Migrationen",
                      "Integration von On-Premise- und Cloud-Systemen",
                      "Optimierung von IT-Betriebsprozessen durch Automatisierung",
                      "Reduktion von Abstimmungsaufwand durch klare Architekturentscheidungen",
                      "Sicherstellung von Compliance und Datensicherheit",
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
                    <h4 className="font-bold text-black mb-2">Weniger Abstimmung</h4>
                    <p className="text-sm text-gray-700">
                      Entscheidungen konnten schneller getroffen werden, weil die Struktur klarer wurde.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Bessere Steuerbarkeit</h4>
                    <p className="text-sm text-gray-700">
                      Die IT wurde im Betrieb übersichtlicher und Änderungen ließen sich sauber umsetzen.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Die Umgebung ist heute nicht nur integriert, sondern im Alltag deutlich einfacher steuerbar.
                  Gerade im Zusammenspiel von Cloud, On-Prem und Sicherheit spielt eine klare{" "}
                  <Link
                    href="/it-sicherheitsbetreuung"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    IT-Sicherheitsbetreuung
                  </Link>{" "}
                  eine zentrale Rolle.
                </p>
              </section>

              <TechStack
                technologies={[
                  "Microsoft 365",
                  "Hybrid IT",
                  "Automation",
                  "Compliance",
                  "Security",
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Zu viele Systeme, zu wenig Überblick?"
                description="Wenn Abstimmungen Zeit kosten und Änderungen unnötig kompliziert sind, schauen wir uns das gemeinsam an."
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