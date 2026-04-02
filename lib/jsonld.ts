import { siteConfig } from "./site-config";

/**
 * Generates Organization JSON-LD schema.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.companyName,
    "url": siteConfig.baseUrl,
    "logo": `${siteConfig.baseUrl}/icon.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "email": siteConfig.contact.email,
    },
    "sameAs": [
      siteConfig.social.linkedin,
      siteConfig.social.freelancermap,
      siteConfig.social.freelance,
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "postalCode": siteConfig.contact.address.zip,
      "addressCountry": "DE"
    }
  };
}

/**
 * Generates Service JSON-LD schema.
 */
export function getServiceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.companyName
    }
  };
}

/**
 * Generates Article JSON-LD schema.
 */
export function getArticleSchema(post: {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": [post.image],
    "datePublished": post.date,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": siteConfig.baseUrl
    }],
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.baseUrl}/icon.svg`
      }
    }
  };
}
