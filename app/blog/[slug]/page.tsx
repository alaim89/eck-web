'use client';

import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BLOG_POSTS = {
  "cloud-migration-mittelstand-2024": {
    title: "Cloud-Migration für den Mittelstand: Ein Leitfaden für 2024",
    date: "20. März 2024",
    readTime: "8 min",
    author: "André Ecke",
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
    author: "André Ecke",
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
    author: "André Ecke",
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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date, // Note: In a real app, this should be ISO format
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://ecksolution-it.de"
    }]
  };

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      <main className="pt-48 pb-32 px-6">
        <article className="max-w-[900px] mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-semibold mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
          </Link>

          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <span className="text-primary">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} Lesezeit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-black leading-[1.1]">
              {post.title}
            </h1>
            
            {/* Author */}
            <div className="flex items-center justify-between py-8 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-black">{post.author}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">IT-Architekt & Cloud Experte</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-gray-100">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-black prose-blockquote:border-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer / Share */}
          <footer className="mt-24 pt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Diesen Artikel teilen:</span>
                <div className="flex items-center gap-2">
                  <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Link 
                href="/kontakt" 
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
              >
                Strategie-Gespräch anfragen
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
