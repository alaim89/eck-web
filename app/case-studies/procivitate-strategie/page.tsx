import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Activity,
  AlertTriangle,
  Settings,
  TrendingUp,
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: Procivitate gGmbH, Microsoft 365 sauber aufgebaut und abgesichert",
  description:
    "Wie eine Microsoft-365-Umgebung mit klarer Führung, sauberer Struktur und höherer Sicherheit aufgebaut und weiterentwickelt wurde.",
  canonical: "/case-studies/procivitate-strategie",
});

export default function CaseStudyProcivitate() {
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
              <span className="text-gray-700 font-medium">Procivitate gGmbH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Microsoft 365 sauber aufgebaut - mit klarer Führung, mehr Sicherheit und weniger Unklarheit im Alltag
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die Umgebung sollte moderner werden, die Zusammenarbeit einfacher und die Sicherheit
              sauber aufgestellt. Das eigentliche Problem war aber nicht nur die Technik, sondern
              fehlende Führung bei Entscheidungen, Struktur und Weiterentwicklung. Gerade in so einer
              Situation braucht es nicht nur Tools, sondern eine klare{" "}
              <Link
                href="/solutions/microsoft-365-migration"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Microsoft 365 Betreuung
              </Link>
              , die den Alltag wirklich entlastet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Es wurde eine moderne Microsoft-365-Umgebung benötigt, die Zusammenarbeit,
                  Verwaltung und Sicherheit sauber zusammenbringt. Gleichzeitig fehlte intern eine
                  klare IT-Führung, um Entscheidungen strukturiert zu treffen und die Umgebung
                  nachhaltig aufzubauen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Es fehlte eine klare IT-Leitung, die technische Entscheidungen einordnet und sauber priorisiert.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Cloud-Dienste waren nicht durchgängig so konfiguriert, dass Sicherheit und Alltag sauber zusammenpassen.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Benutzerrechte, Daten und Richtlinien wurden zunehmend komplex und schwer überschaubar.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Wenn intern niemand technische Entscheidungen sauber priorisiert, braucht es oft einen{" "}
                  <Link
                    href="/solutions/externer-it-verantwortlicher"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    externen IT-Verantwortlichen
                  </Link>
                  , der Struktur reinbringt und Verantwortung übernimmt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Microsoft-365-Umgebung wurde nicht nur technisch aufgebaut, sondern mit klarer
                    Führung und nachvollziehbaren Entscheidungen strukturiert weiterentwickelt. So
                    konnten Sicherheit, Verwaltung und tägliche Nutzung sauber zusammengeführt werden.
                    Gerade in solchen Situationen ist eine saubere{" "}
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
                      "Steuerung von Microsoft-365-Projekten als externe IT-Leitung",
                      "Kontinuierliche Sicherheitsbewertungen und gezielte Härtung der Umgebung",
                      "Strategische Beratung der Geschäftsleitung bei IT-Entscheidungen und Investitionen",
                      "Umsetzung von Compliance-Richtlinien für Datenschutz und sichere Zusammenarbeit",
                      "Aufbau eines praxistauglichen IT-Supports für die Mitarbeiter",
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
                    <h4 className="font-bold text-black mb-2">Mehr Klarheit</h4>
                    <p className="text-sm text-gray-700">
                      Entscheidungen konnten fundierter getroffen werden, weil die IT strukturiert geführt wurde.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Mehr Sicherheit</h4>
                    <p className="text-sm text-gray-700">
                      Die Microsoft-365-Umgebung wurde sauber abgesichert und an aktuelle Anforderungen angepasst.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Umgebung, die im Alltag besser funktioniert, sicherer aufgebaut
                  ist und nicht mehr von Einzelentscheidungen oder Improvisation abhängt. Wenn dabei
                  vor allem Sicherheit, Richtlinien und saubere Konfigurationen Thema sind, hilft eine
                  klare{" "}
                  <Link
                    href="/solutions/it-sicherheit"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    IT-Sicherheitsbetreuung
                  </Link>
                  .
                </p>
              </section>

              <TechStack
                technologies={[
                  "Microsoft 365",
                  "IT-Strategie",
                  "Externe IT-Leitung",
                  "Compliance",
                  "Security",
                  "Cloud Security",
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Fehlt bei Ihnen die klare IT-Führung?"
                description="Wenn Entscheidungen liegen bleiben, Microsoft 365 gewachsen ist und niemand das Ganze sauber steuert, schauen wir uns das gemeinsam an."
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