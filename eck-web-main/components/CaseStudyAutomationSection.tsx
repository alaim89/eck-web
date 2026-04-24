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
    <section className="section-container bg-white">
      {/* Automation Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="network-grid opacity-[0.03]" />
        
        {/* Branded Glow Blobs */}
        <div className="glow-accent top-0 right-1/4 w-[600px] h-[600px] -translate-y-1/2 opacity-20" />
        <div className="glow-accent bottom-0 left-1/4 w-[600px] h-[600px] translate-y-1/2 opacity-30" />
        
        {/* Flow Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 200 100 400 300 1200 200" fill="none" stroke="#005F6B" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M-100 600 C 300 700 700 500 1200 600" fill="none" stroke="#005F6B" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            {badge && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/[0.03] border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
                {badge}
              </div>
            )}
            <h2 className="title-h2 mb-8">
              {title}
            </h2>
            <p className="lead-text max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
