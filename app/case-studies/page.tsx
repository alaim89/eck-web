import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck, Database, Users, Mail } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Erfolgsgeschichten unserer Kunden
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Erfahren Sie, wie Ecksolution-IT Unternehmen dabei geholfen hat, IT-Chaos zu beseitigen, Daten zu sichern und mit Vertrauen zu skalieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1: Bellaseno */}
            <Link href="/case-studies/bellaseno-security" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Bellaseno GmbH</h3>
                  <p className="text-sm text-gray-700">Security / Compliance</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Analyse und Aufbau einer strukturierten IT-Sicherheitsstrategie</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Durchführung einer GAP-Analyse, Identifikation kritischer Schwachstellen und Aufbau einer nachhaltigen Sicherheitsorganisation.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 2: group24 */}
            <Link href="/case-studies/group24-azure" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">group24 AG</h3>
                  <p className="text-sm text-gray-700">Azure / Cloud</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Migration in Microsoft Azure und Aufbau einer skalierbaren Cloud-Infrastruktur</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration bestehender Backend-Systeme in Microsoft Azure, Automatisierung und Integration von Azure Virtual Desktop.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 3: zunicode */}
            <Link href="/case-studies/zunicode-automatisierung" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">zunicode GmbH</h3>
                  <p className="text-sm text-gray-700">Betrieb / Automatisierung</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Stabilisierung und Automatisierung hybrider IT-Infrastrukturen</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Unterstützung im Support, Automatisierung mit Ansible & PowerShell sowie Strukturierung von Supportprozessen.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 4: Schadhauser */}
            <Link href="/case-studies/schadhauser-m365" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Schilderdienst Schadhauser</h3>
                  <p className="text-sm text-gray-700">Migration / M365</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Migration von Google Workspace zu Microsoft 365 mit strukturierter Absicherung</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Zentrale Kontrolle und Sicherheitsoptimierung durch Migration zu Microsoft 365 inklusive Backup-Strategie.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 5: Procivitate */}
            <Link href="/case-studies/procivitate-strategie" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Procivitate gGmbH</h3>
                  <p className="text-sm text-gray-700">IT-Leitung / Strategie</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Aufbau und Absicherung einer Microsoft-365-Umgebung mit klarer IT-Strategie</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Steuerung von M365-Projekten, kontinuierliche Sicherheitsbewertungen und strategische Beratung der Geschäftsleitung.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 6: BiolytiQs */}
            <Link href="/case-studies/biolytiqs-server" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">BiolytiQs GmbH</h3>
                  <p className="text-sm text-gray-700">Server + M365</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Modernisierung einer Serverumgebung und Integration in Microsoft 365</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration auf Windows Server 2019, Aufbau von Entra ID und Implementierung einer zuverlässigen Backup-Lösung.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 7: InCase */}
            <Link href="/case-studies/incase-modernisierung" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">InCase Handelsgesellschaft mbH</h3>
                  <p className="text-sm text-gray-700">M365 + Geräte</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Modernisierung der E-Mail-Infrastruktur und Einführung mobiler Geräteverwaltung</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration zu Exchange Online und Einführung von Microsoft Intune zur zentralen Verwaltung mobiler Endgeräte.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 8: MAIT */}
            <Link href="/case-studies/mait-enterprise" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">MAIT Germany GmbH</h3>
                  <p className="text-sm text-gray-700">Enterprise Projekte</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Integration hybrider IT-Infrastrukturen und Optimierung von Betriebsprozessen</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Planung und Umsetzung komplexer M365-Migrationen sowie Integration von On-Prem- und Cloud-Systemen.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
