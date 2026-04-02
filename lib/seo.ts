import { Metadata } from "next";
import { siteConfig } from "./site-config";

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
}

/**
 * Generates Next.js Metadata object with sensible defaults from siteConfig.
 * Follows SEO best practices for title and description lengths.
 */
export function getMetadata({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  type = "website",
  robots,
}: SeoProps = {}): Metadata {
  const siteName = siteConfig.name;
  
  // Title logic: Use template if title is provided, otherwise use defaultTitle
  const fullTitle = title 
    ? siteConfig.titleTemplate.replace("%s", title)
    : siteConfig.defaultTitle;
  
  const fullDescription = description || siteConfig.defaultDescription;
  
  // Ensure canonical URL is absolute
  const url = canonical 
    ? `${siteConfig.baseUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : siteConfig.baseUrl;

  const finalRobots = robots || {
    index: !noIndex,
    follow: !noIndex,
  };

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url,
      siteName: siteName,
      images: [
        {
          url: ogImage || `${siteConfig.baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "de_DE",
      type: type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage || `${siteConfig.baseUrl}/og-image.png`],
    },
    robots: {
      index: finalRobots.index ?? !noIndex,
      follow: finalRobots.follow ?? !noIndex,
      googleBot: {
        index: finalRobots.index ?? !noIndex,
        follow: finalRobots.follow ?? !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generates FAQ Schema (JSON-LD) for SEO.
 */
export function getFaqSchema(
  items: { question: string; answer: string }[],
  pagePath: string
) {
  const normalizedPath = pagePath.startsWith("/") ? pagePath : `/${pagePath}`;
  const pageUrl = `${siteConfig.baseUrl}${normalizedPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "de",
    mainEntity: items.map((item, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-question-${index + 1}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
