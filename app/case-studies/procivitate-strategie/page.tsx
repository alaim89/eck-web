import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Activity, AlertTriangle, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: Procivitate gGmbH - IT-Strategie & M365",
  description: "Aufbau und Absicherung einer Microsoft-365-Umgebung mit klarer IT-Strategie für die Procivitate gGmbH.",
  canonical: "/case-studies/procivitate-strategie",
});

export default function CaseStudyProcivitate() {
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
              <span className="text-gray-700 font-medium">Procivitate gGmbH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Aufbau und Absicherung einer Microsoft-365-Umgebung mit klarer IT-Strategie
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Das Unternehmen benötigte eine moderne IT-Infrastruktur auf Basis von Microsoft 365, um die Zusammenarbeit zu verbessern und gleichzeitig hohe Sicherheitsstandards zu erfüllen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Problem
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Fehlende IT-Leitung und strategische Ausrichtung.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Sicherheitsrisiken durch unzureichend konfigurierte Cloud-Dienste.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Komplexität bei der Verwaltung von Benutzerrechten und Daten.
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
                      "Steuerung von Microsoft-365-Projekten als externe IT-Leitung",
                      "Kontinuierliche Sicherheitsbewertungen und Härtung der Umgebung",
                      "Strategische Beratung der Geschäftsleitung zu IT-Investitionen",
                      "Implementierung von Compliance-Richtlinien für den Datenschutz",
                      "Aufbau eines effizienten IT-Supports für die Mitarbeiter"
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
                    <h4 className="font-bold text-black mb-2">Strategie</h4>
                    <p className="text-sm text-gray-700">Klare IT-Roadmap und fundierte Entscheidungen auf Management-Ebene.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Sicherheit</h4>
                    <p className="text-sm text-gray-700">Abgesicherte Cloud-Umgebung nach aktuellen Standards.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">IT-Strategie benötigt?</h3>
                <p className="text-gray-400 mb-6">
                  Wir unterstützen Sie als externe IT-Leitung bei der strategischen Planung und operativen Umsetzung Ihrer IT-Projekte.
                </p>
                <Link href="/kontakt" className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/90 transition-colors">
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
