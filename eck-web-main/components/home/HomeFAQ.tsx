
'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/home-data";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item, i) => (
        <div 
          key={i}
          className={`border rounded-2xl transition-all duration-300 ${
            openIndex === i ? "bg-white border-primary/20 shadow-lg shadow-primary/5" : "bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-8 py-6 flex items-center justify-between text-left"
          >
            <span className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
              {item.question}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              openIndex === i ? "bg-primary text-white rotate-180" : "bg-white text-slate-400 shadow-sm"
            }`}>
              {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="px-8 pb-8 text-slate-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
