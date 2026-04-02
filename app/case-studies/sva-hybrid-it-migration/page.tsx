import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Database, AlertTriangle, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Case Study: Hybrid IT & Migration",
  description: "Strukturierung einer hybriden IT-Landschaft inklusive Migration und Absicherung des laufenden Betriebs.",
  canonical: "/case-studies/hybrid-it-migration",
});

export default function CaseStudyHybridIT() {
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
                <Database className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">System Vertrieb Alexander GmbH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Hybride IT-Landschaft strukturieren und Migrationen kontrolliert umsetzen
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Ausgangssituation
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die IT-Landschaft war über Jahre gewachsen. On-Premises- und Cloud-Systeme liefen parallel, ohne klare Struktur und mit hohem Abstimmungsaufwand im Betrieb.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Herausforderung
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Unterschiedliche Systeme und Plattformen ohne klare Linie.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Migrationen mussten im laufenden Betrieb sauber umgesetzt werden.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-red-500 font-bold">•</span>
                    Sicherheit, Verfügbarkeit und Performance mussten gleichzeitig gewährleistet bleiben.
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
                      "Planung und Umsetzung von Migrationen für Exchange, File Services und Active Directory",
                      "Betrieb und Optimierung von Virtualisierungs- und Backup-Plattformen",
                      "Integration von Middleware- und Datenbanksystemen in produktive Umgebungen",
                      "Umsetzung von Sicherheits- und Härtungsmaßnahmen nach BSI IT-Grundschutz",
                      "Automatisierung betrieblicher Abläufe und Strukturierung der Betriebsprozesse"
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
                    <h4 className="font-bold text-black mb-2">Mehr Struktur</h4>
                    <p className="text-sm text-gray-700">Die hybride IT wurde übersichtlicher und besser beherrschbar.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="font-bold text-black mb-2">Stabiler Betrieb</h4>
                    <p className="text-sm text-gray-700">Migrationen konnten kontrolliert umgesetzt werden, ohne den Alltag unnötig zu stören.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Technologien</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  RHEL, SUSE, Ubuntu, Windows Server, Proxmox VE, KVM, Proxmox Backup Server, Isilon, Exchange, Active Directory, MySQL, RabbitMQ, Apache, Nginx, WildFly, JBoss, Tomcat, Fortinet
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">Migration geplant?</h3>
                <p className="text-gray-400 mb-6">
                  Wir helfen dabei, gewachsene IT-Landschaften sauber zu strukturieren und Migrationen sicher umzusetzen.
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