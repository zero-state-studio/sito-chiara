import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psicochiaralodovici.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map((n) => ({
    url: `${base}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.7,
  }));
  const projects = site.progetti.items.map((p) => ({
    url: `${base}/progetti/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...projects];
}
