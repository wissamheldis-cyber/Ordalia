import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ordalia.fr";
  return [{ url: base, lastModified: new Date() }, { url: `${base}/resources`, lastModified: new Date() }, ...articles.map((article) => ({ url: `${base}/resources/${article.slug}`, lastModified: new Date(article.date) }))];
}
