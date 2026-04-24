
'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, Activity, Cpu } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { HERO_VARIANTS } from "@/lib/home-data";

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % HERO_VARIANTS.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 8000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  IT-Partner für den deutschen Mittelstand
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
                  Ihre IT muss einfach <span className="text-primary">funktionieren.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium opacity-90">
                  {HERO_VARIANTS[activeIndex].subline}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href={HERO_VARIANTS[activeIndex].primaryCTA.href}
                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    {HERO_VARIANTS[activeIndex].primaryCTA.text}
                  </Link>
                  <Link
                    href={HERO_VARIANTS[activeIndex].secondaryCTA.href}
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
                  >
                    {HERO_VARIANTS[activeIndex].secondaryCTA.text}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex gap-3 mt-16">
              {HERO_VARIANTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === i ? "w-12 bg-primary" : "w-3 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Gehe zu Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:h-[600px] flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[500px]"
              >
                <HeroVisual type={HERO_VARIANTS[activeIndex].visualType} />
              </motion.div>
            </AnimatePresence>
            
            {/* Float Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">System Status</div>
                <div className="text-sm font-bold text-slate-900">Proaktiv Stabil</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Cloud Health</div>
                <div className="text-sm font-bold text-slate-900">Optimiert & Sicher</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
