'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
  sectionId?: string;
}

export function FaqSection({ title, items, sectionId = "faq" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={sectionId} className="section-container bg-white border-t border-slate-100">
      <div className="page-container max-w-[900px]">
        <h2 id={`${sectionId}-heading`} className="title-h2 mb-16 text-center">{title}</h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-3xl overflow-hidden transition-all duration-500 ${
                openIndex === index 
                  ? 'border-primary/20 bg-primary/[0.02] shadow-premium' 
                  : 'border-slate-100 bg-white hover:border-primary/10 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`${sectionId}-answer-${index}`}
                id={`${sectionId}-question-${index}`}
              >
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  openIndex === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                }`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              <div
                id={`${sectionId}-answer-${index}`}
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
                role="region"
                aria-labelledby={`${sectionId}-question-${index}`}
              >
                <div className="p-8 pt-0 text-slate-600 leading-relaxed text-lg font-light border-t border-primary/5">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
