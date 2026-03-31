import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function BackupInfrastrukturModernisierungCaseStudy() {
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
              Case Study: Backup & Infrastruktur
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Modernisierung der Backup-Strategie und IT-Infrastruktur
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie BiolytiQs in Zusammenarbeit mit MAIT ihre Datensicherheit maximierte und eine skalierbare Server-Landschaft schuf.
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
                Die bestehende IT-Infrastruktur von BiolytiQs stieß an ihre technischen Grenzen:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Veraltete Server-Hardware mit steigender Ausfallwahrscheinlichkeit.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Unzuverlässige und langsame Backup-Prozesse auf Basis alter Technologien.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Hohes Risiko von Datenverlust bei Hardware-Defekten oder Cyber-Angriffen.</span>
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
                  <span className="text-gray-700 text-lg">Lange Wiederherstellungszeiten (RTO) gefährdeten die Business Continuity.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Unklare Verantwortlichkeiten und fehlende Überwachung der Backups.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Mangelnde Skalierbarkeit der Speicherlösungen für wachsende Datenmengen.</span>
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
                In einem gemeinsamen Projekt wurde die gesamte Infrastruktur auf ein neues Level gehoben:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Hardware-Refresh:</strong> Erneuerung der Server- und Storage-Komponenten durch moderne Systeme.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Backup-Lösung:</strong> Implementierung einer hybriden Backup-Strategie mit Veeam.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Automatisierung:</strong> Einrichtung automatisierter Sicherungsläufe und Validierungen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Monitoring:</strong> Aufbau eines zentralen Monitorings für die gesamte Infrastruktur.</span>
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
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Sicher</div>
                  <div className="text-sm text-gray-700 font-medium">Veeam Backup</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Schnell</div>
                  <div className="text-sm text-gray-700 font-medium">RTO minimiert</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Skalierbar</div>
                  <div className="text-sm text-gray-700 font-medium">Storage</div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Maximale Datensicherheit durch mehrstufige Backup-Konzepte.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Drastisch verkürzte Wiederherstellungszeiten im Ernstfall.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Skalierbare Infrastruktur, die problemlos mit dem Datenwachstum mithält.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Signifikante Entlastung der internen IT-Abteilung durch Automatisierung.</span>
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
