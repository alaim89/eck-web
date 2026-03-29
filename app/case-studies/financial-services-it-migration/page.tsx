import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function FinancialServicesCaseStudy() {
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
              Case Study: Financial Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Financial Firm Secures 100% Uptime & SEC Compliance.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              How an 85-employee trading firm eliminated system freezes and protected client portfolios with a high-performance cloud migration.
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
                An 85-employee financial services firm was managing high-volume trading data across three regional offices. They relied heavily on an outdated on-premise infrastructure to handle rapid transactions and strict SEC compliance logging.
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">2</span>
                The Problem
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Legacy compliance software caused daily system freezes, leading to missed trading windows. The IT environment was not optimized for high-frequency data, causing latency that directly impacted the firm's ability to execute trades on behalf of their clients.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The internal team was constantly rebooting servers and applying band-aid fixes, leaving no time to address the underlying architectural flaws.
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
                  A 20-minute system freeze during a major market shift cost the firm a significant client portfolio. The executive board realized that their current IT setup was no longer just an operational annoyance, but a critical threat to their revenue and reputation.
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
                Ecksolution-IT migrated their entire operation to a high-performance, compliant cloud infrastructure with real-time failover.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Cloud Migration:</strong> Moved legacy applications to a scalable, high-availability cloud environment optimized for low latency.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Real-Time Failover:</strong> Implemented redundant systems ensuring that if one server drops, another instantly takes over with zero disruption.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Compliance Automation:</strong> Deployed enterprise-grade security tools to automatically log and secure all trading data for SEC audits.</span>
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
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">100%</div>
                  <div className="text-sm text-gray-500 font-medium">System Uptime</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Zero</div>
                  <div className="text-sm text-gray-500 font-medium">Missed Trades</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Pass</div>
                  <div className="text-sm text-gray-500 font-medium">SEC Audits</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The firm achieved 100% system uptime during peak trading hours. The new infrastructure easily handled the high-volume data without any latency, and the firm passed their subsequent SEC compliance audits flawlessly.
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
                  With a robust, scalable cloud environment, the firm has confidently onboarded 20 new traders and expanded their portfolio offerings without worrying about IT bottlenecks or compliance violations.
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
