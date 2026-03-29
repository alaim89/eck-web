import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Manufacturing Firm Scales Without IT Bottlenecks.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              How a 120-employee manufacturer eliminated production downtime and transitioned their overwhelmed internal IT into a strategic role.
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
                A regional manufacturing firm with 120 employees was operating out of two facilities. They relied heavily on an aging on-premise server for their ERP system and had a single, highly stressed internal IT manager handling everything from network architecture to printer jams.
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">2</span>
                The Problem
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Frequent network outages were halting the production line. Every hour the ERP system was down cost the company thousands of dollars in delayed shipments and idle labor. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Because the internal IT manager spent 90% of their time putting out daily fires, critical infrastructure upgrades and security patches were completely ignored. The company was running on borrowed time.
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
                  A major ransomware scare locked the executive team out of their shared drives for 12 hours. While no data was ultimately lost, the CEO realized that having a single point of failure—both in their hardware and their one-person IT department—was an unacceptable business risk that threatened their upcoming expansion.
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
                Ecksolution-IT stepped in to provide full accountability. We didn't replace their IT manager; we empowered them.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Hybrid-Cloud Migration:</strong> We moved their critical ERP infrastructure to a redundant cloud environment, eliminating the on-premise single point of failure.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">24/7 Helpdesk:</strong> We took over all day-to-day employee support requests, guaranteeing a 15-minute response time.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Enterprise Security:</strong> Deployed advanced endpoint detection and automated patching across all 120 workstations.</span>
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
                  <div className="text-3xl font-bold text-black mb-1">Zero</div>
                  <div className="text-sm text-gray-500 font-medium">Production Downtime</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">12m</div>
                  <div className="text-sm text-gray-500 font-medium">Avg. Ticket Response</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Security Compliance</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Production downtime was completely eliminated. The internal IT manager, freed from resetting passwords and fixing printers, transitioned into an IT Director role, focusing entirely on implementing new software automation for the assembly line.
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
                  Three years later, the company has expanded to a third facility and added 40 new hires. Because of the scalable infrastructure and predictable, flat-fee pricing model provided by Ecksolution-IT, their IT costs have remained completely stable and predictable throughout their rapid growth.
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
