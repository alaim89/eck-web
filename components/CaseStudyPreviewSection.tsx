'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Activity, Cpu, Network, Zap } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyPreviewSectionProps {
  title: string;
  companyType: string;
  situation: string;
  problem: string;
  decisionPoint: string;
  solution: string;
  result: string;
  slug: string;
}

export function CaseStudyPreviewSection({
  title,
  companyType,
  situation,
  problem,
  decisionPoint,
  solution,
  result,
  slug
}: CaseStudyPreviewSectionProps) {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Automation Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        
        {/* Branded Glow Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] translate-y-1/2" />
        
        {/* Flow Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100 100 Q 200 150 400 100 T 900 150" fill="none" stroke="url(#flow-gradient)" strokeWidth="2" strokeDasharray="10 10">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M-100 400 Q 300 350 600 450 T 1200 400" fill="none" stroke="url(#flow-gradient)" strokeWidth="2" strokeDasharray="10 10">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="15s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Connected Nodes Motif */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-emerald-400/30" />
        <div className="absolute top-20 left-10 w-20 h-px bg-gradient-to-r from-emerald-400/30 to-transparent" />
        <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-teal-400/30" />
        <div className="absolute bottom-40 right-20 w-px h-24 bg-gradient-to-t from-teal-400/30 to-transparent" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Network className="w-3.5 h-3.5" />
            Case Study: {companyType}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {title}
          </motion.h2>
        </div>

        {/* Premium Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          {/* Outer Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[2rem] overflow-hidden">
            {/* Subtle Inner Border Gradient */}
            <div className="absolute inset-0 rounded-[2rem] border border-emerald-500/5 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Left Column */}
              <div className="p-8 md:p-12 space-y-12">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Die Ausgangslage</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{situation}</p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Das Problem</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{problem}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-8 md:p-12 space-y-12 bg-gray-50/30">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Die Lösung</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{solution}</p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Das Ergebnis</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">{result}</p>
                </div>
              </div>
            </div>

            {/* Footer Link */}
            <div className="p-6 bg-white border-t border-gray-100 text-center">
              <Link 
                href={`/case-studies/${slug}`} 
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-all font-bold group/link"
              >
                Vollständige Case Study lesen 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">
            Kommt Ihnen das bekannt vor?
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
          >
            Jetzt IT-Check anfordern
          </Link>
        </div>
      </div>
    </section>
  );
}
