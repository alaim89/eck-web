import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/lib/solutions-data";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Activity,
  Settings,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getMetadata, getFaqSchema } from "@/lib/seo";
import { FaqSection } from "@/components/FaqSection";
import { CaseStudyPreviewSection } from "@/components/CaseStudyPreviewSection";
import { CTASection } from "@/components/CTASection";
import Script from "next/script";

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const solution = solutionsData[resolvedParams.slug as keyof typeof solutionsData];

  if (!solution) return getMetadata({ title: "Lösung nicht gefunden" });

  const seoDescription =
    solution.description.length < 140
      ? `${solution.description} Profitieren Sie von unserer Expertise in ${solution.title} für mehr Sicherheit, Stabilität und einen saubereren IT-Betrieb.`
      : solution.description;

  return getMetadata({
    title: solution.title,
    description: seoDescription,
    canonical: `/solutions/${resolvedParams.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutionsData[slug as keyof typeof solutionsData];

  if (!solution) {
    notFound();
  }

  const relatedSlugs = Object.keys(solutionsData)
    .filter((s) => s !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-poppins text-black selection:bg-primary/20">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1000px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {solution.title}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              {solution.hero}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              {solution.description}
            </p>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Situation kurz einordnen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {solution.problem.title}
            </h2>

            <ul className="space-y-5">
              {solution.problem.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 text-lg"
                >
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-3 font-medium">
                Kommt Ihnen das bekannt vor?
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Einmal gemeinsam draufschauen
              </Link>
            </div>
          </div>
        </section>

        {/* Lösungs Section */}
        <section className="py-24 px-6 bg-primary text-white">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {solution.solution.title}
            </h2>

            <ul className="space-y-5">
              {solution.solution.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/90 text-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leistungen / Services Section */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                So bringe ich das wieder in Ordnung
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Nicht mit Folien. Sondern mit klarer Struktur, sauberer Umsetzung
                und einem Betrieb, der wieder tragfähig wird.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(solution as any).features.map((feature: string, i: number) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Process sub-section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">1. Analyse</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {solution.process.analysis}
                </p>
              </div>

              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  2. Implementierung
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {solution.process.implementation}
                </p>
              </div>

              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">3. Betrieb</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {solution.process.operations}
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-3 font-medium">
                Kommt Ihnen das bekannt vor?
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Einmal gemeinsam draufschauen
              </Link>
            </div>
          </div>
        </section>

        {/* Nutzen / Benefits Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Was sich danach im Alltag verändert
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Weniger Reibung. Weniger Unsicherheit. Mehr Kontrolle über
                Systeme, Entscheidungen und Betrieb.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {solution.results.map((result, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                    {result.metric}
                  </div>
                  <div className="text-gray-700 font-medium">{result.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(solution as any).benefits.map((benefit: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-bold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section (Case Study) */}
        <CaseStudyPreviewSection
          title={solution.caseStudy.title}
          companyType={solution.caseStudy.companyType}
          situation={solution.caseStudy.situation}
          problem={solution.caseStudy.problem}
          decisionPoint={solution.caseStudy.decisionPoint}
          solution={solution.caseStudy.solution}
          result={solution.caseStudy.result}
          slug={solution.caseStudy.slug}
        />

        {/* Related Solutions */}
        <section className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Weitere Lösungen entdecken
                </h2>
                <p className="text-gray-700 text-lg">
                  Wie ich Unternehmen helfe, gewachsene IT wieder beherrschbar zu
                  machen.
                </p>
              </div>

              <Link
                href="/solutions"
                className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Alle Lösungen ansehen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedSlugs.map((rSlug) => {
                const s = solutionsData[rSlug as keyof typeof solutionsData];
                return (
                  <Link
                    key={rSlug}
                    href={`/solutions/${rSlug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {s.description}
                    </p>
                    <div className="text-primary font-semibold flex items-center gap-2">
                      Mehr dazu <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {solution.faq && (
          <>
            <FaqSection title="Häufig gestellte Fragen" items={solution.faq} />
            <Script
              id="faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(getFaqSchema(solution.faq, `/solutions/${slug}`)),
              }}
            />
          </>
        )}

        {/* Final CTA Section */}
        <CTASection
          id="contact"
          title="Lassen Sie uns kurz draufschauen."
          description="15–30 Minuten reichen oft, um zu sehen, wo es wirklich hängt."
          buttonText="Kurz abstimmen"
          buttonHref="/kontakt"
        />
      </main>

      <Footer />
    </div>
  );
}