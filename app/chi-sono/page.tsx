import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import FlameLogo from "@/components/FlameLogo";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.chiSono.title,
  description: site.chiSono.body[0],
};

export default function ChiSono() {
  return (
    <>
      <Section containerClassName="max-w-5xl">
        <Blob className="right-[-5rem] top-[-1rem] h-72 w-72" tint="peach" opacity={0.5} />
        <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <p className="font-script text-2xl text-brand">{site.chiSono.lead}</p>
            <h1 className="mt-1 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
              {site.chiSono.title}
            </h1>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
              {site.chiSono.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* portrait — watercolor vignette placeholder for the real photo */}
          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-xs">
              <div
                role="img"
                aria-label={site.chiSono.photoAlt}
                className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-blob ring-1 ring-brand/20"
                style={{
                  background:
                    "radial-gradient(70% 60% at 35% 30%, var(--color-brand-glow) 0%, transparent 70%), radial-gradient(60% 70% at 75% 80%, var(--color-peach-deep) 0%, var(--color-peach) 80%)",
                }}
              >
                <FlameLogo size={56} />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-ink-soft">
                Foto in arrivo
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* values */}
      <Section tone="peach" containerClassName="max-w-4xl text-center">
        <Reveal>
          <h2 className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold text-brand-deep">
            {site.chiSono.valuesTitle}
          </h2>
        </Reveal>
        <ul className="mt-7 flex flex-wrap justify-center gap-3">
          {site.chiSono.values.map((v, i) => (
            <Reveal as="li" key={v} delay={i * 70}>
              <span className="inline-block rounded-full bg-canvas px-6 py-2.5 text-lg font-medium text-brand-deep shadow-sm ring-1 ring-brand/15">
                {v}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand from="peach" />
    </>
  );
}
