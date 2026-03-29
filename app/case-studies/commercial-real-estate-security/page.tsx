import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function CommercialRealEstateCaseStudy() {
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
              Case Study: Commercial Real Estate
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Real Estate Firm Secures Mobile Workforce & Accelerates Deals.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              How a 200-agent commercial real estate agency eliminated data breach risks and empowered their remote workforce with secure, anywhere access.
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
                A prominent commercial real estate agency employed 200 agents working across four physical branches and remotely. Their entire operation relied on a centralized, legacy CRM system hosted on an aging server in their headquarters.
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-500">2</span>
                The Problem
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Remote agents struggled to securely access client contracts and property data on their mobile devices. The existing VPN was notoriously unstable and slow, leading to immense frustration during critical client meetings.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                To bypass the clunky VPN, agents began downloading highly sensitive lease agreements and financial documents directly to their personal, unmanaged laptops and smartphones, creating a massive shadow IT security gap.
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
                  An agent's personal laptop, containing dozens of unencrypted, high-value commercial lease agreements, was stolen from a coffee shop. This incident triggered a severe data breach warning, threatening the firm's reputation and risking massive regulatory fines. Leadership realized their infrastructure was fundamentally incompatible with a modern, mobile workforce.
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
                Ecksolution-IT completely modernized their access and security architecture without slowing down the agents.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Cloud CRM Migration:</strong> We migrated their legacy on-premise CRM to a secure, high-availability SaaS platform, eliminating the need for the unstable VPN.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Mobile Device Management (MDM):</strong> Deployed strict MDM policies across all agent devices, enabling remote wipe capabilities and enforcing device-level encryption.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg"><strong className="text-black">Conditional Access:</strong> Implemented zero-trust policies requiring Multi-Factor Authentication (MFA) and verifying device health before granting access to company data.</span>
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
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">Zero</div>
                  <div className="text-sm text-gray-500 font-medium">Data Breaches</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">+25%</div>
                  <div className="text-sm text-gray-500 font-medium">Agent Productivity</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Mobile Accessibility</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Agents can now securely draft, review, and sign contracts directly from their iPads or smartphones while on-site with clients. The firm has experienced zero data breaches in the two years since implementation, and the streamlined access has boosted overall agent productivity by 25%.
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
                  By treating security as an enabler rather than a roadblock, the agency transformed their IT from a liability into a competitive advantage. They now use their robust data security posture as a key selling point when pitching to high-net-worth commercial clients.
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
