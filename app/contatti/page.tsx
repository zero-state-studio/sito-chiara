import type { Metadata } from "next";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import ContactBox from "@/components/ContactBox";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta la psicologa Chiara Lodovici a Carpi (Modena): scrivi per un primo colloquio. Risposta riservata e senza impegno.",
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  return (
    <>
      <Section>
        <Blob className="left-[-5rem] top-6 h-72 w-72" tint="glow" opacity={0.5} />
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="font-script text-2xl text-brand-deep">Scrivimi</p>
            <h1 className="mt-1 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
              {site.contatti.title}
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/85">
              {site.contatti.intro}
            </p>
            <address className="mt-6 grid gap-3 not-italic text-ink/85">
              <p className="flex items-start gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-deep">
                  <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>
                  {site.business.studioName}
                  <br />
                  {site.business.streetAddress}
                  <br />
                  {site.business.postalCode} {site.business.addressLocality} (
                  {site.business.addressRegion})
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
          </Reveal>

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
