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
        className={`relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-[#004a54] text-white shadow-xl shadow-primary/10 ${className}`}
      >
        {/* Network Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        {/* Subtle Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
          <p className="text-white/80 mb-6 leading-relaxed text-sm">{description}</p>
          <Link 
            href={buttonHref} 
            className="block w-full py-4 bg-white text-primary text-center rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section id={id} className={`relative overflow-hidden py-24 px-6 rounded-[3rem] bg-gradient-to-br from-primary via-[#00545e] to-[#004a54] text-white text-center ${className}`}>
      {/* Network/Flow Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 25 15 50 20 T 100 20" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0 50 Q 25 45 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0 80 Q 25 75 50 80 T 100 80" fill="none" stroke="white" strokeWidth="0.1" />
          <circle cx="20" cy="20" r="0.5" fill="white" />
          <circle cx="50" cy="20" r="0.5" fill="white" />
          <circle cx="80" cy="20" r="0.5" fill="white" />
          <circle cx="35" cy="50" r="0.5" fill="white" />
          <circle cx="65" cy="50" r="0.5" fill="white" />
          <circle cx="20" cy="80" r="0.5" fill="white" />
          <circle cx="50" cy="80" r="0.5" fill="white" />
          <circle cx="80" cy="80" r="0.5" fill="white" />
        </svg>
      </div>

      {/* Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            {title}
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={buttonHref}
              className="px-10 py-5 bg-white text-primary hover:bg-white/90 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 active:scale-[0.98] w-full sm:w-auto"
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
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">Rufen Sie uns an</div>
                  <div className="text-lg font-semibold tracking-tight">+49 (0) 176 34580607</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">Schreiben Sie uns</div>
                  <div className="text-lg font-semibold tracking-tight">info@ecksolution-it.de</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
