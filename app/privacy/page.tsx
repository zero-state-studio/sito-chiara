import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.privacy.title,
  description: site.privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return <LegalDoc doc={site.privacy} />;
}
