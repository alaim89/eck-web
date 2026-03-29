import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaseStudyStrategicITRoadmap() {
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
              <span className="text-gray-700 font-medium">Non-profit Organization (40–60 employees)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Strategic IT Roadmap for a Non-profit
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Situation</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The organization was using outdated technology that didn&apos;t align with its new 5-year strategic plan. This led to reactive IT spending that didn&apos;t support the organization&apos;s goal of expanding digital services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-destructive">Problem</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    IT spending was reactive and didn&apos;t support the organization&apos;s goal of expanding digital services.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    Technology was the primary barrier to achieving their mission.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    Outdated technology didn&apos;t align with the new 5-year strategic plan.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Decision Point</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
                  &quot;The board realized that technology was the primary barrier to achieving their mission, making it clear that a strategic IT roadmap was necessary.&quot;
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Solution</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ecksolution-IT acted as a virtual CIO, developing a 3-year Strategic IT Roadmap aligned with the organization&apos;s goals.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "3-year Strategic IT Roadmap",
                      "Virtual CIO services",
                      "Technology alignment with goals",
                      "Digital service expansion plan"
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
                    <p className="text-3xl font-bold text-primary mb-1">25%</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Reactive IT Cost Reduction</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary mb-1">Successful</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Digital Service Launch</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  The organization now has a clear technology strategy and has successfully launched new digital service platforms.
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">Need similar results?</h3>
                <p className="text-gray-400 mb-6">
                  Let&apos;s discuss how our Strategic IT Roadmap services can optimize your business.
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
