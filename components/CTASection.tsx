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
        className={`relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-900/10 ${className}`}
      >
        {/* Subtle Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-[60px]" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-400/20 rounded-full blur-[60px]" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
          <Link 
            href={buttonHref} 
            className="block w-full py-4 bg-white text-emerald-700 text-center rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section id={id} className={`relative overflow-hidden py-24 px-6 rounded-[3rem] bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white text-center ${className}`}>
      {/* Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-400/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal-400/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            {title}
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={buttonHref}
              className="px-10 py-5 bg-white text-emerald-700 hover:bg-white/90 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/30 active:scale-[0.98] w-full sm:w-auto"
            >
              {buttonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link 
                href={secondaryButtonHref} 
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all active:scale-[0.98] w-full sm:w-auto border border-white/20 backdrop-blur-sm"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>

          {showContactOptions && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 mt-16 border-t border-white/10">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-700 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Rufen Sie uns an</div>
                  <div className="text-lg font-semibold">+49 (0) 176 34580607</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-700 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Schreiben Sie uns</div>
                  <div className="text-lg font-semibold">info@ecksolution-it.de</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
