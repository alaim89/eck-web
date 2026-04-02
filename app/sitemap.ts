import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { solutionsData } from "@/lib/solutions-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  // Statische Seiten
  const staticRoutes = [
    "",
    "/solutions",
    "/blog",
    "/case-studies",
    "/kontakt",
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

  return [...staticRoutes, ...solutionRoutes];
}
