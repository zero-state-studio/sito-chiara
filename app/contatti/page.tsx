import type { Metadata } from "next";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import ContactBox from "@/components/ContactBox";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.contatti.title,
  description: site.contatti.intro,
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
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 font-medium text-brand-deep transition hover:text-ink"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {site.email}
            </a>
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
