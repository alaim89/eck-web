import Link from "next/link";
import type { ReactNode } from "react";

export interface StructuredArticle {
  hero: {
    category: string;
    title: string;
    excerpt: string;
    readTime?: string;
    updatedAt?: string;
  };
  reality: { heading: string; paragraphs: string[] };
  problem: { heading: string; paragraphs: string[]; points?: string[] };
  insight: { heading: string; statement: string; supporting?: string };
  model: {
    heading: string;
    intro?: string;
    oldFlow: string[];
    newFlow: string[];
    notes?: string[];
  };
  compare: {
    heading: string;
    legacyLabel: string;
    modernLabel: string;
    legacyPoints: string[];
    modernPoints: string[];
  };
  practical: {
    heading: string;
    intro?: string;
    groups: Array<{ title: string; points: string[] }>;
  };
  consequence: { heading: string; paragraphs: string[] };
  decision: { heading: string; text: string };
}

function BlockShell({
  title,
  children,
  tone = "plain",
}: {
  title: string;
  children: ReactNode;
  tone?: "plain" | "muted" | "accent";
}) {
  const toneClass =
    tone === "muted"
      ? "bg-slate-50/70 border border-slate-200/70"
      : tone === "accent"
        ? "border-l-2 border-primary pl-6 md:pl-8"
        : "";

  return (
    <section className={`py-10 md:py-12 ${toneClass}`}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{title}</h2>
      {children}
    </section>
  );
}

export function BlogHero({ hero }: { hero: StructuredArticle["hero"] }) {
  return (
    <header className="pt-4 pb-10 md:pb-12 border-b border-slate-200/80">
      <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary mb-5">{hero.category}</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl">{hero.title}</h1>
      <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl">{hero.excerpt}</p>
      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider font-semibold text-slate-500">
        {hero.readTime && <span>{hero.readTime} Lesezeit</span>}
        {hero.updatedAt && (
          <>
            <span aria-hidden>•</span>
            <span>Aktualisiert: {hero.updatedAt}</span>
          </>
        )}
      </div>
      <div className="mt-8">
        <Link
          href="/kontakt?type=it-check"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          IT-Check starten
        </Link>
      </div>
    </header>
  );
}

export function RealityBlock({ section }: { section: StructuredArticle["reality"] }) {
  return (
    <BlockShell title={section.heading}>
      <div className="space-y-4 text-slate-700 leading-relaxed text-lg max-w-3xl">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </BlockShell>
  );
}

export function ProblemBlock({ section }: { section: StructuredArticle["problem"] }) {
  return (
    <BlockShell title={section.heading} tone="muted">
      <div className="px-6 md:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {section.points && (
          <ul className="mt-6 space-y-3 text-slate-800">
            {section.points.map((point) => (
              <li key={point} className="pl-4 border-l border-primary/30">{point}</li>
            ))}
          </ul>
        )}
      </div>
    </BlockShell>
  );
}

export function InsightBlock({ section }: { section: StructuredArticle["insight"] }) {
  return (
    <BlockShell title={section.heading} tone="accent">
      <p className="text-2xl md:text-3xl font-semibold leading-tight text-slate-900 max-w-3xl">{section.statement}</p>
      {section.supporting && <p className="mt-4 text-slate-600 max-w-3xl">{section.supporting}</p>}
    </BlockShell>
  );
}

export function SystemModelBlock({ section }: { section: StructuredArticle["model"] }) {
  return (
    <BlockShell title={section.heading}>
      {section.intro && <p className="text-slate-700 mb-8 max-w-3xl">{section.intro}</p>}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.16em] font-bold text-slate-500 mb-4">Früher</p>
          <p className="font-medium text-slate-800">{section.oldFlow.join(" → ")}</p>
        </div>
        <div className="border border-primary/30 rounded-2xl p-6 bg-primary/[0.03]">
          <p className="text-xs uppercase tracking-[0.16em] font-bold text-primary mb-4">Heute</p>
          <p className="font-semibold text-slate-900">{section.newFlow.join(" → ")}</p>
        </div>
      </div>
      {section.notes && (
        <ul className="mt-8 space-y-2 text-slate-700">
          {section.notes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </BlockShell>
  );
}

export function CompareBlock({ section }: { section: StructuredArticle["compare"] }) {
  return (
    <BlockShell title={section.heading}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-4">{section.legacyLabel}</h3>
          <ul className="space-y-2 text-slate-700">
            {section.legacyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-4">{section.modernLabel}</h3>
          <ul className="space-y-2 text-slate-700">
            {section.modernPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </BlockShell>
  );
}

export function PracticalBlock({ section }: { section: StructuredArticle["practical"] }) {
  return (
    <BlockShell title={section.heading}>
      {section.intro && <p className="text-slate-700 mb-8 max-w-3xl">{section.intro}</p>}
      <div className="space-y-6">
        {section.groups.map((group) => (
          <div key={group.title} className="pb-5 border-b border-slate-200/80 last:border-0">
            <h3 className="font-bold text-slate-900 mb-3">{group.title}</h3>
            <ul className="space-y-2 text-slate-700">
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlockShell>
  );
}

export function ConsequenceBlock({ section }: { section: StructuredArticle["consequence"] }) {
  return (
    <BlockShell title={section.heading} tone="muted">
      <div className="px-6 md:px-8 space-y-4 text-slate-700">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </BlockShell>
  );
}

export function BlogCTA({ section }: { section: StructuredArticle["decision"] }) {
  return (
    <section className="mt-12 rounded-3xl bg-primary text-white p-8 md:p-12">
      <h2 className="text-3xl font-bold tracking-tight mb-4">{section.heading}</h2>
      <p className="text-white/85 leading-relaxed max-w-3xl mb-8">{section.text}</p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/kontakt?type=it-check"
          className="px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-slate-100 transition-colors"
        >
          IT-Check starten
        </Link>
        <Link href="/kontakt" className="px-6 py-3 rounded-xl border border-white/50 font-semibold hover:bg-white/10 transition-colors">
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}

export function BlogArticleLayout({ article }: { article: StructuredArticle }) {
  return (
    <>
      <BlogHero hero={article.hero} />
      <RealityBlock section={article.reality} />
      <ProblemBlock section={article.problem} />
      <InsightBlock section={article.insight} />
      <SystemModelBlock section={article.model} />
      <CompareBlock section={article.compare} />
      <PracticalBlock section={article.practical} />
      <ConsequenceBlock section={article.consequence} />
      <BlogCTA section={article.decision} />
    </>
  );
}
