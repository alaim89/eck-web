import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { solutionsData } from "@/lib/solutions-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { caseStudies } from "@/lib/case-studies-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  // Statische Seiten
  const staticRoutes = [
    "",
    "/solutions",
    "/blog",
    "/case-studies",
    "/kontakt",
    "/recruiter",
    "/impressum",
    "/datenschutz",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamische Solutions-Seiten
  const solutionRoutes = Object.keys(solutionsData).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamische Blog-Seiten
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamische Case-Study-Seiten
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...blogRoutes, ...caseStudyRoutes];
}
