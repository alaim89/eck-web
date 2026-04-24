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
    <section className="section-container bg-white">
      {/* Automation Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="network-grid opacity-[0.03]" />
        
        {/* Branded Glow Blobs */}
        <div className="glow-accent top-0 left-1/4 w-[600px] h-[600px] -translate-y-1/2 opacity-20" />
        <div className="glow-accent bottom-0 right-1/4 w-[600px] h-[600px] translate-y-1/2 opacity-30" />
        
        {/* Flow Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient-preview" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005F6B" stopOpacity="0" />
              <stop offset="50%" stopColor="#005F6B" stopOpacity="1" />
              <stop offset="100%" stopColor="#005F6B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100 150 Q 300 200 500 150 T 1100 200" fill="none" stroke="url(#flow-gradient-preview)" strokeWidth="1.5" strokeDasharray="12 12">
            <animate attributeName="stroke-dashoffset" from="120" to="0" dur="12s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/[0.03] border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm"
          >
            Case Study: {companyType}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="title-h2 mb-6 max-w-4xl mx-auto"
          >
            {title}
          </motion.h2>
        </div>

        {/* Premium Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="group relative"
        >
          {/* Outer Glow Effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/5 via-accent-cyan/10 to-primary/5 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
          
          <div className="surface-card overflow-hidden bg-white/90 backdrop-blur-xl">
            {/* Subtle Inner Border Gradient */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-primary/5 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Left Column */}
              <div className="p-10 md:p-14 space-y-14">
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.05] flex items-center justify-center shadow-inner">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Die Ausgangslage</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">{situation}</p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shadow-inner">
                      <Zap className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Das Problem</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">{problem}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-10 md:p-14 space-y-14 bg-slate-50/40">
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shadow-inner">
                      <Cpu className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Die Lösung</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">{solution}</p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Das Ergebnis</h3>
                  </div>
                  <p className="text-slate-900 leading-relaxed font-medium text-xl">{result}</p>
                </div>
              </div>
            </div>

            {/* Footer Link */}
            <div className="p-8 bg-white border-t border-slate-100 text-center">
              <Link 
                href={`/case-studies/${slug}`} 
                className="brand-link text-lg"
              >
                Vollständige Case Study lesen 
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-8 font-medium tracking-wide">
            Kommt Ihnen das bekannt vor?
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 active:scale-[0.98] hover:-translate-y-1"
          >
            Jetzt IT-Check anfordern
          </Link>
        </div>
      </div>
    </section>
  );
}
