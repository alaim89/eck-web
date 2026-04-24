import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Users,
  AlertTriangle,
  Settings,
  TrendingUp,
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: zunicode GmbH - Hybride IT stabilisiert und Prozesse automatisiert",
  description:
    "Wie eine gewachsene hybride IT-Umgebung stabilisiert, manuelle Abläufe reduziert und der Betrieb durch Automatisierung deutlich entlastet wurde.",
  canonical: "/case-studies/zunicode-automatisierung",
});

export default function CaseStudyZunicode() {
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
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">zunicode GmbH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Hybride IT stabilisiert, weniger manuelle Arbeit, mehr Ruhe im Betrieb
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Umgebung war hybrid aufgebaut und im Alltag zunehmend aufwendig.
              Viele Aufgaben liefen manuell, Supportprozesse waren nicht sauber strukturiert und
              das Tagesgeschäft band zu viele Ressourcen. Ziel war eine Umgebung, die im Betrieb
              ruhiger läuft und durch klare{" "}
              <Link
                href="/solutions/hybrid-it-infrastruktur"
                className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                IT-Infrastruktur-Betreuung
              </Link>
              {" "}und Automatisierung spürbar entlastet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen betrieb eine hybride IT-Umgebung mit stetig wachsender Komplexität.
                  Der Supportaufwand stieg, viele Routineaufgaben wurden manuell erledigt und interne
                  Ressourcen waren stark durch das Tagesgeschäft gebunden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>

                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Wiederkehrende Aufgaben erzeugten zu viel manuellen Aufwand.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Supportprozesse waren nicht sauber strukturiert und machten den Betrieb unnötig schwer.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Das Tagesgeschäft band interne Ressourcen so stark, dass kaum Luft für Verbesserungen blieb.
                  </li>
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Wenn Routineaufgaben den Betrieb dominieren und Verbesserungen immer wieder liegen bleiben,
                  braucht es oft einen{" "}
                  <Link
                    href="/solutions/externer-it-verantwortlicher"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    klaren IT-Verantwortlichen
                  </Link>
                  , der Prozesse ordnet und operative Entlastung schafft.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Die Umsetzung erfolgte im Rahmen eines Kundenprojekts, in dem gezielt Unterstützung
                    benötigt wurde, um das interne Team im Betrieb zu entlasten und die bestehende
                    Umgebung besser strukturierbar zu machen. Der Fokus lag darauf, manuelle Abläufe
                    zu reduzieren, Supportprozesse klarer aufzusetzen und den Alltag für das Team
                    spürbar ruhiger zu machen.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Gerade in solchen Umgebungen reicht Technik allein nicht. Erst wenn Prozesse,
                    Automatisierung und Zuständigkeiten sauber zusammenpassen, entsteht ein stabilerer
                    Betrieb. Genau dort hilft eine strukturierte{" "}
                    <Link
                      href="/solutions/it-sicherheit"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      IT-Sicherheitsbetreuung
                    </Link>
                    {" "}und eine klare Betriebslogik.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Unterstützung im Support und Entlastung des internen Teams",
                      "Automatisierung wiederkehrender Abläufe mit Ansible und PowerShell",
                      "Strukturierung und Optimierung von Supportprozessen",
                      "Einführung von Mattermost Playbooks zur saubereren Steuerung wiederkehrender Abläufe",
                      "Durchführung eines Workshops zur Nutzung von Mattermost Playbooks im Team",
                      "Dokumentation der IT-Umgebung und Wissenstransfer",
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
                    <h4 className="font-bold text-black mb-2">Weniger manuelle Arbeit</h4>
                    <p className="text-sm text-gray-700">
                      Wiederkehrende Aufgaben konnten reduziert und effizienter abgewickelt werden.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Stabilerer Betrieb</h4>
                    <p className="text-sm text-gray-700">
                      Strukturiertere Prozesse sorgten für mehr Ruhe und bessere Steuerbarkeit im Alltag.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Umgebung, in der Routineaufgaben nicht mehr den ganzen Betrieb
                  dominieren und das interne Team wieder mehr Luft für wichtige Themen hat. Genau dort
                  zeigt sich, wie wertvoll eine saubere{" "}
                  <Link
                    href="/solutions/hybrid-it-infrastruktur"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Betreuung hybrider IT-Infrastrukturen
                  </Link>
                  {" "}ist, die nicht nur reagiert, sondern den Alltag spürbar entlastet.
                </p>
              </section>

              <TechStack
                technologies={[
                  "IT-Automatisierung",
                  "Ansible",
                  "PowerShell",
                  "Hybrid IT",
                  "Mattermost",
                  "Mattermost Playbooks",
                  "Docker",
                ]}
              />
            </div>

            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Frisst der IT-Betrieb zu viel Zeit?"
                description="Wenn zu viel manuell läuft und das Tagesgeschäft keine Luft für Verbesserungen lässt, schauen wir uns das gemeinsam an."
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