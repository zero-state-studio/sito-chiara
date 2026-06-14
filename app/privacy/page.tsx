import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.privacy.title,
  description: site.privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <Section className="pt-8! sm:pt-12!" containerClassName="max-w-3xl">
      <Blob className="right-[-5rem] top-0 h-72 w-72" tint="peach" opacity={0.4} />

      <Reveal>
        <h1 className="text-[clamp(2.2rem,5vw,3.25rem)] font-semibold text-ink">
          {site.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          Ultimo aggiornamento: {site.privacy.updated}
        </p>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/85">
          {site.privacy.intro}
        </p>
      </Reveal>

      <div className="mt-10 space-y-8">
        {site.privacy.sections.map((s, i) => (
          <Reveal as="section" key={s.heading} delay={i * 40}>
            <h2 className="text-2xl font-semibold text-brand-deep">{s.heading}</h2>
            <div className="mt-2 space-y-3 leading-relaxed text-ink/85">
              {s.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
