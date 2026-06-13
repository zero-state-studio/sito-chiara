import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chiaralodovici.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map((n) => ({
    url: `${base}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
