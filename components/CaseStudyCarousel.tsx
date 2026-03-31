'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Building2, Activity, ShieldCheck, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function CaseStudyCarousel() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const caseStudies = t.caseStudies.items.map((item: any, i: number) => ({
    ...item,
    icon: i === 0 || i === 2 || i === 4 ? Building2 : i === 1 || i === 6 || i === 9 ? Activity : ShieldCheck
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
        {caseStudies.map((study, i) => (
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
              className="group block h-full p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2 text-black leading-tight group-hover:text-primary transition-colors duration-300">
                {study.title}
              </h3>
              <div className="text-sm text-gray-600 font-medium mb-6">{study.company}</div>
              
              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3 text-base">
                {study.summary}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-black font-bold text-sm group-hover:gap-3 transition-all">
                  {t.caseStudies.readMore}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <study.icon className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
