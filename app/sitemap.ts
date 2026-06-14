import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map((n) => ({
    url: `${SITE_URL}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.7,
  }));
  const projects = site.progetti.items.map((p) => ({
    url: `${SITE_URL}/progetti/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...projects];
}
