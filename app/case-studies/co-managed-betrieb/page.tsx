import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function CoManagedBetriebCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Zurück zu den Case Studies
          </Link>
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6">
              Case Study: Co-Managed IT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Co-Managed IT: Gemeinsamer Betrieb der IT-Infrastruktur
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie zunicode und Procivitate durch ein Co-Managed Modell ihre interne IT entlasteten und die Systemverfügbarkeit steigerten.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Ausgangssituation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">1</span>
                Ausgangssituation
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Beide Unternehmen verfügten bereits über interne IT-Ressourcen, standen jedoch vor spezifischen Herausforderungen:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Bestehende IT-Abteilung vorhanden, aber durch das Tagesgeschäft überlastet.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Bedarf an spezialisiertem Know-how für komplexe Infrastruktur-Projekte.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Wunsch nach einem lückenlosen 24/7 Monitoring der kritischen Systeme.</span>
                </li>
              </ul>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">2</span>
                Problem
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Allgemeiner Fachkräftemangel erschwerte die Erweiterung des internen Teams.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Verzögerungen bei wichtigen IT-Projekten durch fehlende Kapazitäten.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Risiko von unbemerkten Ausfallzeiten außerhalb der Kernarbeitszeiten.</span>
                </li>
              </ul>
            </section>

            {/* 3. Umsetzung */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">3</span>
                Umsetzung
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Es wurde ein partnerschaftliches Co-Managed IT-Modell etabliert:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">SLA-Definition:</strong> Klare Abgrenzung der Verantwortlichkeiten zwischen internem Team und Ecksolution-IT.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Prozess-Integration:</strong> Nahtlose Einbindung in die bestehenden Ticket- und Kommunikationsstrukturen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Betrieb:</strong> Übernahme des proaktiven 24/7 Monitorings und Patch-Managements.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Support:</strong> Bereitstellung von Second-Level Support für komplexe Fragestellungen.</span>
                </li>
              </ul>
            </section>

            {/* 4. Ergebnis */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">4</span>
                Ergebnis
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Entlastet</div>
                  <div className="text-sm text-gray-700 font-medium">Internes Team</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Stabil</div>
                  <div className="text-sm text-gray-700 font-medium">24/7 Monitoring</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Schnell</div>
                  <div className="text-sm text-gray-700 font-medium">Projekt-Umsetzung</div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Spürbare Entlastung des internen Teams von Routineaufgaben.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Höhere Systemverfügbarkeit durch proaktive Überwachung rund um die Uhr.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Direkter Zugriff auf Expertenwissen für strategische IT-Entscheidungen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Schnellere Umsetzung von IT-Projekten durch zusätzliche Kapazitäten.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
