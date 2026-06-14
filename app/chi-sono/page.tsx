import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.chiSono.title,
  description:
    "Chiara Lodovici, psicologa e specializzanda in Psicoterapia Sistemico-Dialogica. Percorsi con adulti e adolescenti; co-founder di CALM.",
  alternates: { canonical: "/chi-sono" },
};

export default function ChiSono() {
  return (
    <>
      <Section className="pt-8! sm:pt-12!">
        <Blob className="right-[-5rem] top-[-1rem] h-72 w-72" tint="peach" opacity={0.5} />
        <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <p className="font-script text-2xl text-brand-deep">{site.chiSono.lead}</p>
            <h1 className="mt-1 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
              {site.chiSono.title}
            </h1>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
              {site.chiSono.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* portrait */}
          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-xs">
              {/* watercolor halo so the photo sits in the brand world */}
              <span
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-blob bg-peach-deep/50 blur-xl"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-blob ring-1 ring-brand/25 shadow-[0_24px_60px_-30px_oklch(0.55_0.15_42/0.6)]">
                <Image
                  src="/chiara.jpg"
                  alt={site.chiSono.photoAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover object-[center_28%]"
                  priority
                />
                {/* gentle warm wash to tie the cool backdrop into the palette */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 via-transparent to-brand-glow/10 mix-blend-multiply"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Divider from="canvas" to="peach" />

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
