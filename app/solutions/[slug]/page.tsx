import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/lib/solutions-data";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, XCircle, Activity, Settings, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const solution = solutionsData[resolvedParams.slug as keyof typeof solutionsData];
  if (!solution) return { title: 'Not Found' };
  return {
    title: `${solution.title} | Ecksolution-IT`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutionsData[slug as keyof typeof solutionsData];

  if (!solution) {
    notFound();
  }

  // Get 3 related solutions (excluding current one)
  const relatedSlugs = Object.keys(solutionsData)
    .filter(s => s !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary/20">
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
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
              Kostenlose Erstberatung <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Problem */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-8">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{solution.problem.title}</h2>
                <ul className="space-y-5">
                  {solution.problem.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-primary text-white rounded-2xl p-8 md:p-12 shadow-xl shadow-primary/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{solution.solution.title}</h2>
                <ul className="space-y-5">
                  {solution.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Messbare Ergebnisse</h2>
              <p className="text-gray-700 text-lg">Was Sie von unserer Partnerschaft erwarten können.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {solution.results.map((result, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{result.metric}</div>
                  <div className="text-gray-700 font-medium">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser bewährter Prozess</h2>
              <p className="text-gray-700 text-lg">So liefern wir konsistente Ergebnisse.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">1. Analyse</h3>
                <p className="text-gray-700 text-center leading-relaxed">{solution.process.analysis}</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">2. Implementierung</h3>
                <p className="text-gray-700 text-center leading-relaxed">{solution.process.implementation}</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">3. Betrieb</h3>
                <p className="text-gray-700 text-center leading-relaxed">{solution.process.operations}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 px-6 bg-black text-white">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Case Study: {solution.caseStudy.companyType}</div>
              <h2 className="text-3xl md:text-4xl font-bold">{solution.caseStudy.title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">Die Ausgangslage</h3>
                  <p className="text-gray-200 leading-relaxed">{solution.caseStudy.situation}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">Das Problem</h3>
                  <p className="text-gray-200 leading-relaxed">{solution.caseStudy.problem}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">Der Wendepunkt</h3>
                  <p className="text-gray-200 leading-relaxed">{solution.caseStudy.decisionPoint}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">Die Lösung</h3>
                  <p className="text-gray-200 leading-relaxed">{solution.caseStudy.solution}</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white/90">Das Ergebnis</h3>
                <p className="text-gray-200 leading-relaxed">{solution.caseStudy.result}</p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <Link href={`/case-studies/${solution.caseStudy.slug}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-semibold">
                  Vollständige Case Study lesen <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Solutions Section */}
        <section className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Weitere Lösungen entdecken</h2>
                <p className="text-gray-700 text-lg">Wie wir Unternehmen helfen, IT-Risiken zu eliminieren.</p>
              </div>
              <Link href="/#solutions" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Alle Lösungen ansehen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedSlugs.map((rSlug) => {
                const s = solutionsData[rSlug as keyof typeof solutionsData];
                return (
                  <Link key={rSlug} href={`/solutions/${rSlug}`} className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{s.description}</p>
                    <div className="text-primary font-semibold flex items-center gap-2">
                      Mehr erfahren <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-32 px-6 bg-primary text-white text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bereit, IT-Risiken zu eliminieren?</h2>
            <p className="text-xl text-white/90 mb-10">Erhalten Sie ein umfassendes Audit Ihres aktuellen Setups. Unverbindlich und klar.</p>
            <a href="mailto:info@ecksolution-it.de" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5">
              IT-Audit anfordern <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
