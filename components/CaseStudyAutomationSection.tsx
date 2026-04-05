'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Network } from 'lucide-react';

interface CaseStudyAutomationSectionProps {
  children: React.ReactNode;
  badge?: string;
  title: string;
  description: string;
}

export function CaseStudyAutomationSection({
  children,
  badge,
  title,
  description
}: CaseStudyAutomationSectionProps) {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Automation Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        
        {/* Branded Glow Blobs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] translate-y-1/2" />
        
        {/* Flow Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 200 100 400 300 1200 200" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M-100 600 C 300 700 700 500 1200 600" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Network className="w-3 h-3" />
                {badge}
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed opacity-90">
              {description}
            </p>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
