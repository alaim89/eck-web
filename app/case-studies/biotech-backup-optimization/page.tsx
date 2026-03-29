import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function BiotechCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Case Study: Biotech Research
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Biotech Lab Eliminates Data Risk with 15-Minute Backups.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              How a 60-researcher lab protected irreplaceable clinical trial data and removed daily operational bottlenecks.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Situation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">1</span>
                The Situation
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A biotech research lab with 60 researchers was processing and analyzing massive genomic datasets daily. Their work involved years of clinical trials, generating terabytes of highly sensitive and irreplaceable data.
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">2</span>
                The Problem
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Their legacy backup system was taking 48 hours to complete a single cycle. This bottlenecked daily research activities, slowing down the network and leaving the lab vulnerable to massive data loss if a failure occurred between the long backup windows.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Researchers frequently complained about system sluggishness during the backup process, which impacted their ability to run complex data models.
              </p>
            </section>

            {/* 3. Decision Point */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">3</span>
                The Decision Point
              </h2>
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-900 leading-relaxed text-lg font-medium">
                  A corrupted local server nearly wiped out 6 months of irreplaceable clinical trial data. The near-miss highlighted the catastrophic risk of their inadequate backup strategy, prompting the lead researchers to demand an immediate IT overhaul.
                </p>
              </div>
            </section>

            {/* 4. Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">4</span>
                The Solution
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Ecksolution-IT implemented a hybrid-cloud storage architecture designed specifically for large datasets.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Hybrid Storage:</strong> Deployed local flash-storage appliances for rapid, on-site access to active research data.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Hourly Snapshots:</strong> Configured automated, immutable hourly snapshots that do not impact network performance.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Cloud Replication:</strong> Ensured all snapshots are securely replicated to an offsite cloud environment for disaster recovery.</span>
                </li>
              </ul>
            </section>

            {/* 5. Result */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">5</span>
                The Result
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">15m</div>
                  <div className="text-sm text-gray-500 font-medium">Backup Time</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Zero</div>
                  <div className="text-sm text-gray-500 font-medium">Data Loss</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Data Integrity</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Backup times were reduced from 48 hours to just 15 minutes. The network bottlenecks were eliminated, allowing researchers to work without interruption, and the lab now has guaranteed zero data loss.
              </p>
            </section>

            {/* 6. Stability / Long-term outcome */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">6</span>
                Long-Term Stability
              </h2>
              <div className="p-8 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
                <p className="leading-relaxed text-lg font-medium text-white/90">
                  The lab can now scale their genomic sequencing operations without fear of outgrowing their storage or backup capabilities. The immutable snapshots also provide robust protection against ransomware, ensuring their life-saving research is always secure.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
