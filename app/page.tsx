'use client';

import { motion } from "motion/react";
import { 
  ArrowRight, ShieldAlert, Clock, 
  CheckCircle2, Zap, Lock, TrendingDown, 
  Building2, Activity, Cpu, ShieldCheck,
  Plus, Minus, Settings
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { HeroVisual } from "@/components/HeroVisual";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function LandingPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              {t.hero.badge}
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-black">
              {t.hero.headline.split('.').map((part, i) => (
                <span key={i} className={i === 1 ? "text-gray-500 block" : ""}>
                  {part}{i === 0 ? "." : ""}
                </span>
              ))}
            </h1>
            <p className="text-lg text-gray-700 mb-12 max-w-md leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/case-studies" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors">
                <Clock className="w-5 h-5 text-primary" />
                {t.hero.secondaryCta}
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-20 mx-auto text-center">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.problem.badge}</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">{t.problem.headline}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.problem.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.cards.map((risk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-[#005F6B]/[0.08] flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_15px_rgba(0,95,107,0.1)] group-hover:shadow-[0_0_25px_rgba(0,95,107,0.25)] group-hover:-translate-y-1">
                  {i === 0 ? <TrendingDown className="w-7 h-7 text-primary" /> : i === 1 ? <ShieldAlert className="w-7 h-7 text-primary" /> : <Cpu className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{risk.title}</h3>
                <p className="text-gray-700 leading-relaxed">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative z-10">
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.solution.badge}</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12 text-black leading-[1.1]">
                {t.trust.headline}
              </h2>
              <p className="text-gray-900 text-lg mb-16 leading-relaxed max-w-sm opacity-80">
                {t.trust.subheadline}
              </p>
              
              <div className="space-y-12">
                {t.trust.points.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shadow-[0_0_20px_rgba(0,95,107,0.1)] group-hover:shadow-[0_0_30px_rgba(0,95,107,0.2)] transition-all duration-500">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-black tracking-tight">{item.title}</h4>
                      <p className="text-gray-800 leading-relaxed text-base opacity-70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-16">
                  <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="text-6xl font-bold text-black mb-4 tracking-tighter">{t.results.cards[1].metric}</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{t.results.cards[1].label}</div>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-primary shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-500 group">
                    <div className="text-6xl font-bold text-white mb-4 tracking-tighter group-hover:scale-105 transition-transform">{t.results.cards[0].metric}</div>
                    <div className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">{t.results.cards[0].label}</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="text-6xl font-bold text-black mb-4 tracking-tighter">{t.results.cards[2].metric}</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{t.results.cards[2].label}</div>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="text-6xl font-bold text-black mb-4 tracking-tighter">{t.results.cards[3].metric}</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{t.results.cards[3].label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.services.badge}</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">{t.services.headline}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.services.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => (
              <Link 
                key={i} 
                href={service.link}
                className="group p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {i === 0 ? <Cpu className="w-6 h-6" /> : i === 1 ? <Activity className="w-6 h-6" /> : i === 2 ? <Zap className="w-6 h-6" /> : i === 3 ? <Lock className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-20 mx-auto text-center">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{t.process.badge}</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">{t.process.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10" />
            
            {t.process.steps.map((step, i) => (
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
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">{t.caseStudies.headline}</h2>
              <p className="text-gray-600 text-lg">
                {t.caseStudies.subheadline}
              </p>
            </div>
            <Link href="/case-studies" className="text-black font-bold flex items-center gap-2 hover:text-primary transition-colors group">
              {t.caseStudies.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <CaseStudyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white border-t border-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">{t.faq.headline}</h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-black">{item.question}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-gray-400" />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-40 px-6 bg-black text-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">{t.cta.headline}</h2>
          <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
            {t.cta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium text-lg transition-all shadow-sm">
              {t.cta.button}
            </button>
            <Link href="/case-studies" className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium text-lg transition-all">
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
