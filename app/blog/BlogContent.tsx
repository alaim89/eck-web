'use client';

import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BLOG_POSTS = [
  {
    slug: "entra-join-vpn-abloesen",
    title: "Weg mit dem VPN: Warum „Entra Join Only“ der neue Standard ist",
    excerpt: "Warum klassische VPN-Lösungen ausbremsen und wie Microsoft Entra Join Unternehmen sicherer, flexibler und wartungsärmer macht.",
    date: "28. März 2024",
    readTime: "6 min",
    author: "Andreas Eckert",
    category: "Cloud & Infrastruktur",
    image: "https://picsum.photos/seed/network/800/500"
  },
  {
    slug: "cloud-migration-mittelstand-2024",
    title: "Cloud-Migration für den Mittelstand: Ein Leitfaden für 2024",
    excerpt: "Erfahren Sie, wie mittelständische Unternehmen den Umstieg in die Cloud sicher und kosteneffizient gestalten können, ohne den laufenden Betrieb zu gefährden.",
    date: "20. März 2024",
    readTime: "8 min",
    author: "Andreas Eckert",
    category: "Cloud & Infrastruktur",
    image: "https://picsum.photos/seed/cloud/800/500"
  },
  {
    slug: "it-sicherheit-praevention-vs-reaktion",
    title: "IT-Sicherheit: Warum Prävention günstiger ist als jeder Notfalleinsatz",
    excerpt: "Reaktive IT-Sicherheit kostet nicht nur Nerven, sondern auch bares Geld. Wir zeigen auf, warum proaktive Stabilität die beste Versicherung für Ihr Unternehmen ist.",
    date: "12. März 2024",
    readTime: "6 min",
    author: "Andreas Eckert",
    category: "Security",
    image: "https://picsum.photos/seed/security/800/500"
  },
  {
    slug: "managed-services-vs-inhouse-it",
    title: "Managed Services vs. Inhouse-IT: Die richtige Balance finden",
    excerpt: "Wann macht es Sinn, IT-Aufgaben auszulagern? Ein objektiver Vergleich zwischen internen Ressourcen und externer Expertise für maximale Effizienz.",
    date: "05. März 2024",
    readTime: "7 min",
    author: "Andreas Eckert",
    category: "Strategie",
    image: "https://picsum.photos/seed/strategy/800/500"
  }
];

export default function BlogContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xs uppercase tracking-widest mb-4"
            >
              Wissen & Einblicke
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black leading-[1.1]"
            >
              IT-Strategie für Entscheider.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed opacity-90"
            >
              Praxisnahe Tipps, tiefgehende Analysen und aktuelle Trends aus den Bereichen Cloud-Architektur, IT-Sicherheit und digitale Transformation.
            </motion.p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-24"
          >
            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group block relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 opacity-80">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    Vollständigen Artikel lesen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
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
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 opacity-80 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Weiterlesen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20"
          >
            {/* Glow Elements */}
            <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-400/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal-400/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bleiben Sie informiert.</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Erhalten Sie monatlich exklusive Einblicke in IT-Strategien und Technologietrends direkt in Ihr Postfach.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-20">
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
              <p className="mt-8 text-xs text-white/50 font-medium tracking-wide">
                Kein Spam. Abmeldung jederzeit möglich.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
