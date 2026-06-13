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

export default function Progetti() {
  return (
    <>
      <Section>
        <Blob className="right-[-4rem] top-0 h-72 w-72" tint="peach" opacity={0.45} />
        <Reveal>
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
            {site.progetti.title}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-ink/80">{site.progetti.lead}</p>
        </Reveal>

        <div className="relative mt-14 max-w-2xl">
          {/* timeline spine */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand via-brand/40 to-transparent"
          />
          <ol className="space-y-10">
            {site.progetti.timeline.map((entry, i) => (
              <Reveal as="li" key={`${entry.year}-${entry.title}`} delay={i * 90} className="relative pl-12">
                {/* node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-brand ring-4 ring-canvas"
                />
                <span className="inline-block rounded-full bg-peach px-3 py-0.5 text-sm font-semibold text-brand-deep">
                  {entry.year}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  {entry.title}
                </h2>
                <p className="mt-2 text-ink/80">{entry.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand from="canvas" />
    </>
  );
}
