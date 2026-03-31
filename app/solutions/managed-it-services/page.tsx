'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CaseStudyCarousel } from '@/components/CaseStudyCarousel';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Server, 
  Headset, 
  Lock, 
  Database, 
  Cloud, 
  BarChart3,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ManagedITPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const content = t.managedItPage;

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              {...fadeIn}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-gray-100 text-gray-600 rounded-full"
            >
              {content.hero.badge}
            </motion.span>
            <motion.h1 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
            >
              {content.hero.headline}
            </motion.h1>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {content.hero.subheadline}
            </motion.p>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/kontakt"
                className="w-full sm:w-auto px-8 py-4 bg-[#005F6B] text-white font-bold rounded-lg hover:bg-[#004d57] transition-all flex items-center justify-center gap-2"
              >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {content.problem.headline}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.problem.subheadline}
            </p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {content.problem.points.map((point: any, index: number) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Minus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                {content.solution.headline}
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {content.solution.subheadline}
              </p>
              <div className="space-y-8">
                {content.solution.points.map((point: any, index: number) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#005F6B]/10 text-[#005F6B] rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
                <Image 
                  src="https://picsum.photos/seed/it-ops/800/800" 
                  alt="IT Operations" 
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-[#005F6B] text-white rounded-2xl shadow-2xl max-w-xs">
                <p className="text-lg font-medium italic mb-4">
                  &quot;{content.philosophy.quote}&quot;
                </p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">
                  — {content.philosophy.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {content.results.headline}
            </h2>
            <p className="text-lg text-gray-400">
              {content.results.subheadline}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.results.cards.map((card: any, index: number) => (
              <div key={index} className="text-center p-8 border border-white/10 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{card.metric}</div>
                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {content.services.headline}
            </h2>
            <p className="text-lg text-gray-600">
              {content.services.subheadline}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((item: any, index: number) => {
              const icons = [Server, Headset, Lock, Database, Cloud, BarChart3];
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="p-8 border border-gray-100 rounded-2xl hover:border-[#005F6B]/30 transition-all group">
                  <div className="w-12 h-12 bg-gray-50 text-gray-400 group-hover:bg-[#005F6B]/10 group-hover:text-[#005F6B] rounded-xl flex items-center justify-center mb-6 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {content.process.headline}
            </h2>
            <p className="text-lg text-gray-600">
              {content.process.subheadline}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gray-200 -z-10" />
            
            {content.process.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#005F6B] text-[#005F6B] rounded-full flex items-center justify-center mx-auto mb-8 text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                {content.caseStudy.headline}
              </h2>
            </div>
            <Link href="/case-studies" className="text-[#005F6B] font-bold flex items-center gap-2 hover:opacity-80 transition-all group">
              {t.caseStudies.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <CaseStudyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
              {content.faq.headline}
            </h2>
            <div className="space-y-4">
              {content.faq.items.map((item: any, index: number) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-lg font-bold text-gray-900">{item.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-[#005F6B]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="bg-[#005F6B] rounded-[2rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                {t.cta.headline}
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                {t.cta.subheadline}
              </p>
              <Link 
                href="/kontakt"
                className="inline-block px-10 py-5 bg-white text-[#005F6B] font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl"
              >
                {t.cta.button}
              </Link>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
