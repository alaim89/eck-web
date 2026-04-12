'use client';

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, ShieldAlert, Clock, 
  CheckCircle2, Zap, Lock, TrendingDown, 
  Building2, Activity, Cpu, ShieldCheck,
  Plus, Minus, Settings, Phone, Mail,
  Award, CheckCircle, Users
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CaseStudyAutomationSection } from "@/components/CaseStudyAutomationSection";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { HeroVisual } from "@/components/HeroVisual";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useCallback, useRef } from "react";
import { getOrganizationSchema } from "@/lib/jsonld";
import { getFaqSchema } from "@/lib/seo";

const HERO_VARIANTS = [
  {
    subline: "Hands-on Architektur für den Mittelstand. Ich stabilisiere festgefahrene Cloud- und Infrastrukturprojekte und bringe kritische Systeme wieder auf Kurs.",
    primaryCTA: { text: "Klarheit über Ihre IT bekommen", href: "https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled" },
    secondaryCTA: { text: "Erstgespräch sichern", href: "/solutions" },
    visualType: "monitoring" as const
  },
  {
    subline: "Das Problem ist selten die Technik. Sondern fehlende Struktur und Entscheidungen. Ich bringe beides zusammen und sorge dafür, dass Ihre IT wieder kontrollierbar wird.",
    primaryCTA: { text: "Kurz abstimmen", href: "/kontakt" },
    secondaryCTA: { text: "Einblicke ansehen", href: "/case-studies" },
    visualType: "architecture" as const
  },
  {
    subline: "Die meisten IT-Systeme laufen. Aber nur mit Aufwand. Ich bringe Struktur rein und sorge dafür, dass Betrieb, Sicherheit und Weiterentwicklung wieder zusammenpassen.",
    primaryCTA: { text: "Kurz draufschauen", href: "/kontakt" },
    secondaryCTA: { text: "Praxisbeispiele ansehen", href: "/case-studies" },
    visualType: "health" as const
  },
  {
    subline: "Wenn Migrationen oder Cloud-Projekte feststecken, liegt es selten an der Technik. Ich gehe operativ rein, bringe Struktur rein und sorge dafür, dass es wieder vorwärts geht.",
    primaryCTA: { text: "Kurz abstimmen", href: "/kontakt" },
    secondaryCTA: { text: "So gehe ich vor", href: "/solutions" },
    visualType: "cloud" as const
  },
];

export default function LandingPageContent() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextVariant = useCallback(() => {
    setCurrentVariant((prev) => (prev + 1) % HERO_VARIANTS.length);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!isPaused) {
      timerRef.current = setInterval(nextVariant, 15000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextVariant]);

  const handleInteraction = () => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const variant = HERO_VARIANTS[currentVariant];

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
      {/* Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <section 
          className="pt-48 pb-32 px-6 relative overflow-hidden bg-white"
          aria-labelledby="hero-heading"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#005F6B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-gray-100 w-fit"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Verfügbar für neue Projekte
              </motion.div>
              
              <h1 
                id="hero-heading"
                className="title-h1 mb-8"
              >
                IT-Projekte retten,<br />
                <span className="text-slate-400">stabilisieren und skalieren.</span>
              </h1>

              <div className="relative h-[120px] md:h-[100px] mb-12">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`subline-${currentVariant}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="lead-text max-w-md absolute top-0 left-0"
                  >
                    {variant.subline}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`ctas-${currentVariant}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full"
                  >
                    <Link 
                      href={variant.primaryCTA.href}
                      target={variant.primaryCTA.href.startsWith('http') ? "_blank" : undefined}
                      onClick={handleInteraction}
                      className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] min-w-[200px]"
                    >
                      {variant.primaryCTA.text} <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      href={variant.secondaryCTA.href}
                      onClick={handleInteraction}
                      className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 active:scale-[0.98] min-w-[200px]"
                    >
                      {variant.secondaryCTA.text}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-12 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black tracking-tighter">8+ Jahre</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Erfahrung</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black tracking-tighter">36+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projekte realisiert</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black tracking-tighter">25+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kunden weltweit</span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-12">
                {HERO_VARIANTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentVariant(i);
                      handleInteraction();
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentVariant === i ? 'w-8 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Gehe zu Variante ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                key={`visual-${currentVariant}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <HeroVisual type={variant.visualType} />
              </motion.div>
              
              {/* Floating Trust Card - Static but high quality */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">Enterprise Security</div>
                  <div className="text-xs text-gray-500">Architektur nach Maß</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Trust Bar — final refined */}
        <section className="relative py-12 border-y border-gray-100 bg-white overflow-hidden">
          {/* subtle grid background */}
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
            
            {/* Intro */}
            <div className="max-w-3xl mb-10 mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-3">
                Stack im Einsatz
              </p>

              <p className="text-gray-900 text-[1.05rem] md:text-[1.35rem] leading-relaxed font-medium max-w-3xl mx-auto">
                Das ist die Infrastruktur, mit der ich arbeite - im{" "}
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

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <Link
                    href="/solutions/hybrid-cloud-transformation"
                    className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
                  >
                    Cloud & Collaboration
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Microsoft", "Azure", "M365", "AvePoint"].map((item, index) => (
                    <span
                      key={item}
                      className={
                        index === 1 || index === 2
                          ? "inline-flex items-center rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary"
                          : "inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                  </div>
                  <Link
                    href="/solutions/it-sicherheit"
                    className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
                  >
                    Security & Backup
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Veeam", "Bacula", "Borg", "Sophos", "OPNsense", "Acronis"].map((item, index) => (
                    <span
                      key={item}
                      className={
                        index === 0 || index === 3
                          ? "inline-flex items-center rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary"
                          : "inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <Link
                    href="/solutions/netzwerk-management"
                    className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold hover:text-primary transition-colors"
                  >
                    Infrastruktur & Netzwerk
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Red Hat", "Ubuntu", "MikroTik", "HPE Aruba"].map((item, index) => (
                    <span
                      key={item}
                      className={
                        index === 0 || index === 1
                          ? "inline-flex items-center rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary"
                          : "inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
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
              <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{t.problem.badge}</div>
              <h2 
                id="problem-heading"
                className="title-h2 mb-6"
              >
                {t.problem.headline}
              </h2>
              <p className="lead-text mx-auto">
                {t.problem.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.problem.cards.map((risk: { title: string; description: string }, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-primary/10 transition-all duration-500 text-center"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_15px_rgba(0,95,107,0.1)] group-hover:shadow-[0_0_25px_rgba(0,95,107,0.25)] group-hover:-translate-y-1">
                    {i === 0 ? <TrendingDown className="w-7 h-7 text-primary" /> : i === 1 ? <ShieldAlert className="w-7 h-7 text-primary" /> : <Cpu className="w-7 h-7 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black tracking-tight">{risk.title}</h3>
                  <p className="text-gray-700 leading-relaxed opacity-80 font-light">{risk.description}</p>
                </motion.div>
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
                Lassen Sie uns kurz draufschauen
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
            {t.solution.badge}
          </div>

          <h2
            id="solution-heading"
            className="title-h2 mb-10"
          >
            {t.trust.headline}
          </h2>

          <p className="lead-text mb-16 max-w-md">
            {t.trust.subheadline}
          </p>

          <div className="space-y-10">
            {t.trust.points.map(
              (
                item: { title: string; description: string },
                i: number
              ) => (
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
        </motion.div>
      </div>

      {/* Right KPI Cluster */}

      <div className="relative flex justify-center items-center min-h-[680px]">
        {/* Background Glow + Grid */}
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
              <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.12),0_0_28px_rgba(0,95,107,0.10)]" />

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

                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-[0.18em]">
                    <span>Status</span>
                    <span className="text-primary font-semibold">Operational</span>
                  </div>

                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-[78%] bg-primary rounded-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Queue</div>
                      <div className="text-sm font-semibold text-black">Low</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Coverage</div>
                      <div className="text-sm font-semibold text-black">24/7</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Priority</div>
                      <div className="text-sm font-semibold text-black">P1–P3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-full">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.08),transparent_58%)]" />
              <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.10),0_0_24px_rgba(0,95,107,0.08)]" />

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

                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-gray-500">
                    <span>Signals</span>
                    <span className="text-primary font-semibold">Active</span>
                  </div>

                  <div className="flex items-end gap-1 h-10">
                    <span className="w-2 h-[15%] rounded-full bg-primary/20" />
                    <span className="w-2 h-[35%] rounded-full bg-primary/20" />
                    <span className="w-2 h-[52%] rounded-full bg-primary/30" />
                    <span className="w-2 h-[42%] rounded-full bg-primary/40" />
                    <span className="w-2 h-[76%] rounded-full bg-primary/60" />
                    <span className="w-2 h-[58%] rounded-full bg-primary/50" />
                    <span className="w-2 h-[88%] rounded-full bg-primary/80" />
                    <span className="w-2 h-[70%] rounded-full bg-primary" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Alerts</div>
                      <div className="text-sm font-semibold text-black">0 critical</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Checks</div>
                      <div className="text-sm font-semibold text-black">Realtime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-full">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.08),transparent_58%)]" />
              <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.10),0_0_24px_rgba(0,95,107,0.08)]" />

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

                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-gray-500">
                    <span>Track Record</span>
                    <span className="text-primary font-semibold">Verified</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gray-50 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Projects</div>
                      <div className="text-sm font-semibold text-black">36+</div>
                    </div>
                    <div className="rounded-xl bg-gray-50 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Clients</div>
                      <div className="text-sm font-semibold text-black">25+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative h-full">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.10),transparent_58%)]" />
              <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.12),0_0_30px_rgba(0,95,107,0.10)]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>

                    <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-primary"
                      />
                    </div>
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

              <div className="mt-8 grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
                <div className="rounded-2xl bg-gray-50 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Ownership
                  </div>
                  <div className="text-sm font-semibold text-black">
                    End-to-end
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Escalation
                  </div>
                  <div className="text-sm font-semibold text-black">
                    Direct
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Status
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    Stable
                  </div>
                </div>

                <div className="rounded-2xl bg-primary/5 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-primary/70 mb-1">
                    Betreuung
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    Aktiv
                  </div>
                </div>
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
              <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{t.services.badge}</div>
              <h2 
                id="services-heading"
                className="title-h2 mb-6"
              >
                {t.services.headline}
              </h2>
              <p className="lead-text">
                {t.services.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {t.services.items.map((service: { title: string; description: string; link: string }, i: number) => (
                <Link 
                  key={i} 
                  href={service.link}
                  className="group p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {i === 0 ? <Cpu className="w-6 h-6" /> : i === 1 ? <Activity className="w-6 h-6" /> : i === 2 ? <Zap className="w-6 h-6" /> : i === 3 ? <Lock className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow opacity-90">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Schauen wir uns Ihre IT kurz an <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/solutions" 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-semibold transition-colors group"
              >
                Alle Lösungen ansehen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-3 font-medium">
                Kommt Ihnen das bekannt vor?
              </p>
              <Link href="/kontakt" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
                Einmal gemeinsam draufschauen
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          className="py-32 bg-gray-50/50"
          aria-labelledby="process-heading"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-20 mx-auto text-center">
              <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{t.process.badge}</div>
              <h2 
                id="process-heading"
                className="title-h2 mb-6"
              >
                {t.process.headline}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10" />
              
              {t.process.steps.map((step: { title: string; description: string; number: string }, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 mt-4">
                    {i === 0 ? <Activity className="w-8 h-8 text-primary" /> : i === 1 ? <Settings className="w-8 h-8 text-primary" /> : <ShieldCheck className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed opacity-80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudyAutomationSection
          badge={t.caseStudies.badge || "Erfolgsgeschichten"}
          title={t.caseStudies.headline}
          description={t.caseStudies.subheadline}
        >
          <div className="relative">
            <div className="absolute -top-16 right-0 flex gap-2 z-20">
              {/* Navigation arrows are handled inside CaseStudyCarousel, but we can add extra context here if needed */}
            </div>
            <CaseStudyCarousel />
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6 font-medium">
              Kommt Ihnen das bekannt vor?
            </p>
            <Link 
              href="/kontakt" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              Jetzt IT-Check anfordern
            </Link>
          </div>
        </CaseStudyAutomationSection>

        {/* FAQ Section */}
        <section 
          className="py-32 bg-white border-t border-gray-50"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 
                id="faq-heading"
                className="title-h2"
              >
                {t.faq.headline}
              </h2>
            </div>

            <div className="space-y-4">
              {t.faq.items.map((item: { question: string; answer: string }, i: number) => (
                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <span className="text-lg font-semibold text-black">{item.question}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-gray-400" />}
                  </button>
                  <motion.div 
                    id={`faq-answer-${i}`}
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-700 leading-relaxed opacity-80">
                      {item.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          id="contact"
          title={t.cta.headline}
          description={t.cta.subheadline}
          buttonText={t.cta.button}
          buttonHref="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled"
          secondaryButtonText="Kontakt aufnehmen"
          secondaryButtonHref="/kontakt"
          showContactOptions={true}
        />
      </main>

      <Footer />
    </div>
  );
}
