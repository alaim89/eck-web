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
      className="group relative block p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(16,185,129,0.12)] transition-all duration-700 hover:-translate-y-2 flex flex-col overflow-hidden"
    >
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/5 group-hover:to-cyan-500/10 transition-all duration-700 rounded-[2.5rem] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
              <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{company}</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{category}</p>
            </div>
          </div>
          <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100">
            Case Study
          </div>
        </div>

        <h4 className="text-2xl font-bold mb-4 text-gray-900 leading-tight group-hover:text-emerald-800 transition-colors">
          {title}
        </h4>
        
        <p className="text-gray-600 leading-relaxed mb-10 opacity-90 line-clamp-3">
          {summary}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
            Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
