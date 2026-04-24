'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, LucideIcon, Shield, Building2, Activity, ShieldCheck, Database, Users, Mail } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  shield: Shield,
  activity: Activity,
  database: Database,
  users: Users,
  building: Building2,
  mail: Mail,
};

interface CaseStudyCardProps {
  slug: string;
  company: string;
  category: string;
  title: string;
  summary: string;
  iconName?: string;
}

export function CaseStudyCard({
  slug,
  company,
  category,
  title,
  summary,
  iconName = 'shield'
}: CaseStudyCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Shield;
  return (
    <Link 
      href={`/case-studies/${slug}`} 
      className="surface-card p-10 flex flex-col group"
    >
      {/* Subtle Gradient Glow on Hover */}
      <div className="glow-accent -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/[0.05] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
              <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors text-lg tracking-tight">{company}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{category}</p>
            </div>
          </div>
          <div className="text-[9px] font-bold text-primary uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-primary/[0.03] border border-primary/10 shadow-sm">
            Case Study
          </div>
        </div>

        <h4 className="text-2xl font-bold mb-5 text-slate-900 leading-tight group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h4>
        
        <p className="text-slate-600 leading-relaxed mb-12 opacity-90 line-clamp-3 font-light">
          {summary}
        </p>

        <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
          <span className="brand-link text-sm">
            Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
