import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMetadata } from "@/lib/seo";
import BlogPostContent from "./BlogPostContent";
import { BLOG_POSTS } from "@/lib/blog-data";

const BLOG_CONTENT_BY_SLUG: Record<string, string> = {
  "cloud-migration-mittelstand-2024": `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Die Cloud ist längst kein Trend mehr, sondern das Rückgrat moderner Unternehmen. Doch gerade im Mittelstand herrscht oft Unsicherheit: Wie gelingt der Umstieg, ohne den laufenden Betrieb zu gefährden?
      </p>
      
      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Status Quo: Warum jetzt der richtige Zeitpunkt ist</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Veraltete On-Premise-Server sind nicht nur wartungsintensiv, sondern stellen zunehmend ein Sicherheitsrisiko dar. Im Jahr 2024 ist die Cloud die Antwort auf Fachkräftemangel und steigende Anforderungen an die Skalierbarkeit.
      </p>
      
      <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 my-12">
        <h3 className="text-xl font-bold mb-4 text-black">Die 3 Säulen einer erfolgreichen Migration:</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3"><span className="text-primary font-bold">01.</span> Strategische Planung statt blinder Aktionismus</li>
          <li className="flex gap-3"><span className="text-primary font-bold">02.</span> Fokus auf Datensicherheit und Compliance (DSGVO)</li>
          <li className="flex gap-3"><span className="text-primary font-bold">03.</span> Begleitendes Change Management für die Belegschaft</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Herausforderungen im Mittelstand</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Oft bremsen gewachsene Strukturen und "Legacy-Systeme" den Fortschritt. Hier ist eine schrittweise Migration (Hybrid Cloud) oft sinnvoller als ein radikaler "Lift and Shift".
      </p>

      <blockquote className="border-l-4 border-primary pl-8 my-16 italic text-2xl text-gray-900 font-medium leading-relaxed">
        "Cloud-Migration ist kein technisches Projekt, sondern eine strategische Entscheidung für die Zukunftsfähigkeit Ihres Unternehmens."
      </blockquote>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Fazit</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Wer heute die Weichen stellt, sichert sich den Wettbewerbsvorteil von morgen. Eine fundierte Architekturberatung ist dabei der Schlüssel zum Erfolg.
      </p>
    `,
  "it-sicherheit-praevention-vs-reaktion": `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Wenn die Systeme stehen, ist es meistens schon zu spät. Der finanzielle Schaden eines Ransomware-Angriffs übersteigt die Kosten für präventive Maßnahmen um ein Vielfaches.
      </p>
      
      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Die versteckten Kosten der Reaktion</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Neben den direkten Kosten für die Wiederherstellung kommen oft Reputationsverlust und rechtliche Konsequenzen hinzu. Ein Notfalleinsatz unter Zeitdruck ist zudem immer teurer als geplante Wartung.
      </p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Proaktive Stabilität als Geschäftsmodell</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Durch kontinuierliches Monitoring und regelmäßige Audits lassen sich Schwachstellen schließen, bevor sie ausgenutzt werden. Wir nennen das "Managed Security".
      </p>
    `,
  "managed-services-vs-inhouse-it": `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Die Frage ist nicht "Entweder-oder", sondern "Wie viel von beidem?". Ein hybrider Ansatz kombiniert internes Domänenwissen mit externer Spezialisierung.
      </p>
      
      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Vorteile von Managed Services</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Planbare Kosten, 24/7 Verfügbarkeit und Zugriff auf Expertenwissen, das man intern kaum vorhalten kann.
      </p>
    `,
  "entra-join-vpn-abloesen": `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Viele Unternehmen arbeiten noch immer mit VPN-Zugängen, nur um auf Systeme zuzugreifen oder Updates zu verteilen. Das funktioniert – aber es bremst.
      </p>
      
      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Was bedeutet „Entra Join Only“?</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Statt Geräte in ein klassisches Firmennetz einzubinden, werden sie direkt in die Cloud integriert. Eine saubere hybride IT-Infrastruktur ist dafür die Grundlage.
      </p>
      
      <ul className="space-y-4 text-gray-700 mb-12">
        <li className="flex gap-3"><span className="text-primary font-bold">•</span> Keine lokalen Server-Abhängigkeiten</li>
        <li className="flex gap-3"><span className="text-primary font-bold">•</span> Zentrale Verwaltung über Entra ID</li>
        <li className="flex gap-3"><span className="text-primary font-bold">•</span> Richtlinien & Updates direkt aus der Cloud</li>
      </ul>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Die wichtigsten Vorteile</h2>
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-black">Arbeiten ohne VPN</h3>
          <p className="text-gray-600">Kein Einwählen mehr. Kein „VPN ist langsam“. Zugriff und Updates laufen direkt über die Cloud.</p>
        </div>
        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-black">Mehr Sicherheit</h3>
          <p className="text-gray-600">Geräte sind nicht mehr Teil eines flachen Netzwerks. Zugriff basiert auf Identität und Zustand (Zero Trust).</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Fazit</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        VPN war lange Standard. Heute ist es oft eher ein Umweg. Mit Entra Join verschiebt sich der Fokus: von Netzwerken hin zu Identität, Struktur und Kontrolle.
      </p>
    `,
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const formatGermanDate = (isoDate: string) =>
  new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(isoDate));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return getMetadata({
      title: "Artikel nicht gefunden",
      robots: { index: false, follow: false },
    });
  }

  return getMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const content = BLOG_CONTENT_BY_SLUG[slug];

  if (!post || !content) {
    notFound();
  }

  return (
    <BlogPostContent
      slug={slug}
      post={{
        ...post,
        date: formatGermanDate(post.date),
        content,
      }}
    />
  );
}
