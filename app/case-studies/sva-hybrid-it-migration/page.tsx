import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  AlertTriangle,
  Settings,
  TrendingUp
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: Hybride IT-Landschaft strukturiert und Migrationen stabil umgesetzt",
  description:
    "Wie eine gewachsene hybride IT-Landschaft strukturiert, Migrationen kontrolliert umgesetzt und der Betrieb stabil gehalten wurde.",
  canonical: "/case-studies/hybrid-it-migration",
});

export default function CaseStudyHybridIT() {
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
              <span className="text-gray-700 font-medium">System Vertrieb Alexander GmbH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Hybride IT-Landschaft strukturiert – und Migrationen ohne Chaos umgesetzt
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die IT war über Jahre gewachsen. On-Premises- und Cloud-Systeme liefen parallel,
              vieles funktionierte, aber nur mit viel Abstimmung und ohne klare Linie. Ziel war es,
              die Umgebung wieder beherrschbar zu machen und in eine saubere{" "}
              <Link
                href="/it-infrastruktur-betreuung"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Hybrid-IT-Struktur
              </Link>{" "}
              zu überführen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">

              {/* Ausgangssituation */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die IT bestand aus einer Mischung aus On-Premises-, Virtualisierungs- und
                  Cloud-Systemen. Betrieb und Änderungen waren möglich, aber nur mit hohem
                  Abstimmungsaufwand und steigender Komplexität.
                </p>
              </section>

              {/* Problem */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>

                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Systeme und Plattformen liefen parallel ohne klare Struktur.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Migrationen mussten im laufenden Betrieb umgesetzt werden und waren entsprechend riskant.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Sicherheit, Verfügbarkeit und Performance mussten gleichzeitig stabil bleiben.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  In solchen Umgebungen fehlt oft nicht Technik, sondern klare Führung. Genau dort hilft
                  ein{" "}
                  <Link
                    href="/solutions/externer-it-verantwortlicher"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    klarer IT-Verantwortlicher
                  </Link>
                  , der Struktur reinbringt und Entscheidungen sauber trifft.
                </p>
              </section>

              {/* Umsetzung */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">

                  {/* 👉 DEIN RICHTIGES FRAMING */}
                  <p className="text-gray-700 leading-relaxed">
                    Die Umsetzung erfolgte im Rahmen eines Kundenprojekts über einen IT-Dienstleister,
                    in dem gezielt operative Unterstützung im Betrieb und bei Migrationen benötigt wurde.
                    Der Fokus lag darauf, Struktur in eine gewachsene Umgebung zu bringen, Änderungen
                    kontrolliert umzusetzen und den laufenden Betrieb stabil zu halten.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Dabei ging es nicht nur um einzelne Migrationen, sondern um das Zusammenspiel der
                    gesamten Umgebung. Besonders bei Sicherheit und Stabilität zeigte sich, wie wichtig
                    eine klare{" "}
                    <Link
                      href="/it-sicherheitsbetreuung"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      IT-Sicherheitsbetreuung
                    </Link>{" "}
                    ist.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Migration von Exchange, File Services und Active Directory",
                      "Betrieb und Optimierung von Virtualisierungs- und Backup-Plattformen",
                      "Integration von Middleware- und Datenbanksystemen",
                      "Umsetzung von Sicherheits- und Härtungsmaßnahmen",
                      "Automatisierung und Strukturierung von Betriebsprozessen"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Ergebnis */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-6 h-6" /> Ergebnis
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Mehr Struktur</h4>
                    <p className="text-sm text-gray-700">
                      Die IT wurde übersichtlicher und besser steuerbar.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Stabiler Betrieb</h4>
                    <p className="text-sm text-gray-700">
                      Migrationen konnten umgesetzt werden, ohne den Alltag unnötig zu stören.
                    </p>
                  </div>
                </div>

                {/* 👉 CONVERSION BRÜCKE */}
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Umgebung, die im Alltag ruhiger läuft und Veränderungen besser
                  verkraftet. Genau dort zeigt sich, wie wichtig eine strukturierte{" "}
                  <Link
                    href="/it-infrastruktur-betreuung"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Betreuung hybrider IT-Infrastrukturen
                  </Link>{" "}
                  ist.
                </p>
              </section>

              <TechStack
                technologies={[
                  "RHEL",
                  "SUSE",
                  "Ubuntu",
                  "Windows Server",
                  "Proxmox VE",
                  "KVM",
                  "Exchange",
                  "Active Directory",
                  "MySQL",
                  "RabbitMQ",
                  "Apache",
                  "Nginx",
                  "JBoss",
                  "Tomcat",
                  "Fortinet",
                  "Big Data"
                ]}
              />
            </div>

            {/* CTA */}
            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Ist Ihre Hybrid-IT unnötig kompliziert geworden?"
                description="Wenn Migrationen viel Abstimmung brauchen und Systeme nicht sauber zusammenspielen, schauen wir uns das gemeinsam an."
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