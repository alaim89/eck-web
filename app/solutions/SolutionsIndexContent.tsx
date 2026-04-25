import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { solutionsData } from "@/lib/solutions-data";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Cpu,
  Server,
  Database,
  Cloud,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { translations } from "@/lib/translations";

const iconMap: Record<string, any> = {
  "managed-backup": Database,
  "microsoft-365-migration": Zap,
  "azure-migration": Cloud,
  "hybrid-it-infrastruktur": Server,
  "managed-it-service": Activity,
  "externer-it-verantwortlicher": ShieldCheck,
  "it-sicherheit": Lock,
  "endpoint-firewall-security": ShieldCheck,
  "disaster-recovery": Database,
  "netzwerk-management": Activity,
  "hardware-client-management": Settings,
  "azure-hybrid-betreuung": Cloud,
  "hybrid-cloud-transformation": Zap,
  "it-projekte-mit-slas": Settings,
  "it-risiko-audit": ShieldCheck,
  "strategische-it-betreuung": Cpu,
  "microsoft-365-compliance-betreuung": Lock,
  "it-governance-risikomanagement": ShieldCheck,
};

export default function SolutionsIndexContent() {
  const t = translations.de;

  const featuredSlugs = [
    "managed-it-service",
    "externer-it-verantwortlicher",
    "it-sicherheit",
    "it-risiko-audit",
    "strategische-it-betreuung",
    "hybrid-it-infrastruktur",
    "managed-backup",
    "azure-migration",
    "endpoint-firewall-security",
    "disaster-recovery",
    "netzwerk-management",
    "hardware-client-management",
    "azure-hybrid-betreuung",
    "microsoft-365-migration",
    "hybrid-cloud-transformation",
    "it-projekte-mit-slas",
    "microsoft-365-compliance-betreuung",
    "it-governance-risikomanagement",
  ];

  const slugs = Object.keys(solutionsData).filter((slug) =>
    featuredSlugs.includes(slug)
  );

  const problemAreas = [
    {
      anchor: "it-betrieb-stabilisieren",
      title: "IT-Betrieb stabilisieren",
      intent:
        "Suchintention: IT läuft instabil, Tickets stauen sich, Systeme reagieren nur noch reaktiv.",
      keywords: "managed IT service, IT-Betrieb stabilisieren, Monitoring, Helpdesk",
      slugs: [
        "managed-it-service",
        "netzwerk-management",
        "hardware-client-management",
        "managed-backup",
      ],
    },
    {
      anchor: "sicherheit-risiken-klaeren",
      title: "Sicherheitslücken und Risiken priorisieren",
      intent:
        "Suchintention: Sicherheits- oder Compliance-Druck ist da, aber niemand weiß, was zuerst angegangen werden muss.",
      keywords:
        "IT-Sicherheit Mittelstand, IT-Risiko-Audit, Disaster Recovery, Compliance Microsoft 365",
      slugs: [
        "it-sicherheit",
        "it-risiko-audit",
        "endpoint-firewall-security",
        "disaster-recovery",
        "microsoft-365-compliance-betreuung",
        "it-governance-risikomanagement",
      ],
    },
    {
      anchor: "cloud-migration-strukturieren",
      title: "Cloud- und Migrationsprojekte strukturieren",
      intent:
        "Suchintention: Migration ist beschlossen, aber Reihenfolge, Abhängigkeiten und Verantwortlichkeiten sind unklar.",
      keywords:
        "Azure Migration, Microsoft 365 Migration, Hybrid Cloud Transformation, IT-Projekte mit SLA",
      slugs: [
        "azure-migration",
        "microsoft-365-migration",
        "hybrid-cloud-transformation",
        "azure-hybrid-betreuung",
        "hybrid-it-infrastruktur",
        "it-projekte-mit-slas",
      ],
    },
    {
      anchor: "verantwortung-it-organisation",
      title: "Verantwortung und IT-Entscheidungen klären",
      intent:
        "Suchintention: IT wächst, aber Zuständigkeiten und Entscheidungswege sind nicht sauber definiert.",
      keywords:
        "externer IT-Verantwortlicher, strategische IT-Betreuung, IT-Governance Mittelstand",
      slugs: [
        "externer-it-verantwortlicher",
        "strategische-it-betreuung",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-black selection:bg-primary/20">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1000px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {t.nav.solutions}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              IT-Lösungen für Unternehmen,
              <br />
              deren Systeme nicht einfach nur laufen sollen
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Wenn IT gewachsen ist, Projekte festhängen oder der Betrieb zu viel
              Reibung erzeugt, braucht es keine weitere Folie. Sondern eine klare
              Lösung, die Sicherheit, Struktur und Alltag wieder zusammenbringt –
              für Teams in Niedersachsen und im Raum Hannover.
            </p>

            <Link
              href="/kontakt?type=it-check"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Situation kurz einordnen <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Problem anchors */}
        <section className="py-10 px-6 border-b border-gray-100 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs uppercase tracking-[0.16em] font-bold text-gray-500 mb-4">Direkt zum Problemfeld</p>
            <div className="flex flex-wrap gap-3">
              {problemAreas.map((area) => (
                <Link
                  key={area.anchor}
                  href={`#${area.anchor}`}
                  className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions by search intent */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lösungen nach Suchintention statt nach Service-Liste
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Jede Sektion unten adressiert ein konkretes Problem aus dem Alltag:
                von instabilem IT-Betrieb über Sicherheitsdruck bis zur unklaren
                Cloud-Migration. Wenn Ihre Situation ähnlich klingt, starten wir mit
                einem IT-Check und priorisieren den nächsten Schritt.
              </p>
            </div>

            <div className="space-y-20">
              {problemAreas.map((area) => (
                <section key={area.anchor} id={area.anchor} className="scroll-mt-36">
                  <div className="max-w-4xl mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{area.intent}</p>
                    <p className="text-sm text-gray-500">
                      Relevante Begriffe: {area.keywords}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slugs
                      .filter((slug) => area.slugs.includes(slug))
                      .map((slug) => {
                        const solution = solutionsData[slug as keyof typeof solutionsData];
                        const Icon = iconMap[slug] || Activity;

                        return (
                          <div key={slug}>
                            <Link
                              href={`/solutions/${slug}`}
                              className="group block h-full p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Icon className="w-6 h-6" />
                              </div>

                              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {solution.title}
                              </h4>

                              <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                                {solution.description}
                              </p>

                              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                                Mehr dazu <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/kontakt?type=it-check"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                    >
                      Mit IT-Check priorisieren <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/blog"
                      className="text-primary font-semibold hover:underline"
                    >
                      Passende Insights lesen
                    </Link>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-3 font-medium">
                Klingt nach Ihrer Situation?
              </p>
              <Link
                href="/kontakt?type=it-check"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Einmal gemeinsam draufschauen
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Nicht sicher, wo Sie anfangen sollen?"
          description="Oft reichen 15–30 Minuten, um zu sehen, wo es wirklich hakt und was zuerst angegangen werden sollte."
          buttonText="Kurz abstimmen"
          buttonHref="/kontakt"
        />
      </main>

      <Footer />
    </div>
  );
}
