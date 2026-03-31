"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudiesIndex() {
  const { t } = useLanguage();

  const getIcon = (href: string) => {
    if (href.includes('azure') || href.includes('network') || href.includes('roadmap')) {
      return <Activity className="w-5 h-5 text-primary" />;
    }
    if (href.includes('security') || href.includes('backup') || href.includes('audit')) {
      return <ShieldCheck className="w-5 h-5 text-primary" />;
    }
    return <Building2 className="w-5 h-5 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              {t.caseStudies.pageTitle}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.caseStudies.pageSubheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.caseStudies.items.map((item: any, index: number) => (
              <Link 
                key={index}
                href={item.href} 
                className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {getIcon(item.href)}
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{item.company}</h3>
                    <p className="text-sm text-gray-700">{item.title}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {item.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  {t.caseStudies.readMore} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

