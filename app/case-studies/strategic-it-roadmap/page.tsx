'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Map, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function StrategicRoadmapCaseStudy() {
  const { t } = useLanguage();
  const study = t.caseStudies.items[9]; // Strategic Roadmap is at index 9

  if (!study || !study.details) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[#005F6B] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.caseStudies.backToStudies}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#005F6B]/10 text-[#005F6B] text-sm font-medium mb-6">
              <Map className="w-4 h-4 mr-2" />
              Case Study: {study.title}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {study.summary}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {study.company}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {study.details.result.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl font-bold text-[#005F6B] mb-1">{metric.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-2xl relative group">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
                alt="Strategic Planning Session"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#005F6B]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mission Aligned</div>
                  <div className="text-sm text-gray-600">IT investments now directly support NGO goals.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Situation & Problem */}
          <div className="lg:col-span-2 space-y-16">
            {/* Situation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#005F6B]/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#005F6B]" />
                </div>
                {t.caseStudies.situation.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {study.details.situation}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                {t.caseStudies.problem.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.details.problem.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Decision Point */}
            <section className="bg-[#005F6B] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  {t.caseStudies.decisionPoint.title}
                </h2>
                <p className="text-lg text-white/90 italic">
                  &quot;{study.details.decisionPoint}&quot;
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                {t.caseStudies.solution.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {study.details.solution.introduction}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.details.solution.points.map((point, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Results & Stability */}
          <div className="space-y-8">
            {/* Results Card */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white sticky top-24">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#005F6B]" />
                {t.caseStudies.result.title}
              </h2>
              <div className="space-y-4 mb-8">
                {study.details.result.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#005F6B] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  {t.caseStudies.longTermStability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  {study.details.longTermStability}
                </p>
              </div>

              <Link 
                href="/contact"
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#005F6B] text-white font-bold hover:opacity-90 transition-opacity"
              >
                {t.managedItPage.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
