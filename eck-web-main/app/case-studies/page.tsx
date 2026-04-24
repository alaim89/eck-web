import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck, Database, Users, Mail, Shield } from "lucide-react";
import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata = getMetadata({
  title: "Case Studies & Erfolgsgeschichten",
  description: "Erfahren Sie, wie wir Unternehmen dabei geholfen haben, ihre IT-Infrastruktur zu modernisieren, Sicherheit zu erhöhen und digitale Prozesse zu optimieren.",
  canonical: "/case-studies",
});

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3 h-3" />
              Erfolgsgeschichten
            </div>
            <h1 className="title-h1 mb-8">
              Erfolgsgeschichten unserer Kunden
            </h1>
            <p className="lead-text mx-auto">
              Erfahren Sie, wie Ecksolution-IT Unternehmen dabei geholfen hat, IT-Chaos zu beseitigen, Daten zu sichern und mit Vertrauen zu skalieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.slug}
                slug={study.slug}
                company={study.company}
                category={study.category}
                title={study.title}
                summary={study.summary}
                iconName={study.icon}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
