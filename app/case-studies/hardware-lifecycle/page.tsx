import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaseStudyHardwareLifecycle() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">Design Agency (25–50 employees)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Hardware Refresh for a Design Agency
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Situation</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Architects were using a mix of old workstations, leading to frequent crashes in CAD software. This led to lost billable hours and high maintenance costs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-destructive">Problem</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    High maintenance costs and lost billable hours due to hardware instability.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    Frequent crashes in CAD software.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    A critical project deadline was missed because of a workstation failure.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Decision Point</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
                  &quot;A critical project deadline was missed because of a workstation failure, making it clear that the hardware needed to be refreshed.&quot;
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Solution</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ecksolution-IT implemented a Hardware Lifecycle Management plan with standardized high-performance workstations and a 3-year refresh cycle.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Standardized high-performance workstations",
                      "3-year hardware refresh cycle",
                      "Proactive hardware monitoring",
                      "Secure hardware disposal"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-primary">Result</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary mb-1">40%</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Rendering Speed Increase</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary mb-1">Zero</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Hardware-Related Downtime</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  The agency now has zero hardware-related downtime and a 40% increase in rendering speed.
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">Need similar results?</h3>
                <p className="text-gray-400 mb-6">
                  Let&apos;s discuss how our Hardware Lifecycle Management services can optimize your business.
                </p>
                <Link href="/contact" className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/90 transition-colors">
                  Book a Consultation
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
