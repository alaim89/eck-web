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
    <div className="relative group">
      {/* Navigation Arrows */}
      <div className="absolute -top-16 right-0 flex gap-2">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`p-3 rounded-full border border-gray-200 transition-all ${
            canScrollLeft ? 'bg-white text-black hover:bg-gray-50' : 'bg-gray-50 text-gray-300 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`p-3 rounded-full border border-gray-200 transition-all ${
            canScrollRight ? 'bg-white text-black hover:bg-gray-50' : 'bg-gray-50 text-gray-300 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pt-4 px-1"
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
              className="group relative block h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(16,185,129,0.12)] transition-all duration-700 hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/5 group-hover:to-cyan-500/10 transition-all duration-700 rounded-[2.5rem] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <study.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100">
                    Case Study
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                  {study.title}
                </h3>
                <div className="text-sm text-gray-500 font-medium mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {study.company}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3 text-base opacity-90">
                  {study.summary}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
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
