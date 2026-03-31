import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck, Database, Users } from "lucide-react";
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
            {/* Case Study 1 */}
            <Link href="/case-studies/microsoft-365-migration" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Mittelständisches Unternehmen</h3>
                  <p className="text-sm text-gray-700">Microsoft 365 Migration</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Migration von Google Workspace zu Microsoft 365 mit strukturierter Absicherung</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration aller Benutzer, Mails und Daten nach Microsoft 365 inklusive Entra ID, MFA und Backup-Strategie.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 2 */}
            <Link href="/case-studies/azure-cloud-platform" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">group24 AG</h3>
                  <p className="text-sm text-gray-700">Azure Cloud Plattform</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Aufbau einer skalierbaren Azure-Infrastruktur und Betrieb moderner Cloud-Systeme</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration von Backend-Systemen in Microsoft Azure, Automatisierung und Integration von Azure Virtual Desktop für maximale Flexibilität.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 3 */}
            <Link href="/case-studies/it-compliance-security" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Bellaseno GmbH</h3>
                  <p className="text-sm text-gray-700">IT-Compliance & Security</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">IT-Sicherheitsanalyse und Aufbau einer strukturierten Sicherheitsorganisation</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Durchführung einer GAP-Analyse, Identifikation kritischer Schwachstellen und Entwicklung eines nachhaltigen Maßnahmenkatalogs.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 4 */}
            <Link href="/case-studies/backup-infrastruktur-modernisierung" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">BiolytiQs + MAIT</h3>
                  <p className="text-sm text-gray-700">Backup & Infrastruktur Modernisierung</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Modernisierung einer Serverumgebung und Einführung einer zuverlässigen Backup-Strategie</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Migration auf Windows Server 2019, Integration mit Microsoft 365 und Aufbau einer robusten Veeam-Backup-Lösung.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 5 */}
            <Link href="/case-studies/co-managed-betrieb" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">zunicode + Procivitate</h3>
                  <p className="text-sm text-gray-700">Co-Managed IT & Betrieb</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Co-Managed IT: Gemeinsamer Betrieb der IT-Infrastruktur</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Entlastung interner IT-Teams durch 24/7 Monitoring, Patch-Management und Second-Level Support für maximale Sicherheit.
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
