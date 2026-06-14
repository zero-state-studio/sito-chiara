import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.cosaFaccio.title,
  description:
    "I percorsi della psicologa Chiara Lodovici: individuali, di coppia e familiari, formazioni esperienziali e laboratori.",
  alternates: { canonical: "/cosa-faccio" },
};

const tints = ["glow", "peach", "brand", "peach"] as const;

export default function CosaFaccio() {
  return (
    <>
      <Section className="pt-8! sm:pt-12!">
        <Blob className="left-[-5rem] top-0 h-72 w-72" tint="glow" opacity={0.45} />
        <Reveal>
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
            {site.cosaFaccio.title}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-ink/80">{site.cosaFaccio.lead}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-y-[clamp(2rem,4vw,3.25rem)]">
          {site.cosaFaccio.services.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={s.title} delay={(i % 2) * 60}>
                <article
                  className={`flex flex-col items-center gap-6 sm:gap-9 ${
                    flipped ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  {/* watercolor disc accent */}
                  <div className="relative grid h-28 w-28 shrink-0 place-items-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-blob"
                      style={{
                        background:
                          tints[i] === "brand"
                            ? "radial-gradient(circle at 35% 30%, var(--color-brand-glow), var(--color-brand))"
                            : tints[i] === "glow"
                              ? "radial-gradient(circle at 35% 30%, var(--color-peach), var(--color-brand-glow))"
                              : "radial-gradient(circle at 35% 30%, var(--color-peach), var(--color-peach-deep))",
                      }}
                    />
                    <span className="relative font-script text-4xl text-ink/70">
                      {s.title.charAt(0)}
                    </span>
                  </div>

                  <div className={flipped ? "sm:text-right" : ""}>
                    <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-2 max-w-md text-ink/80">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand from="canvas" />
    </>
  );
}
