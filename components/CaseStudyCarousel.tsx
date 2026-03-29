'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Building2, Activity, ShieldCheck, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  title: string;
  company: string;
  summary: string;
  href: string;
  icon: LucideIcon;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Migration to Microsoft 365 without downtime",
    company: "Mid-sized company (40–80 employees)",
    summary: "How a mid-sized company transitioned from Google Workspace to a structured, secure Microsoft 365 environment with zero downtime.",
    href: "/case-studies/microsoft-365-migration",
    icon: Building2
  },
  {
    title: "Stable and scalable IT with Microsoft Azure",
    company: "Tech company (100–150 employees)",
    summary: "Solving IT complexity and scalability issues by migrating to a structured Microsoft Azure cloud architecture.",
    href: "/case-studies/azure-cloud-infrastructure",
    icon: Activity
  },
  {
    title: "Reliable IT operations with full responsibility",
    company: "SME (30–60 employees)",
    summary: "How an SME without an internal IT department achieved stable and predictable IT operations through a managed service model.",
    href: "/case-studies/managed-it-operations",
    icon: Building2
  },
  {
    title: "Audit-ready IT through structured security",
    company: "Regulated Company (50–100 employees)",
    summary: "Achieving audit-ready IT through a structured security and governance framework for regulatory compliance.",
    href: "/case-studies/security-compliance",
    icon: ShieldCheck
  },
  {
    title: "Co-Managed IT for a Software Agency",
    company: "Software Agency (20–40 employees)",
    summary: "Empowering an internal team with expert support and enterprise tools to handle rapid growth and security.",
    href: "/case-studies/co-managed-it",
    icon: Building2
  },
  {
    title: "Bulletproof Backup for a Law Firm",
    company: "Law Firm (15–30 employees)",
    summary: "Ensuring business continuity with immutable backups and rapid recovery after a ransomware attack.",
    href: "/case-studies/managed-backup",
    icon: ShieldCheck
  },
  {
    title: "Network Optimization for a Logistics Hub",
    company: "Logistics Hub (50–100 employees)",
    summary: "Eliminating Wi-Fi dead zones and connection dropouts to improve warehouse efficiency and shipping accuracy.",
    href: "/case-studies/network-management",
    icon: Activity
  },
  {
    title: "Hardware Refresh for a Design Agency",
    company: "Design Agency (25–50 employees)",
    summary: "Implementing standardized high-performance workstations to eliminate software crashes and lost billable hours.",
    href: "/case-studies/hardware-lifecycle",
    icon: Building2
  },
  {
    title: "IT Risk Audit for a Manufacturing Plant",
    company: "Manufacturing Plant (80–120 employees)",
    summary: "Uncovering hidden vulnerabilities and creating a remediation roadmap to ensure insurance compliance and security.",
    href: "/case-studies/it-risk-audit",
    icon: ShieldCheck
  },
  {
    title: "Strategic IT Roadmap for a Non-profit",
    company: "Non-profit (40–60 employees)",
    summary: "Aligning technology with long-term goals to reduce reactive spending and launch new digital services.",
    href: "/case-studies/strategic-it-roadmap",
    icon: Activity
  }
];

export function CaseStudyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
                  Read full case study 
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
