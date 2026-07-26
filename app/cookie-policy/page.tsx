import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.cookie.title,
  description: site.cookie.intro,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicy() {
  return <LegalDoc doc={site.cookie} />;
}
