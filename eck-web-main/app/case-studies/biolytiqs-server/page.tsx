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
  title: "Case Study: BiolytiQs GmbH - Serverumgebung modernisiert und sicher angebunden",
  description:
    "Wie eine veraltete Serverumgebung modernisiert, sauber an Microsoft 365 angebunden und mit einer belastbaren Backup-Strategie abgesichert wurde.",
  canonical: "/case-studies/biolytiqs-server",
});

export default function CaseStudyBiolytiqs() {
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
              <span className="text-gray-700 font-medium">BiolytiQs GmbH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Veraltete Serverumgebung modernisiert – sicher angebunden und sauber abgesichert
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Umgebung war technisch überholt und wurde zunehmend zum Risiko. Ziel war
              es, die Serverlandschaft auf einen sauberen Stand zu bringen, sicher mit Microsoft 365 zu
              verbinden und gleichzeitig eine belastbare Absicherung für Daten und Betrieb aufzubauen.
              Genau an solchen Stellen braucht es eine klare{" "}
              <Link
                href="/solutions/hybrid-it-infrastruktur"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Betreuung der IT-Infrastruktur
              </Link>
              , die nicht nur ersetzt, sondern sinnvoll zusammenführt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen arbeitete mit veralteter Server-Hardware und Windows Server 2012 R2.
                  Die Umgebung erhielt keine aktuellen Sicherheitsupdates mehr und war nur eingeschränkt
                  mit modernen Cloud-Diensten kompatibel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Die veralteten Betriebssysteme erhöhten das Sicherheitsrisiko im laufenden Betrieb.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    On-Prem- und Cloud-Identitäten waren nicht sauber miteinander verbunden.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Das vorhandene Backup-Konzept war für lokale Daten nicht zuverlässig genug.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Wenn bestehende Systeme technisch noch laufen, aber Sicherheit, Identitäten und
                  Absicherung nicht mehr sauber zusammenpassen, wird aus Alltag schnell Risiko. Gerade
                  dann braucht es eine strukturierte{" "}
                  <Link
                    href="/solutions/it-sicherheit"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    IT-Sicherheitsbetreuung
                  </Link>
                  , die Schwachstellen nicht weiter mitschleppt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Serverumgebung wurde technisch modernisiert, virtualisiert und sauber an
                    Microsoft 365 angebunden. Gleichzeitig wurde die Identitätssynchronisierung
                    aufgebaut und die Datensicherung auf ein belastbares Niveau gebracht. Für die
                    tägliche Zusammenarbeit war dabei auch eine stabile{" "}
                    <Link
                      href="/solutions/microsoft-365-migration"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      Microsoft 365 Betreuung
                    </Link>{" "}
                    entscheidend.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Migration auf Windows Server 2019 und Virtualisierung mit Hyper-V",
                      "Aufbau von Entra ID (Azure AD) Connect zur Identitätssynchronisierung",
                      "Implementierung einer 3-2-1-Backup-Strategie mit Veeam",
                      "Integration von Microsoft-365-Diensten für die Zusammenarbeit",
                      "Härtung der Serverkonfiguration nach aktuellen Sicherheitsstandards",
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
                    <h4 className="font-bold text-black mb-2">Modernere Grundlage</h4>
                    <p className="text-sm text-gray-700">
                      Die Infrastruktur wurde auf einen aktuellen, besser beherrschbaren Stand gebracht.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Mehr Datensicherheit</h4>
                    <p className="text-sm text-gray-700">
                      Daten und Systeme wurden mit einer sauberen Backup-Strategie deutlich belastbarer abgesichert.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Umgebung, die technisch aktueller, sicherer und im Alltag
                  verlässlicher funktioniert. Gerade beim Thema Ausfallsicherheit zeigt sich, wie wichtig
                  eine saubere{" "}
                  <Link
                    href="/solutions/managed-backup"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Backup- und Disaster-Recovery-Betreuung
                  </Link>{" "}
                  ist, damit aus einem Problem nicht gleich ein Stillstand wird.
                </p>
              </section>

              <TechStack
                technologies={[
                  "Windows Server 2019",
                  "Hyper-V",
                  "Entra ID",
                  "Microsoft 365",
                  "Veeam",
                  "Backup Strategy",
                  "SBS 2011",
                  "Firewall",
                  "Migration",
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Ist Ihre Serverumgebung technisch überfällig?"
                description="Wenn bestehende Systeme noch laufen, aber Sicherheit, Backup und Anbindung an die Cloud nicht mehr sauber passen, schauen wir uns das gemeinsam an."
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