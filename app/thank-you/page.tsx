import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Grazie",
  description: site.thankYou.message,
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYou() {
  return (
    <>
    <Section
      className="pt-8! sm:pt-12!"
      containerClassName="max-w-2xl text-center"
    >
      <Blob className="left-1/2 top-0 h-72 w-72 -translate-x-1/2" tint="glow" opacity={0.45} />

      <Reveal className="flex flex-col items-center">
        <figure className="relative w-40">
          <span
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-blob bg-peach-deep/50 blur-xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-blob ring-1 ring-brand/25 shadow-[0_20px_50px_-26px_oklch(0.55_0.15_42/0.6)]">
            <Image
              src="/chiara.jpg"
              alt={site.thankYou.photoAlt}
              fill
              sizes="160px"
              className="object-cover object-[center_28%]"
            />
          </div>
        </figure>

        <h1 className="mt-7 font-script text-[clamp(2.6rem,7vw,4rem)] leading-[0.95] text-brand-deep">
          {site.thankYou.title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-ink/85">
          {site.thankYou.message}
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-ink shadow-[0_14px_34px_-16px_oklch(0.55_0.15_42/0.7)] transition hover:bg-brand-deep hover:text-canvas"
        >
          {site.thankYou.button}
        </Link>
      </Reveal>
    </Section>
    <Divider from="canvas" to="peach-deep" />
    </>
  );
}
