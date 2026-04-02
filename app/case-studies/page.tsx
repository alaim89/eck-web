import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Activity, ShieldCheck, Database, Users, Mail, Shield } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata = getMetadata({
  title: "Case Studies & Erfolgsgeschichten",
  description: "Erfahren Sie, wie wir Unternehmen dabei geholfen haben, ihre IT-Infrastruktur zu modernisieren, Sicherheit zu erhöhen und digitale Prozesse zu optimieren.",
  canonical: "/case-studies",
});

const iconMap = {
  shield: Shield,
  activity: Activity,
  database: Database,
  users: Users,
  building: Building2,
  mail: Mail,
};

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Erfolgsgeschichten unserer Kunden
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Erfahren Sie, wie Ecksolution-IT Unternehmen dabei geholfen hat, IT-Chaos zu beseitigen, Daten zu sichern und mit Vertrauen zu skalieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              const Icon = iconMap[study.icon] || Shield;
              return (
                <Link 
                  key={study.slug}
                  href={`/case-studies/${study.slug}`} 
                  className="group block p-10 rounded-3xl bg-gray-50 border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">{study.company}</h3>
                      <p className="text-sm text-gray-700">{study.category}</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {study.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Vollständige Case Study lesen <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
