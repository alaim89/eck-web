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
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { HeroVisual } from "@/components/HeroVisual";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useCallback, useRef } from "react";
import { getOrganizationSchema } from "@/lib/jsonld";
import { getFaqSchema } from "@/lib/seo";

const HERO_VARIANTS = [
  {
    subline: "Hands-on Architektur für den Mittelstand. Ich stabilisiere festgefahrene Cloud- und Infrastrukturprojekte und bringe kritische Systeme wieder auf Kurs.",
    primaryCTA: { text: "Kostenlose IT-Einschätzung anfordern", href: "https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled" },
    secondaryCTA: { text: "Erstgespräch sichern", href: "/solutions" },
    visualType: "monitoring" as const
  },
  {
    subline: "Von gewachsenen Strukturen zu sauberer Architektur: Ich begleite Migrationen, Modernisierung und technische Neuausrichtung mit Fokus auf Sicherheit und Skalierbarkeit.",
    primaryCTA: { text: "IT-Check starten", href: "/kontakt" },
    secondaryCTA: { text: "Referenzen ansehen", href: "/case-studies" },
    visualType: "architecture" as const
  },
  {
    subline: "Ich übernehme Verantwortung für stabile, sichere und skalierbare IT-Infrastrukturen - proaktiv, strukturiert und mit direktem Blick auf den operativen Betrieb.",
    primaryCTA: { text: "IT-Check starten", href: "/kontakt" },
    secondaryCTA: { text: "Referenzen ansehen", href: "/case-studies" },
    visualType: "health" as const
  },
  {
    subline: "Ich löse Blockaden in Microsoft-Cloud-Projekten, schaffe belastbare Strukturen und unterstütze Unternehmen bei einer nachhaltigen technischen Weiterentwicklung.",
    primaryCTA: { text: "Kostenlose IT-Einschätzung anfordern", href: "/kontakt" },
    secondaryCTA: { text: "IT-Check starten", href: "/solutions" },
    visualType: "cloud" as const
  }
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
                className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-black"
              >
                IT-Projekte retten,<br />
                <span className="text-gray-400">stabilisieren und skalieren.</span>
              </h1>

              <div className="relative h-[120px] md:h-[100px] mb-12">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`subline-${currentVariant}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-gray-700 max-w-md leading-relaxed opacity-90 absolute top-0 left-0"
                  >
                    {variant.subline}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16 h-[60px]">
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


        {/* Social Proof / Trust Bar */}
        <section className="py-12 border-y border-gray-50 bg-gray-50/30">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for partner logos - using text for professional look */}
              <div className="text-xl font-bold tracking-tighter">MICROSOFT PARTNER</div>
              <div className="text-xl font-bold tracking-tighter">LENOVO TECHNOLOGIES</div>
              <div className="text-xl font-bold tracking-tighter">IONOS AGENCY Partner</div>
              <div className="text-xl font-bold tracking-tighter">VEEAM SOFTWARE</div>
              <div className="text-xl font-bold tracking-tighter">SOPHOS PARTNER</div>
              <div className="text-xl font-bold tracking-tighter">ALLIANZ FÜR CYBER-SICHERHEIT</div>
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
            <div className="max-w-2xl mb-20 mx-auto text-center">
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.problem.badge}</div>
              <h2 
                id="problem-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black"
              >
                {t.problem.headline}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed opacity-80">
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
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-[#005F6B]/[0.08] flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_15px_rgba(0,95,107,0.1)] group-hover:shadow-[0_0_25px_rgba(0,95,107,0.25)] group-hover:-translate-y-1">
                    {i === 0 ? <TrendingDown className="w-7 h-7 text-primary" /> : i === 1 ? <ShieldAlert className="w-7 h-7 text-primary" /> : <Cpu className="w-7 h-7 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{risk.title}</h3>
                  <p className="text-gray-700 leading-relaxed opacity-80">{risk.description}</p>
                </motion.div>
              ))}
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
            className="text-5xl md:text-6xl font-bold tracking-tight mb-10 text-black leading-[1.1]"
          >
            {t.trust.headline}
          </h2>

          <p className="text-gray-600 text-lg mb-16 leading-relaxed max-w-md opacity-90">
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
          {/* Ambient Brand Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,95,107,0.16)_0%,rgba(0,95,107,0.10)_28%,rgba(0,95,107,0.05)_52%,transparent_74%)]" />

          {/* Center Focus Glow */}
          <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,95,107,0.14)_0%,rgba(0,95,107,0.08)_35%,transparent_72%)] blur-3xl" />

          {/* Dot Grid */}
          <div className="w-[78%] h-[78%] bg-[radial-gradient(#dfe5e7_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />

          {/* Soft Fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
        </div>

        {/* KPI Dashboard Layout */}
        <div className="relative w-full max-w-[720px] mx-auto grid grid-cols-12 gap-6 px-8 py-6">
          
          {/* Card 1: Reaktionszeit */}
          <div className="col-span-7 group relative">
            <div className="relative overflow-hidden p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.10),transparent_58%)]" />
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.12),0_0_28px_rgba(0,95,107,0.10)]" />

            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Live
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between mb-3">
              <div className="text-5xl font-bold text-black tracking-tighter">
                {t.results.cards[0].metric}
              </div>
              <div className="text-[11px] text-gray-400 font-medium uppercase tracking-[0.18em]">
                SLA Response
              </div>
            </div>

            <div className="relative z-10 text-xs text-gray-400 font-bold uppercase tracking-widest mb-5">
              {t.results.cards[0].label}
            </div>

            <div className="relative z-10 space-y-3">
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

        {/* Card 2: Monitoring */}
          <div className="col-span-5 mt-10 group relative">
            <div className="relative overflow-hidden p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.08),transparent_58%)]" />
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.10),0_0_24px_rgba(0,95,107,0.08)]" />

            <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-6">
              <Activity className="w-5 h-5 text-primary" />
            </div>

            <div className="text-4xl font-bold text-black mb-2 tracking-tighter">
              {t.results.cards[1].metric}
            </div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5">
              {t.results.cards[1].label}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-gray-500">
                <span>Signals</span>
                <span className="text-primary font-semibold">Active</span>
              </div>

              <div className="flex items-end gap-1 h-10">
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

        {/* Card 3: Erfahrung */}
          <div className="col-span-5 -mt-4 group relative">
            <div className="relative overflow-hidden p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.08),transparent_58%)]" />
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.10),0_0_24px_rgba(0,95,107,0.08)]" />

            <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-6">
              <Award className="w-5 h-5 text-primary" />
            </div>

            <div className="text-4xl font-bold text-black mb-2 tracking-tighter">
              {t.results.cards[2].metric}
            </div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5">
              {t.results.cards[2].label}
            </div>

            <div className="space-y-3">
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

        {/* Card 4: Verantwortung */}
          <div className="col-span-7 group relative">
            <div className="relative overflow-hidden p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_rgba(0,95,107,0.10)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,95,107,0.10),transparent_58%)]" />
            <div className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_0_1px_rgba(0,95,107,0.12),0_0_30px_rgba(0,95,107,0.10)]" />

            <div className="relative z-10 flex items-center justify-between mb-6">
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

            <div className="relative z-10 text-5xl font-bold text-black mb-2 tracking-tighter">
              {t.results.cards[3].metric}
            </div>
            <div className="relative z-10 text-xs text-gray-400 font-bold uppercase tracking-widest mb-5">
              {t.results.cards[3].label}
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Ownership</div>
                <div className="text-sm font-semibold text-black">End-to-end</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Escalation</div>
                <div className="text-sm font-semibold text-black">Direct</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">Status</div>
                <div className="text-sm font-semibold text-primary">Stable</div>
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
            <div className="max-w-2xl mb-20">
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.services.badge}</div>
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black"
              >
                {t.services.headline}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed opacity-80">
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
                    IT-Check starten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          </div>
        </section>

        {/* Process Section */}
        <section 
          className="py-32 bg-gray-50/50"
          aria-labelledby="process-heading"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-20 mx-auto text-center">
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.process.badge}</div>
              <h2 
                id="process-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black"
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
        <section 
          className="py-32 px-6 bg-white overflow-hidden"
          aria-labelledby="case-studies-heading"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 
                  id="case-studies-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black"
                >
                  {t.caseStudies.headline}
                </h2>
                <p className="text-gray-600 text-lg opacity-90">
                  {t.caseStudies.subheadline}
                </p>
              </div>
              <Link 
                href="/case-studies" 
                className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors group"
              >
                {t.caseStudies.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <CaseStudyCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          className="py-32 bg-white border-t border-gray-50"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 
                id="faq-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-black"
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
        <section 
          id="contact" 
          className="py-40 px-6 bg-black text-white text-center relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 
              id="cta-heading"
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
            >
              {t.cta.headline}
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
              {t.cta.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled"
                target="_blank"
                className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium text-lg transition-all shadow-xl shadow-primary/20 active:scale-[0.98] w-full sm:w-auto"
              >
                {t.cta.button}
              </Link>
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium text-lg transition-all active:scale-[0.98] w-full sm:w-auto"
              >
                Erstgespräch sichern
              </Link>
            </div>

            {/* Direct Contact Options */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-white/10">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Rufen Sie uns an</div>
                  <div className="text-lg font-semibold">+49 (0) 176 34580607</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Schreiben Sie uns</div>
                  <div className="text-lg font-semibold">info@ecksolution-it.de</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
