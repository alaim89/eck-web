'use client';

import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";

const relatedSolutionBySlug: Record<string, string> = {
  "vpn-abloesen-im-mittelstand-entra-join-only": "hybrid-it-infrastruktur",
  "entra-join-vpn-abloesen": "hybrid-it-infrastruktur",
  "cloud-migration-mittelstand-2024": "azure-migration",
  "it-sicherheit-praevention-vs-reaktion": "it-sicherheit",
  "managed-services-vs-inhouse-it": "managed-it-service",
};

export default function BlogContent() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
              IT-Probleme verstehen.
              <br />
              Klar priorisieren.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed opacity-90">
              Jeder Beitrag behandelt ein konkretes Problem aus dem IT-Alltag im Mittelstand und zeigt den Weg von
              Unsicherheit zu klarer Entscheidung mit IT-Check.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-24">
            <article className="group block relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={BLOG_POSTS[0].image} 
                    alt={BLOG_POSTS[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12 lg:p-20">
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 font-medium">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                      {BLOG_POSTS[0].category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {BLOG_POSTS[0].date}
                    </span>
                  </div>
                  <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                      {BLOG_POSTS[0].title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 opacity-80">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="flex items-center gap-2 text-primary font-bold">
                      Vollständigen Artikel lesen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href={`/solutions/${relatedSolutionBySlug[BLOG_POSTS[0].slug]}`} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                      Passende Lösung ansehen
                    </Link>
                    <Link href="/kontakt?type=it-check" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                      Zum IT-Check
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <div key={post.slug}>
                <article className="group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 bg-gray-100 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
                    <span className="text-primary">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-6 opacity-80 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-primary font-bold text-sm">
                      Weiterlesen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href={`/solutions/${relatedSolutionBySlug[post.slug]}`} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                      Passende Lösung
                    </Link>
                    <Link href="/kontakt?type=it-check" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                      IT-Check
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
            {/* Glow Elements */}
            <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-400/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal-400/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bleiben Sie informiert.</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Erhalten Sie monatlich exklusive Einblicke in IT-Strategien und Technologietrends direkt in Ihr Postfach.
              </p>
              {newsletterSubmitted ? (
                <p className="text-white font-semibold text-lg">Danke! Wir melden uns bald.</p>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-20"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                >
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                    required
                  />
                  <button className="px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20">
                    Anmelden
                  </button>
                </form>
              )}
              <p className="mt-8 text-xs text-white/50 font-medium tracking-wide">
                Kein Spam. Abmeldung jederzeit möglich.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
