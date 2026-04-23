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
  title: "Case Study: Linux-Infrastruktur stabilisiert und automatisiert",
  description:
    "Wie eine gewachsene Linux-Infrastruktur konsolidiert, automatisiert und auf eine moderne, skalierbare Plattform überführt wurde.",
  canonical: "/case-studies/digitalfunk-infrastruktur",
});

export default function CaseStudyInfrastructure() {
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
              <span className="text-gray-700 font-medium">Öffentlicher Auftraggeber</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Gewachsene Linux-Infrastruktur modernisiert - weniger manueller Aufwand, mehr Stabilität im Betrieb
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Umgebung war über Jahre gewachsen. Vieles funktionierte, aber nur mit
              hohem manuellem Aufwand, verteilter Verantwortung und Plattformen, die nicht mehr sauber
              zusammenpassten. Ziel war eine Infrastruktur, die konsistenter läuft und im Alltag besser
              beherrschbar ist. Genau in solchen Situationen hilft eine saubere{" "}
              <Link
                href="/it-infrastruktur-betreuung"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Betreuung der IT-Infrastruktur
              </Link>
              , die nicht nur Systeme verwaltet, sondern Struktur in den Betrieb bringt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die Linux-Infrastruktur war organisch gewachsen. Prozesse liefen teilweise manuell,
                  Standards fehlten und verschiedene Plattformen mussten parallel betrieben werden.
                  Das machte Änderungen aufwendig und den Betrieb unnötig komplex.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Die vorhandenen Linux-Plattformen waren nicht sauber konsolidiert und erhöhten die Komplexität im Betrieb.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Bereitstellung, Wartung und wiederkehrende Aufgaben verursachten zu viel manuellen Aufwand.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Es wurde eine moderne Virtualisierungslösung gebraucht, die stabil läuft und langfristig tragfähig ist.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Wenn Plattformen gewachsen sind, vieles irgendwie läuft und jede Änderung mehr Aufwand
                  erzeugt als nötig, braucht es oft einen{" "}
                  <Link
                    href="/solutions/externer-it-verantwortlicher"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    externen IT-Verantwortlichen
                  </Link>
                  , der Entscheidungen bündelt und technische Richtung vorgibt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Infrastruktur wurde konsolidiert, auf eine moderne Virtualisierungsbasis überführt
                    und zentrale Betriebsprozesse konsequent standardisiert und automatisiert.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Die Umsetzung erfolgte direkt im Projektumfeld und in enger Abstimmung mit bestehenden
                    Teams. In dieser Phase wurde gezielt Unterstützung eingebunden, um Konsolidierung,
                    Automatisierung und Betrieb schnell zusammenzuführen, ohne laufende Abläufe unnötig
                    zu stören.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Besonders bei Standardisierung, Absicherung und langfristiger Betriebsfähigkeit zeigte
                    sich, wie wichtig eine klare{" "}
                    <Link
                      href="/it-sicherheitsbetreuung"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      IT-Sicherheitsbetreuung
                    </Link>
                    {" "}und eine saubere Betriebsstruktur sind.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Konsolidierung und Migration bestehender Linux-Plattformen",
                      "Ausbau und Optimierung einer hochverfügbaren Proxmox-Umgebung",
                      "Automatisierung zentraler Infrastrukturprozesse mit Ansible",
                      "Aufbau einer zentralen Backup-Strategie mit Proxmox Backup Server",
                      "Standardisierung von Deployments und Konfigurationen"
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
                    <h4 className="font-bold text-black mb-2">Weniger manueller Aufwand</h4>
                    <p className="text-sm text-gray-700">
                      Wiederkehrende Aufgaben wurden automatisiert und standardisiert, was den Betrieb deutlich entlastet.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Stabilere Plattform</h4>
                    <p className="text-sm text-gray-700">
                      Die Umgebung läuft heute auf einer modernen, skalierbaren und hochverfügbaren Virtualisierungsbasis.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine konsistentere Infrastruktur, die im Alltag besser beherrschbar ist,
                  Änderungen sauberer zulässt und den laufenden Betriebsaufwand spürbar reduziert. Genau
                  dort zeigt sich, wie wichtig eine strukturierte{" "}
                  <Link
                    href="/it-infrastruktur-betreuung"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Infrastruktur-Betreuung
                  </Link>
                  {" "}ist, die nicht nur reagiert, sondern die Umgebung langfristig tragfähig macht.
                </p>
              </section>

              <TechStack
                technologies={[
                  "Linux",
                  "Proxmox VE",
                  "Proxmox Datacenter",
                  "Proxmox Backup",
                  "Ansible",
                  "Proxmox Backup Server",
                  "Debian",
                  "Ubuntu",
                  "Git",
                  "Shell Scripting",
                  "KVM",
                  "GrayLog",
                  "MediaWiki"
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Ist Ihre Infrastruktur zu aufwendig geworden?"
                description="Wenn im Betrieb zu viel manuell läuft, Plattformen gewachsen sind und Änderungen unnötig kompliziert werden, schauen wir uns das gemeinsam an."
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