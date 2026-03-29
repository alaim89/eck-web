import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              See how Ecksolution-IT has helped businesses across industries eliminate IT chaos, secure their data, and scale with confidence.
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
                  <h3 className="font-bold text-black">Mid-sized company (40–80 employees)</h3>
                  <p className="text-sm text-gray-700">Microsoft 365 Migration</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Migration to Microsoft 365 without downtime</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                How a mid-sized company transitioned from Google Workspace to a structured, secure Microsoft 365 environment with zero downtime.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 2 */}
            <Link href="/case-studies/azure-cloud-infrastructure" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Tech company (100–150 employees)</h3>
                  <p className="text-sm text-gray-700">Azure Cloud Infrastructure</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Stable and scalable IT with Microsoft Azure</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Solving IT complexity and scalability issues by migrating to a structured Microsoft Azure cloud architecture.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 3 */}
            <Link href="/case-studies/managed-it-operations" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">SME (30–60 employees)</h3>
                  <p className="text-sm text-gray-700">Managed IT Operations</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Reliable IT operations with full responsibility</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                How an SME without an internal IT department achieved stable and predictable IT operations through a managed service model.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 4 */}
            <Link href="/case-studies/security-compliance" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Regulated Company (50–100 employees)</h3>
                  <p className="text-sm text-gray-700">Security & Compliance</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Audit-ready IT through structured security</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Achieving audit-ready IT through a structured security and governance framework for regulatory compliance.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 5 */}
            <Link href="/case-studies/co-managed-it" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Software Agency (20–40 employees)</h3>
                  <p className="text-sm text-gray-700">Co-Managed IT</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Co-Managed IT for a Software Agency</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Empowering an internal team with expert support and enterprise tools to handle rapid growth and security.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 6 */}
            <Link href="/case-studies/managed-backup" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Law Firm (15–30 employees)</h3>
                  <p className="text-sm text-gray-700">Managed Backup</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Bulletproof Backup for a Law Firm</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ensuring business continuity with immutable backups and rapid recovery after a ransomware attack.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 7 */}
            <Link href="/case-studies/network-management" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Logistics Hub (50–100 employees)</h3>
                  <p className="text-sm text-gray-700">Network Management</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Network Optimization for a Logistics Hub</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Eliminating Wi-Fi dead zones and connection dropouts to improve warehouse efficiency and shipping accuracy.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 8 */}
            <Link href="/case-studies/hardware-lifecycle" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Design Agency (25–50 employees)</h3>
                  <p className="text-sm text-gray-700">Hardware Lifecycle</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Hardware Refresh for a Design Agency</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Implementing standardized high-performance workstations to eliminate software crashes and lost billable hours.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 9 */}
            <Link href="/case-studies/it-risk-audit" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Manufacturing Plant (80–120 employees)</h3>
                  <p className="text-sm text-gray-700">IT Risk Audit</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">IT Risk Audit for a Manufacturing Plant</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Uncovering hidden vulnerabilities and creating a remediation roadmap to ensure insurance compliance and security.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 10 */}
            <Link href="/case-studies/strategic-it-roadmap" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Non-profit (40–60 employees)</h3>
                  <p className="text-sm text-gray-700">Strategic IT Roadmap</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Strategic IT Roadmap for a Non-profit</h4>
              <p className="text-gray-700 leading-relaxed mb-8">
                Aligning technology with long-term goals to reduce reactive spending and launch new digital services.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
