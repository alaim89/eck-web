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
}

export function FaqSection({ title, items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/20"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`} 
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
                role="region"
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed text-lg border-t border-gray-50">
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
