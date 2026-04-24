'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Building2, Activity, ShieldCheck, Database, Users, Mail, Shield, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { caseStudies as allCaseStudies } from '@/lib/case-studies-data';

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  activity: Activity,
  shield: Shield,
  database: Database,
  users: Users,
  mail: Mail,
};

export function CaseStudyCarousel() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredCaseStudies = allCaseStudies
    .filter((study) => study.featured)
    .map((study) => ({
      ...study,
      href: `/case-studies/${study.slug}`,
      icon: iconMap[study.icon] || ShieldCheck,
    }));

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      scrollElement?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute -top-16 right-0 flex gap-2">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`p-3 rounded-full border border-slate-200 transition-all ${
            canScrollLeft ? 'bg-white text-slate-900 hover:bg-slate-50 shadow-sm' : 'bg-slate-50 text-slate-300 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`p-3 rounded-full border border-slate-200 transition-all ${
            canScrollRight ? 'bg-white text-slate-900 hover:bg-slate-50 shadow-sm' : 'bg-slate-50 text-slate-300 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-16 pt-10 px-10 -mx-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featuredCaseStudies.map((study: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="min-w-[320px] md:min-w-[380px] lg:min-w-[400px] snap-start"
          >
            <Link 
              href={study.href}
              className="surface-card p-10 flex flex-col group h-full"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="glow-accent -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.05] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <study.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-[9px] font-bold text-primary uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-primary/[0.03] border border-primary/10 shadow-sm">
                    Case Study
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {study.title}
                </h3>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {study.company}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-10 line-clamp-3 text-base opacity-90 font-light">
                  {study.summary}
                </p>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="brand-link text-sm">
                    {t.caseStudies.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
