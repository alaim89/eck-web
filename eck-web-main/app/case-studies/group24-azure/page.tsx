import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Activity,
  AlertTriangle,
  Settings,
  TrendingUp
} from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: group24 AG - Azure Cloud Migration stabil umgesetzt",
  description:
    "Wie eine gewachsene On-Premise-Umgebung in eine skalierbare Azure-Plattform überführt wurde - mit sauberer Migration, mehr Stabilität und weniger Betriebsaufwand.",
  canonical: "/case-studies/group24-azure",
});

export default function CaseStudyGroup24() {
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
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">group24 AG</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Cloud-Migration sauber umgesetzt, von gewachsener On-Premise-IT zu einer stabilen Azure-Umgebung
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Die bestehende Infrastruktur war an einem Punkt, an dem neue Anforderungen nur noch mit
              mehr Aufwand und wachsender Komplexität umgesetzt werden konnten. Ziel war eine Plattform,
              die im Alltag stabil läuft und mit dem Unternehmen mitwachsen kann.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
              Umsetzung im Rahmen eines Kundenprojekts. Mit Fokus auf Migration, Plattformbetrieb und Stabilisierung der Azure-Umgebung.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">

              {/* AUSGANGSSITUATION */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die Backend-Systeme liefen in einer klassischen On-Premise-Umgebung. Das funktionierte,
                  aber nur noch mit zunehmendem Aufwand. Neue Anforderungen ließen sich schwer abbilden,
                  die Infrastruktur war in ihrer Skalierung begrenzt und der Betrieb wurde immer aufwendiger.
                </p>
              </section>

              {/* PROBLEM */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>

                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Die bestehende Hardware ließ sich nur eingeschränkt skalieren und wurde zum Bremsfaktor.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Wartung, Updates und Betrieb erzeugten laufend administrativen Aufwand.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Für mobiles Arbeiten und sichere Remote-Zugriffe fehlte die nötige Flexibilität.
                  </li>
                </ul>
              </section>

              {/* UMSETZUNG */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" /> Umsetzung
                </h2>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">

                  <p className="text-gray-700 leading-relaxed">
                    Die Umsetzung erfolgte im Rahmen eines Kundenprojekts, in dem gezielt operative
                    Unterstützung für Migration, Plattformbetrieb und Weiterentwicklung benötigt wurde.
                    Ziel war es, die bestehende Umgebung nicht nur technisch zu migrieren, sondern so
                    aufzubauen, dass sie im Alltag stabil läuft und beherrschbar bleibt.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Gerade bei gewachsenen Strukturen zeigt sich schnell, dass eine Migration allein
                    nicht reicht. Entscheidend ist, dass Architektur, Betrieb und Sicherheit sauber
                    zusammenspielen. Genau hier liegt der Unterschied einer funktionierenden{" "}
                    <Link
                      href="/solutions/azure-hybrid-betreuung"
                      className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      Azure Hybrid Betreuung
                    </Link>.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Migration bestehender Backend-Systeme in Microsoft Azure",
                      "Aufbau und Betrieb von Azure Virtual Desktop (AVD)",
                      "Automatisierung von Bereitstellungs- und Betriebsprozessen",
                      "Integration von Sicherheitsmechanismen in der Cloud-Umgebung",
                      "Unterstützung im Plattformbetrieb und Weiterentwicklung"
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
                    <h4 className="font-bold text-black mb-2">Mehr Skalierbarkeit</h4>
                    <p className="text-sm text-gray-700">
                      Ressourcen können flexibel an neue Anforderungen angepasst werden.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Weniger Betriebsaufwand</h4>
                    <p className="text-sm text-gray-700">
                      Wartung und Betrieb wurden deutlich entlastet.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  Das Ergebnis ist eine Infrastruktur, die stabil läuft, mit dem Unternehmen mitwachsen kann
                  und eine moderne Arbeitsweise ermöglicht. Genau hier zeigt sich, wie wichtig eine saubere{" "}
                  <Link
                    href="/solutions/hybrid-it-infrastruktur"
                    className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                  >
                    Betreuung hybrider IT-Infrastrukturen
                  </Link>{" "}
                  im laufenden Betrieb ist.
                </p>
              </section>

              <TechStack
                technologies={[
                  "Microsoft Azure",
                  "Azure Virtual Desktop",
                  "Azure Linux",
                  "Cloud Migration",
                  "Automation",
                  "Security",
                  "SQL Migration",
                  "Entra ID"
                ]}
              />
            </div>

            {/* CTA */}
            <div className="space-y-8">
              <CTASection
                variant="card"
                title="Steckt Ihre Cloud-Migration fest?"
                description="Wenn Systeme wachsen sollen, die Struktur aber nicht mitkommt, schauen wir uns das gemeinsam an."
                buttonText="Kurz zur Situation austauschen"
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