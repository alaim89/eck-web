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
  "vpn-abloesen-im-mittelstand-entra-join-only": `
      <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
        Warum „Entra Join Only“ kein IT-Projekt ist – sondern eine Richtungsentscheidung.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">Viele Unternehmen im Mittelstand haben eine moderne IT.</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>Microsoft 365 ist eingeführt.</li>
        <li>Azure wird genutzt.</li>
        <li>Geräte sind halbwegs aktuell.</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Und trotzdem: Der Zugriff läuft noch über VPN. Nicht, weil es gut ist. Sondern weil es „immer schon so war“.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Das eigentliche Problem ist nicht VPN</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">VPN ist kein Fehler. VPN ist ein Symptom.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Ein Symptom dafür, dass IT oft noch so gedacht wird:</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>Zugriff = Netzwerk</li>
        <li>Sicherheit = Perimeter</li>
        <li>Kontrolle = Standort</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Dieses Modell funktioniert nur, solange alles im gleichen Netz passiert. Genau das ist heute nicht mehr der Fall.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Was sich real verändert hat</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Mitarbeiter arbeiten heute:</p>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li>von überall</li>
        <li>auf verschiedenen Geräten</li>
        <li>in Cloud-Systemen</li>
        <li>mit externen Partnern</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Der Bruch zeigt sich im Alltag:</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>„VPN ist langsam“</li>
        <li>„Zugriff geht gerade nicht“</li>
        <li>„Update kommt nicht durch“</li>
        <li>„Warum muss ich mich überhaupt einwählen?“</li>
      </ul>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Der Denkfehler</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Viele versuchen das Problem zu lösen, indem sie VPN optimieren, Infrastruktur ausbauen oder Tunnel stabiler machen.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Das ist logisch – löst aber nicht das eigentliche Problem.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Der Shift: Von Netzwerk zu Identität</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Mit Microsoft Entra (Azure AD) verschiebt sich die Grundlage für Zugriff:</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>👉 Zugriff basiert nicht mehr auf Netzwerken</li>
        <li>👉 sondern auf Identität, Gerät und Zustand</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Das ist kein Feature. Das ist ein komplett anderes Modell.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Was „Entra Join Only“ wirklich bedeutet</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Ein Gerät gehört nicht mehr zum Firmennetz – es gehört zur Identitätsschicht.</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>Anmeldung über Entra ID</li>
        <li>Richtlinien über Conditional Access</li>
        <li>Verwaltung über Intune</li>
        <li>Zugriff direkt auf Ressourcen – ohne Tunnel</li>
      </ul>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Wie Zugriff heute funktioniert</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-3">Früher: User → VPN → Netzwerk → System</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Heute: User → Identität → Policy → Zugriff</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Conditional Access ist der eigentliche Gamechanger</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Conditional Access ist eine Policy-Engine, die anhand von Signalen entscheidet, ob Zugriff erlaubt ist.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Typische Signale:</p>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li>Benutzer (Rolle, Risiko)</li>
        <li>Gerät (verwaltet, compliant)</li>
        <li>Standort</li>
        <li>Anwendung</li>
        <li>Verhalten</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-3">IF Zugriff angefordert</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-3">THEN Bedingungen prüfen</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">THEN Zugriff erlauben / blockieren</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Das ist Zero Trust in der Praxis.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Warum das sicherer ist als VPN</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">VPN macht ein Gerät zum Teil des Netzwerks – einmal drin bedeutet oft viel Zugriff.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Conditional Access macht das Gegenteil: jeder Zugriff wird einzeln bewertet.</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>Verify explicitly</li>
        <li>Least privilege</li>
        <li>Assume breach</li>
      </ul>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Der Unterschied im Alltag</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">Mit VPN:</p>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li>Verbindung aufbauen</li>
        <li>warten</li>
        <li>Zugriff über Netzwerk</li>
        <li>Probleme bei schlechter Verbindung</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">Mit Entra:</p>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li>Gerät anmelden</li>
        <li>Zugriff direkt</li>
        <li>Policies greifen im Hintergrund</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">Ergebnis: weniger Reibung für Nutzer, mehr Kontrolle für IT.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Warum viele Unternehmen daran scheitern</h2>
      <h3 className="text-2xl font-bold text-black mt-10 mb-5 tracking-tight">1. Es fehlt eine klare Zielarchitektur</h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Viele starten mit Intune, Conditional Access und Device-Join – aber ohne Gesamtbild.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Ohne Struktur entsteht ein hybrider Zustand ohne klare Verantwortung.</p>

      <h3 className="text-2xl font-bold text-black mt-10 mb-5 tracking-tight">2. Verantwortung ist nicht geklärt</h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Wer entscheidet über Compliance, Policy-Niveau und erlaubte Zugriffe?</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Wenn das unklar bleibt, wird zu vorsichtig konfiguriert – und man landet wieder im alten Modell.</p>

      <h3 className="text-2xl font-bold text-black mt-10 mb-5 tracking-tight">3. Sicherheit wird falsch verstanden</h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">VPN ist Transport, aber keine echte Zugriffskontrolle.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Was wirklich passieren muss</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Ein Wechsel auf Entra Join Only ist kein Tool-Thema, sondern eine Richtungsentscheidung:</p>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li>👉 Wie definieren wir Zugriff?</li>
        <li>👉 Wer trägt Verantwortung?</li>
        <li>👉 Wie werden Risiken bewertet?</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Erst Strategie und Struktur, dann Umsetzung.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Wann Entra Join die bessere Lösung ist</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Nicht immer – aber sehr oft, wenn:</p>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>Microsoft 365 bereits genutzt wird</li>
        <li>Geräte mobil sind</li>
        <li>VPN hauptsächlich für Zugriff genutzt wird</li>
        <li>Updates / Policies über Netz laufen</li>
        <li>Sicherheit eher „Netzwerk-basiert“ ist</li>
      </ul>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Dann ist VPN häufig nur noch ein Umweg.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Was sich danach verändert</h2>
      <ul className="space-y-3 text-gray-700 mb-10">
        <li>weniger Tickets („VPN geht nicht“)</li>
        <li>klarere Zuständigkeiten</li>
        <li>bessere Sicherheitslage</li>
        <li>schnellere Umsetzung von Änderungen</li>
        <li>einfachere Entscheidungen</li>
      </ul>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Fazit</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">VPN war lange sinnvoll. Heute ist es oft ein Relikt.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Der eigentliche Wechsel ist nicht VPN → Cloud, sondern Netzwerkdenken → Identitätsdenken.</p>

      <h2 className="text-3xl font-bold text-black mt-16 mb-8 tracking-tight">Wenn du dir unsicher bist</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">Viele Unternehmen wissen nicht genau, wie weit sie wirklich sind, wo Risiken liegen und ob Entra Join sinnvoll ist. Genau hier macht ein sauberer Einstieg den Unterschied: nicht über Tools, sondern über Klarheit.</p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">👉 IT-Check anfragen – und einmal sauber prüfen, ob dein Setup noch logisch ist oder nur historisch gewachsen.</p>
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
