import type { Metadata } from "next";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
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
      {/* projects */}
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

      <Divider from="canvas" to="peach" />

      {/* timeline / cronostoria */}
      <Section tone="peach">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-semibold text-ink">
            {site.progetti.timelineTitle}
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink/80">
            {site.progetti.timelineLead}
          </p>
        </Reveal>

        <div className="relative mt-12 max-w-2xl">
          {/* timeline spine */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand-deep via-brand/40 to-transparent"
          />
          <ol className="space-y-10">
            {site.progetti.timeline.map((entry, i) => (
              <Reveal
                as="li"
                key={`${entry.year}-${entry.title}`}
                delay={i * 90}
                className="relative pl-12"
              >
                {/* node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-brand ring-4 ring-peach"
                />
                <span className="inline-block rounded-full bg-canvas px-3 py-0.5 text-sm font-semibold text-brand-deep">
                  {entry.year}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  {entry.title}
                </h3>
                <p className="mt-2 text-ink/80">{entry.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand from="peach" />
    </>
  );
}
