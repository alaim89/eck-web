import { getMetadata } from "@/lib/seo";
import BlogPostContent from "./BlogPostContent";
import Link from "next/link";

const BLOG_POSTS = {
  "cloud-migration-mittelstand-2024": {
    title: "Cloud-Migration für den Mittelstand: Ein Leitfaden für 2024",
    date: "20. März 2024",
    readTime: "8 min",
    author: "Andreas Eckert",
    category: "Cloud & Infrastruktur",
    image: "https://picsum.photos/seed/cloud/1200/600",
    content: `
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
    `
  },
  "it-sicherheit-praevention-vs-reaktion": {
    title: "IT-Sicherheit: Warum Prävention günstiger ist als jeder Notfalleinsatz",
    date: "12. März 2024",
    readTime: "6 min",
    author: "Andreas Eckert",
    category: "Security",
    image: "https://picsum.photos/seed/security/1200/600",
    content: `
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
    `
  },
  "managed-services-vs-inhouse-it": {
    title: "Managed Services vs. Inhouse-IT: Die richtige Balance finden",
    date: "05. März 2024",
    readTime: "7 min",
    author: "Andreas Eckert",
    category: "Strategie",
    image: "https://picsum.photos/seed/strategy/1200/600",
    content: `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Die Frage ist nicht "Entweder-oder", sondern "Wie viel von beidem?". Ein hybrider Ansatz kombiniert internes Domänenwissen mit externer Spezialisierung.
      </p>
      
      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Vorteile von Managed Services</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Planbare Kosten, 24/7 Verfügbarkeit und Zugriff auf Expertenwissen, das man intern kaum vorhalten kann.
      </p>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS[resolvedParams.slug as keyof typeof BLOG_POSTS];
  
  if (!post) return getMetadata({ title: 'Artikel nicht gefunden' });

  return getMetadata({
    title: post.title,
    description: post.title + ". Lesen Sie mehr in unserem Blog über IT-Strategie und Technologie.",
    canonical: `/blog/${resolvedParams.slug}`,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS[resolvedParams.slug as keyof typeof BLOG_POSTS];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-primary font-bold hover:underline">Zurück zum Blog</Link>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}
