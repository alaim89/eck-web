import { ArrowLeft, User, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getArticleSchema } from "@/lib/jsonld";

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    image: string;
    content: string;
  };
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.title, // Fallback to title as description
    image: post.image,
    date: post.date,
    author: post.author,
    url: `/blog`, // This is a bit simplified
  });

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
