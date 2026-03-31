import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function AzureCloudPlatformCaseStudy() {
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
              Case Study: Azure & Cloud Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Aufbau einer skalierbaren Cloud-Plattform auf Microsoft Azure
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie die group24 AG durch eine moderne Cloud-Architektur ihre Performance-Engpässe löste und eine hochverfügbare Infrastruktur schuf.
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
                Die group24 AG betrieb ihre Kernanwendungen auf einer klassischen On-Premise Infrastruktur:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Begrenzte physische Ressourcen in den eigenen Rechenzentren.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Hoher manueller Wartungsaufwand für Hardware und Virtualisierung.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Lange Bereitstellungszeiten für neue Server-Ressourcen.</span>
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
                  <span className="text-gray-700 text-lg">Performance-Engpässe bei Lastspitzen beeinträchtigten die Nutzererfahrung.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Unflexible Ressourcenbereitstellung verlangsamte die Softwareentwicklung.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span className="text-gray-700 text-lg">Hohe laufende Betriebskosten durch Überkapazitäten für Spitzenlasten.</span>
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
                In enger Zusammenarbeit wurde eine zukunftssichere Cloud-Plattform auf Basis von Microsoft Azure entwickelt:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Cloud-Architektur:</strong> Design einer modularen und skalierbaren Zielarchitektur.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Migration:</strong> Strukturierte Überführung der Workloads zu Azure.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Modernisierung:</strong> Einführung von Azure Kubernetes Service (AKS) für Container-Anwendungen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg"><strong className="text-black">Infrastructure as Code:</strong> Automatisierung der Infrastruktur-Bereitstellung mit Terraform.</span>
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
                  <div className="text-3xl font-bold text-black mb-1">Skalierbar</div>
                  <div className="text-sm text-gray-700 font-medium">Auto-Scaling</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Verfügbar</div>
                  <div className="text-sm text-gray-700 font-medium">99,9% Uptime</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Schnell</div>
                  <div className="text-sm text-gray-700 font-medium">Deployment</div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Hochverfügbare Plattform, die Lastspitzen automatisch abfängt.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Deutlich reduzierte Betriebskosten durch bedarfsgerechte Ressourcen-Nutzung.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Schnellere Time-to-Market für neue Software-Features durch automatisierte Pipelines.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Zukunftssichere Basis für weiteres internationales Wachstum der group24 AG.</span>
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
