import type { Metadata } from "next";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import ContactBox from "@/components/ContactBox";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { breadcrumbJsonLd, contactPageJsonLd, ogFor } from "@/lib/seo";

const description =
  "Contatta la psicologa Chiara Lodovici a Carpi (Modena): scrivi per un primo colloquio. Risposta riservata e senza impegno.";

export const metadata: Metadata = {
  title: "Contatti",
  description,
  alternates: { canonical: "/contatti" },
  openGraph: ogFor({
    title: `Contatti — ${site.name}`,
    description,
    path: "/contatti",
  }),
};

export default function Contatti() {
  const b = site.business;
  const mapsQuery = `${b.streetAddress}, ${b.postalCode} ${b.addressLocality} ${b.addressRegion}`;
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contatti", path: "/contatti" },
        ])}
      />
      <Section className="pt-8! sm:pt-12!">
        <Blob className="left-[-5rem] top-6 h-72 w-72" tint="glow" opacity={0.5} />

        <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
          {/* info */}
          <Reveal className="flex h-full flex-col">
            <h1 className="font-script text-[clamp(2.75rem,6vw,4rem)] leading-[0.9] text-brand-deep">
              Scrivimi
            </h1>
            <address className="mt-6 grid gap-3 not-italic text-ink/85">
              <p className="flex items-start gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-deep">
                  <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>
                  {site.business.studioName}
                  <br />
                  {site.business.streetAddress} · {site.business.postalCode}{" "}
                  {site.business.addressLocality} ({site.business.addressRegion})
                </span>
              </p>
              <a
                href={`tel:${site.business.telephoneHref}`}
                className="flex items-center gap-2.5 font-medium text-brand-deep transition hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                {site.business.telephone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 font-medium text-brand-deep transition hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                {site.email}
              </a>
            </address>

            {/* studio map — fills the remaining height down to the form's bottom edge */}
            <div className="relative mt-7 min-h-[15rem] flex-1 overflow-hidden rounded-3xl ring-1 ring-brand/15 shadow-sm">
              <iframe
                title={`Mappa dello studio a ${b.addressLocality} (${b.addressRegion})`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          {/* form (no duplicate heading — the page already says "Parliamone") */}
          <Reveal delay={120}>
            <ContactBox />
          </Reveal>
        </div>
      </Section>

      {/* melt into the footer */}
      <Divider from="canvas" to="peach-deep" />
    </>
  );
}
