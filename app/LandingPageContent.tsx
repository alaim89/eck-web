
import { 
  ArrowRight, ShieldAlert,
  CheckCircle2, Cpu,
  Award, Clock, Activity, ShieldCheck
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { getOrganizationSchema } from "@/lib/jsonld";
import { getFaqSchema } from "@/lib/seo";
import { translations } from "@/lib/translations";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStack } from "@/components/home/HomeStack";
import { HomeFAQ } from "@/components/home/HomeFAQ";

export default function LandingPageContent() {
  const t = translations.de;
  const faqSchema = getFaqSchema(t.faq.items, "/");
  const organizationSchema = getOrganizationSchema();

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <HomeHero />

        {/* Social Proof / Trust Bar */}
        <section className="relative py-12 border-y border-gray-100 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative max-w-[1120px] mx-auto px-6">
            <div className="max-w-3xl mb-10 mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-3">
                Stack im Einsatz
              </p>

              <p className="text-gray-900 text-[1.05rem] md:text-[1.35rem] leading-relaxed font-medium max-w-3xl mx-auto">
                Das ist die Infrastruktur, mit der wir als Team arbeiten - im{" "}
                <Link
                  href="/solutions/microsoft-365-migration"
                  className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                >
                  Betrieb
                </Link>
                , in{" "}
                <Link
                  href="/solutions/azure-hybrid-betreuung"
                  className="text-primary font-semibold underline underline-offset-4 hover:no-underline"
                >
                  Migrationen
                </Link>{" "}
                und wenn es kritisch wird.
              </p>
            </div>

            <HomeStack />

            <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-gray-500">
                Mitglied in der Allianz für Cybersicherheit.
              </p>

              <Link
                href="/kontakt"
                className="text-sm text-primary font-semibold underline underline-offset-4 hover:no-underline"
              >
                Mehr zur Sicherheitsbetreuung
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section
          id="problem"
          className="py-32 bg-gray-50/50"
          aria-labelledby="problem-heading"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-20 mx-auto text-center">
              <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                {t.problem.badge}
              </div>
              <h2 id="problem-heading" className="title-h2 mb-6">
                {t.problem.headline}
              </h2>
              <p className="lead-text mx-auto">
                {t.problem.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.problem.cards.map((risk: { title: string; description: string }, i: number) => (
                <div
                  key={i}
                  className="group p-10 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-primary/10 transition-all duration-500 text-center"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_15px_rgba(0,95,107,0.1)] group-hover:shadow-[0_0_25px_rgba(0,95,107,0.25)] group-hover:-translate-y-1">
                    {i === 0 ? (
                      <ShieldAlert className="w-7 h-7 text-primary" />
                    ) : i === 1 ? (
                      <ShieldAlert className="w-7 h-7 text-primary" />
                    ) : (
                      <Cpu className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black tracking-tight">{risk.title}</h3>
                  <p className="text-gray-700 leading-relaxed opacity-80 font-light">{risk.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-3 font-medium">
                Kommt Ihnen das bekannt vor?
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Lassen Sie uns gemeinsam draufschauen
              </Link>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section
          id="solution"
          className="py-40 px-6 bg-white overflow-hidden"
          aria-labelledby="solution-heading"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24 items-center">
              {/* Left Content */}
              <div className="relative z-10">
                <div>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                    {t.solution.badge}
                  </div>

                  <h2 id="solution-heading" className="title-h2 mb-10">
                    {t.trust.headline}
                  </h2>

                  <p className="lead-text mb-16 max-w-md">
                    {t.trust.subheadline}
                  </p>

                  <div className="space-y-10">
                    {t.trust.points.map(
                      (item: { title: string; description: string }, i: number) => (
                        <div key={i} className="flex gap-6 group">
                          <div className="mt-1 shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 grid place-items-center transition-all duration-500 group-hover:border-primary/25 group-hover:bg-white group-hover:shadow-[0_0_0_1px_rgba(0,95,107,0.06),0_10px_30px_rgba(0,95,107,0.08)]">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mb-2 text-black tracking-tight">
                              {item.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed text-sm opacity-80 max-w-[42ch]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right KPI Cluster */}
              <div className="relative flex justify-center items-center min-h-[680px]">
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,95,107,0.16)_0%,rgba(0,95,107,0.10)_28%,rgba(0,95,107,0.05)_52%,transparent_74%)]" />
                  <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,95,107,0.14)_0%,rgba(0,95,107,0.08)_35%,transparent_72%)] blur-3xl" />
                  <div className="w-[78%] h-[78%] bg-[radial-gradient(#dfe5e7_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
                </div>

                <div className="relative w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-6">
                  {/* Card 1 */}
                  <div className="group relative h-full">
                    <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
                      <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.10),transparent_58%)]" />
                      
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Live
                          </div>
                        </div>

                        <div className="flex items-end justify-between gap-4 mb-3">
                          <div className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-none break-words">
                            {t.results.cards[0].metric}
                          </div>
                          <div className="shrink-0 text-[11px] text-gray-400 font-medium uppercase tracking-[0.18em]">
                            SLA Response
                          </div>
                        </div>

                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5 max-w-[18rem]">
                          {t.results.cards[0].label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group relative h-full">
                    <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-6">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight leading-none break-words">
                          {t.results.cards[1].metric}
                        </div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5 max-w-[18rem]">
                          {t.results.cards[1].label}
                        </div>
                      </div>
                    </div>
                  </div>

                   {/* Card 3 */}
                   <div className="group relative h-full">
                    <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-6">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight leading-none break-words">
                          {t.results.cards[2].metric}
                        </div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5 max-w-[18rem]">
                          {t.results.cards[2].label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="group relative h-full">
                    <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Active
                          </div>
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight leading-none break-words">
                          {t.results.cards[3].metric}
                        </div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5 max-w-[18rem]">
                          {t.results.cards[3].label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-32 bg-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                {t.services.badge}
              </div>
              <h2 id="services-heading" className="title-h2 mb-6">
                {t.services.headline}
              </h2>
              <p className="lead-text">
                {t.services.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service: any, i: number) => (
                <Link
                  key={i}
                  href={service.link}
                  className="group p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                    Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 bg-gray-50/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="title-h2 mb-4">{t.faq.headline}</h2>
            </div>
            <HomeFAQ />
          </div>
        </section>

        <CTASection 
          title={t.cta.headline}
          description={t.cta.subheadline}
          buttonText={t.cta.button}
          buttonHref="/kontakt"
          showContactOptions={true}
        />
      </main>

      <Footer />
    </div>
  );
}
