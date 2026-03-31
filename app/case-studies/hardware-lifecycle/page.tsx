'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Building2, 
  Users, 
  BarChart3, 
  ShieldCheck,
  Cpu,
  RefreshCw,
  Settings,
  ClipboardCheck
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HardwareLifecycleCaseStudy() {
  const { t } = useLanguage();
  const caseStudy = t.caseStudies.items[5]; // Hardware Lifecycle Management

  if (!caseStudy || !caseStudy.details) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[#005F6B] hover:text-[#004d57] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.caseStudies.backToStudies}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#005F6B]/10 text-[#005F6B] text-sm font-medium mb-4">
              <Cpu className="mr-2 h-4 w-4" />
              {t.caseStudies.badge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {caseStudy.summary}
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center text-gray-700">
                <Building2 className="mr-2 h-5 w-5 text-[#005F6B]" />
                <span className="font-medium">{caseStudy.company}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#005F6B]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="h-24 w-24 text-[#005F6B]/40" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Situation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.caseStudies.situation.title}</h2>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-[#005F6B] pl-6 py-2">
                &quot;{caseStudy.details.situation}&quot;
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.caseStudies.problem.title}</h2>
              <ul className="space-y-4">
                {caseStudy.details.problem.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Decision Point */}
            <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.caseStudies.decisionPoint.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.details.decisionPoint}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseStudies.solution.title}</h2>
              <p className="text-gray-600 mb-8">
                {caseStudy.details.solution.introduction}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.details.solution.points.map((point, index) => (
                  <div key={index} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#005F6B] mr-2" />
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Result */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseStudies.result.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {caseStudy.details.result.metrics.map((metric, index) => (
                  <div key={index} className="p-6 rounded-xl bg-[#005F6B] text-white text-center">
                    <div className="text-3xl font-bold mb-1">{metric.value}</div>
                    <div className="text-sm opacity-90">{metric.label}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-4">
                {caseStudy.details.result.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Long Term Stability */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.caseStudies.longTermStability.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.details.longTermStability}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-[#005F6B]" />
                Key Outcomes
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <RefreshCw className="h-5 w-5 text-[#005F6B] mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Standardization</div>
                    <div className="text-sm text-gray-600">Unified hardware across all locations.</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="h-5 w-5 text-[#005F6B] mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Predictability</div>
                    <div className="text-sm text-gray-600">Fixed replacement cycles and budgets.</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClipboardCheck className="h-5 w-5 text-[#005F6B] mr-3 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Compliance</div>
                    <div className="text-sm text-gray-600">Full asset tracking and inventory.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#005F6B] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready for a modern infrastructure?</h3>
              <p className="text-white/80 mb-6 text-sm">
                Let&apos;s discuss how we can standardize your hardware and reduce your operational risks.
              </p>
              <Link 
                href="/contact"
                className="block w-full py-3 px-4 bg-white text-[#005F6B] text-center rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
