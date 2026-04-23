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
  title: "Case Study: Greenpocket - Infrastruktur für Wachstum stabil aufgebaut",
  description:
    "Wie eine wachsende IT-Infrastruktur strukturiert aufgebaut, stabil betrieben und mit Backup und Recovery sauber abgesichert wurde.",
  canonical: "/case-studies/startup-infrastruktur-backup",
});

export default function CaseStudyStartupInfrastructure() {
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

          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">Greenpocket</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Infrastruktur für Wachstum aufgebaut, ohne später zum Problem zu werden
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die IT sollte mit dem Unternehmen mitwachsen, ohne im Alltag immer komplexer zu werden.
              Dafür brauchte es nicht nur einzelne Systeme, sondern eine saubere{" "}
              <Link
                href="/solutions/hybrid-it-infrastruktur"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Struktur in der IT-Infrastruktur
              </Link>
              , die Betrieb, Deployment und Absicherung zusammenführt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">

              {/* AUSGANGSSITUATION */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die IT war auf Wachstum ausgelegt, aber noch nicht durchgängig strukturiert.
                  Deployment, Betrieb und Absicherung mussten so aufgebaut werden, dass sie im Alltag
                  funktionieren und nicht bei jedem Schritt neue Komplexität erzeugen.
                </p>
              </section>

              {/* PROBLEM */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Herausforderung
                </h2>

                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Betrieb und Deployment waren nicht sauber strukturiert und erzeugten Reibung.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Backup und Recovery mussten verlässlich und alltagstauglich umgesetzt werden.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Die Infrastruktur sollte wachsen können, ohne später selbst zum Problem zu werden.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Gerade wenn Wachstum schneller ist als die Struktur dahinter, entstehen Risiken im
                  Betrieb. In solchen Situationen ist eine klare{" "}
                  <Link
                    href="/backup-disaster-recovery"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Backup- und Recovery-Strategie
                  </Link>{" "}
                  entscheidend.
                </p>
              </section>

              {/* UMSETZUNG (WICHTIG – OWNERSHIP) */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">

                  <p className="text-gray-700 leading-relaxed">
                    Die Infrastruktur wurde im laufenden Betrieb aufgebaut und weiterentwickelt,
                    mit dem Ziel, eine stabile Grundlage für Wachstum zu schaffen. Dabei lag der Fokus
                    darauf, Betrieb, Deployment und Absicherung so zu strukturieren, dass sie im Alltag
                    funktionieren und nicht bei jedem Schritt neue Komplexität erzeugen.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Gerade in wachsenden Umgebungen zeigt sich schnell, dass fehlende Struktur später
                    zum Problem wird. Deshalb wurde die Umgebung von Anfang an so aufgebaut, dass
                    Betrieb, Skalierung und Sicherheit sauber zusammenspielen - inklusive klarer{" "}
                    <Link
                      href="/it-sicherheitsbetreuung"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      IT-Sicherheitsbetreuung
                    </Link>.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Aufbau und Betrieb von Linux- und Windows-Systemlandschaften",
                      "Strukturierung von Deployment- und Automatisierungsprozessen",
                      "Einführung von DevOps- und Collaboration-Plattformen",
                      "Umsetzung von Backup- und Recovery-Lösungen mit Veeam und Bacula",
                      "Infrastrukturdesign und Integration in bestehende Systeme",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ERGEBNIS */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-6 h-6" /> Ergebnis
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Skalierbare Basis</h4>
                    <p className="text-sm text-gray-700">
                      Die Infrastruktur wächst mit, ohne jedes Mal neue Probleme zu erzeugen.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Stabiler Betrieb</h4>
                    <p className="text-sm text-gray-700">
                      Backup, Recovery und Betrieb funktionieren zuverlässig im Alltag.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Infrastruktur, die nicht nur technisch funktioniert,
                  sondern im Alltag ruhig läuft. Genau dort zeigt sich, wie wichtig eine saubere{" "}
                  <Link
                    href="/it-infrastruktur-betreuung"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Infrastruktur-Betreuung
                  </Link>{" "}
                  ist.
                </p>
              </section>

              <TechStack
                technologies={[
                  "Linux",
                  "Windows Server",
                  "GitLab",
                  "Jira",
                  "Confluence",
                  "Mattermost",
                  "Active Directory",
                  "DNS",
                  "DHCP",
                  "pfSense",
                  "Veeam",
                  "Bacula",
                ]}
              />
            </div>

            {/* CTA */}
            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Wächst Ihre IT sauber mit oder wird sie langsam zum Problem?"
                description="Wenn Betrieb, Deployment und Absicherung nicht sauber zusammenspielen, schauen wir uns das gemeinsam an."
                buttonText="Situation kurz einordnen"
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