import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.progetti.title,
  description: site.progetti.lead,
};

const accents = [
  "var(--color-brand-glow)",
  "var(--color-peach-deep)",
  "var(--color-brand)",
];

export default function Progetti() {
  return (
    <>
      <Section wide>
        <Blob className="right-[-4rem] top-0 h-72 w-72" tint="peach" opacity={0.45} />
        <Reveal>
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
            {site.progetti.title}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-ink/80">{site.progetti.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.progetti.items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className={i % 2 === 1 ? "lg:mt-12" : ""}
            >
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-surface p-7 ring-1 ring-brand/12 transition-transform duration-300 hover:-translate-y-1.5">
                <span
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-blob opacity-80 transition-transform duration-500 group-hover:scale-125"
                  style={{ background: accents[i % accents.length] }}
                />
                <h2 className="relative text-2xl font-semibold text-brand-deep">
                  {p.title}
                </h2>
                <p className="relative mt-2 text-ink/80">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand from="canvas" />
    </>
  );
}
