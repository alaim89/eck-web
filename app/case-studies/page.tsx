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
            <p className="text-xl text-gray-500 leading-relaxed">
              See how Ecksolution-IT has helped businesses across industries eliminate IT chaos, secure their data, and scale with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link href="/case-studies/commercial-real-estate-security" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Commercial Real Estate</h3>
                  <p className="text-sm text-gray-500">200 Agents</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Real Estate Firm Secures Mobile Workforce & Accelerates Deals.</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                How a 200-agent agency eliminated data breach risks and empowered their remote workforce with secure, anywhere access.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 2 */}
            <Link href="/case-studies/financial-services-it-migration" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Financial Services Firm</h3>
                  <p className="text-sm text-gray-500">85 Employees</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Financial Firm Secures 100% Uptime & SEC Compliance.</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                How an 85-employee trading firm eliminated system freezes and protected client portfolios with a high-performance cloud migration.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Case Study 3 */}
            <Link href="/case-studies/biotech-backup-optimization" className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Biotech Research Lab</h3>
                  <p className="text-sm text-gray-500">60 Researchers</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Biotech Lab Eliminates Data Risk with 15-Minute Backups.</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                How a 60-researcher lab protected irreplaceable clinical trial data and removed daily operational bottlenecks.
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
