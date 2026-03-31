import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function ITComplianceSecurityCaseStudy() {
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
              Case Study: IT-Compliance & Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Umsetzung von IT-Compliance und Sicherheitsstandards
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie die Bellaseno GmbH durch strukturierte IT-Prozesse und Risikoanalysen die hohen regulatorischen Anforderungen der Medizintechnik erfüllt.
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
                Als Unternehmen in der Medizintechnik unterliegt die Bellaseno GmbH strengen regulatorischen Vorgaben (u.a. ISO 13485):
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Wachsende IT-Infrastruktur erforderte eine Professionalisierung der Verwaltung.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Bedarf an einer lückenlosen und audit-sicheren Dokumentation aller IT-Systeme.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Hohe Sensibilität der Forschungs- und Entwicklungsdaten.</span>
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
                  <span className="text-gray-700 text-lg">Komplexe Compliance-Vorgaben waren mit internen Ressourcen schwer abzubilden.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Risiko von negativen Audit-Feststellungen mit weitreichenden Konsequenzen.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Fehlende Transparenz und Standardisierung in den IT-Prozessen.</span>
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
                Es wurde ein ganzheitlicher Ansatz zur Stärkung der IT-Compliance gewählt:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Risikoanalyse:</strong> Durchführung einer detaillierten IT-Risikoanalyse nach Branchenstandards.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Sicherheitskontrollen:</strong> Implementierung technischer und organisatorischer Maßnahmen (TOMs).</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">ISMS-Framework:</strong> Aufbau eines schlanken Informationssicherheits-Managementsystems.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Awareness:</strong> Schulung der Mitarbeiter im sicheren Umgang mit Daten und Systemen.</span>
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
                  <div className="text-3xl font-bold text-black mb-1">Konform</div>
                  <div className="text-sm text-gray-700 font-medium">ISO-Standard</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Sicher</div>
                  <div className="text-sm text-gray-700 font-medium">Risiko-Minimierung</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Audit</div>
                  <div className="text-sm text-gray-700 font-medium">Bestanden</div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Erfolgreiche Audits ohne kritische Feststellungen im Bereich IT.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Zertifizierte und nachvollziehbare IT-Prozesse als Wettbewerbsvorteil.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Minimierte Sicherheitsrisiken durch proaktives Schwachstellenmanagement.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Gestärktes Vertrauen bei Investoren und Partnern durch gelebte Compliance.</span>
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
