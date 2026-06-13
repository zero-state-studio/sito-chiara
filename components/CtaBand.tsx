import Link from "next/link";
import Section from "./Section";
import Divider from "./Divider";
import Reveal from "./Reveal";
import Blob from "./Blob";
import { site } from "@/content/site";

type Tone = "canvas" | "surface" | "peach";

/** Closing call-to-action band that flows into the footer. Reused on inner pages. */
export default function CtaBand({ from = "canvas" }: { from?: Tone }) {
  return (
    <>
      <Divider from={from} to="peach-deep" />
      <Section tone="peach-deep" containerClassName="max-w-2xl text-center">
        <Blob className="left-1/2 top-0 h-56 w-56 -translate-x-1/2" tint="glow" opacity={0.45} />
        <Reveal>
          <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold text-brand-deep">
            {site.cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/80">{site.cta.text}</p>
          <Link
            href="/contatti"
            className="mt-7 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-ink shadow-[0_14px_34px_-16px_oklch(0.55_0.15_42/0.7)] transition hover:bg-brand-deep hover:text-canvas"
          >
            {site.cta.button}
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
