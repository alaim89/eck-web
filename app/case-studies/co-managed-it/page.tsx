"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudyCoManaged() {
  const { t } = useLanguage();
  const caseStudy = t.caseStudies.items[4];
  const details = caseStudy.details;

  if (!details) return null;

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> {t.caseStudies.backToStudies}
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">{caseStudy.company}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              {caseStudy.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">{t.caseStudies.situation.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {details.situation}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-destructive">{t.caseStudies.problem.title}</h2>
                <ul className="space-y-4">
                  {details.problem.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                      <span className="text-destructive font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">{t.caseStudies.decisionPoint.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
                  &quot;{details.decisionPoint}&quot;
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">{t.caseStudies.solution.title}</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {details.solution.introduction}
                  </p>
                  <ul className="space-y-3">
                    {details.solution.points.map((point: any, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <strong className="text-black">{point.title}:</strong> {point.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-primary">{t.caseStudies.result.title}</h2>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {details.result.metrics.map((metric: any, i: number) => (
                    <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                      <p className="text-3xl font-bold text-primary mb-1">{metric.value}</p>
                      <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-4">
                  {details.result.outcomes.map((outcome: string, i: number) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">{t.caseStudies.longTermStability.title}</h2>
                <div className="p-8 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
                  <p className="leading-relaxed text-lg font-medium text-white/90">
                    {details.longTermStability}
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">{t.cta.headline}</h3>
                <p className="text-gray-400 mb-6">
                  {t.cta.subheadline}
                </p>
                <Link href="/contact" className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/90 transition-colors">
                  {t.cta.button}
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
