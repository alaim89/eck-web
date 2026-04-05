'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
  variant?: 'full' | 'card';
  id?: string;
  showContactOptions?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
  variant = 'full',
  id,
  showContactOptions = false
}) => {
  if (variant === 'card') {
    return (
      <motion.div 
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`brand-surface-gradient p-10 rounded-[2.5rem] shadow-premium group ${className}`}
      >
        {/* Network Pattern Overlay */}
        <div className="network-grid opacity-[0.08]" />
        
        {/* Subtle Glows */}
        <div className="glow-accent -top-24 -right-24 w-64 h-64 opacity-20" />
        <div className="glow-accent -bottom-24 -left-24 w-64 h-64 bg-white/10 opacity-10" />
        
        <div className="relative z-10">
          <h3 className="title-h3 mb-4 text-white">{title}</h3>
          <p className="text-white/80 mb-8 leading-relaxed font-light max-w-[45ch]">{description}</p>
          <Link 
            href={buttonHref} 
            className="block w-full py-4 bg-white text-primary text-center rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section id={id} className={`brand-surface-gradient section-container rounded-[4rem] mx-4 md:mx-8 mb-12 shadow-2xl ${className}`}>
      {/* Network/Flow Pattern */}
      <div className="network-grid opacity-[0.06]" />

      {/* Glow Elements */}
      <div className="glow-accent top-0 left-1/4 w-[40rem] h-[40rem] -translate-y-1/2 opacity-20" />
      <div className="glow-accent bottom-0 right-1/4 w-[40rem] h-[40rem] translate-y-1/2 opacity-30" />
      
      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="title-h1 text-white mb-8 max-w-4xl mx-auto">
            {title}
          </h2>
          <p className="lead-text text-white/80 mb-12 mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={buttonHref}
              className="px-12 py-5 bg-white text-primary hover:bg-white/90 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-primary/40 hover:shadow-white/20 active:scale-[0.98] w-full sm:w-auto"
            >
              {buttonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link 
                href={secondaryButtonHref} 
                className="inline-flex items-center justify-center px-12 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all active:scale-[0.98] w-full sm:w-auto border border-white/20 backdrop-blur-md"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>

          {showContactOptions && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 pt-16 mt-20 border-t border-white/10">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-white/40 uppercase font-bold tracking-[0.25em] mb-1">Rufen Sie uns an</div>
                  <div className="text-xl font-semibold tracking-tight">0176 34580607</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-white/40 uppercase font-bold tracking-[0.25em] mb-1">Schreiben Sie uns</div>
                  <div className="text-xl font-semibold tracking-tight">info@ecksolution-it.de</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
