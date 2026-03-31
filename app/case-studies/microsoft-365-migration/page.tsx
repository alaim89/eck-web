"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Microsoft365MigrationCaseStudy() {
  const { t } = useLanguage();
  const caseStudy = t.caseStudies.items[0];
  const details = caseStudy.details;

  if (!details) return null;

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> {t.caseStudies.backToStudies}
          </Link>
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6">
              {t.caseStudies.badge}: {caseStudy.title}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Situation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">1</span>
                {t.caseStudies.situation.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {details.situation}
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">2</span>
                {t.caseStudies.problem.title}
              </h2>
              <ul className="space-y-4 mb-6">
                {details.problem.map((point: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Decision Point */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">3</span>
                {t.caseStudies.decisionPoint.title}
              </h2>
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-900 leading-relaxed text-lg font-medium">
                  {details.decisionPoint}
                </p>
              </div>
            </section>

            {/* 4. Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">4</span>
                {t.caseStudies.solution.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {details.solution.introduction}
              </p>
              <ul className="space-y-4">
                {details.solution.points.map((point: any, index: number) => (
                  <li key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg"><strong className="text-black">{point.title}:</strong> {point.description}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Result */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">5</span>
                {t.caseStudies.result.title}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">{details.result.metrics[0].value}</div>
                  <div className="text-sm text-gray-700 font-medium">{details.result.metrics[0].label}</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">{details.result.metrics[1].value}</div>
                  <div className="text-sm text-gray-700 font-medium">{details.result.metrics[1].label}</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-black mb-1">{details.result.metrics[2].value}</div>
                  <div className="text-sm text-gray-700 font-medium">{details.result.metrics[2].label}</div>
                </div>
              </div>
              <ul className="space-y-4">
                {details.result.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Stability / Long-term outcome */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm text-gray-700">6</span>
                {t.caseStudies.longTermStability.title}
              </h2>
              <div className="p-8 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
                <p className="leading-relaxed text-lg font-medium text-white/90">
                  {details.longTermStability}
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
