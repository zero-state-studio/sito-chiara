import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import ContactBox from "@/components/ContactBox";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Divider from="canvas" to="peach" />

      {/* the three voices — a hook for those who want to know more before writing */}
      <Section tone="peach">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-semibold text-ink">
            {site.landing.teaserTitle}
          </h2>
        </Reveal>
        <ul className="mt-8 divide-y divide-ink/10">
          {site.landing.teasers.map((t, i) => (
            <Reveal key={t.href} as="li" delay={i * 80}>
              <Link
                href={t.href}
                className="group flex items-center justify-between gap-6 rounded-3xl px-4 py-6 transition-colors hover:bg-canvas/60 sm:px-6"
              >
                <div>
                  <h3 className="text-2xl font-medium text-ink transition-colors group-hover:text-brand-deep sm:text-3xl">
                    {t.label}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-ink/75">{t.text}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-canvas text-brand-deep transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Divider from="peach" to="peach-deep" />

      {/* contact — flows into the footer */}
      <Section id="contatti" tone="peach-deep" className="pb-12!" containerClassName="max-w-4xl">
        <Blob className="right-[-4rem] top-[-2rem] h-64 w-64" tint="glow" opacity={0.5} />
        <Reveal>
          <ContactBox />
        </Reveal>
      </Section>
    </>
  );
}
