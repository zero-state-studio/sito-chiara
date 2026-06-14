"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import FlameLogo from "./FlameLogo";
import Blob from "./Blob";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const slow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden px-5 pb-[clamp(3rem,7vw,5rem)] pt-[clamp(3rem,8vw,6rem)] sm:px-6"
    >
      {/* watercolor field */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="heroWc" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves={3} seed={7} result="n" />
            <feColorMatrix
              in="n"
              type="matrix"
              values="0 0 0 0 0.92  0 0 0 0 0.62  0 0 0 0 0.36  0 0 0 0.5 0"
            />
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <radialGradient id="heroGlow" cx="30%" cy="24%" r="70%">
            <stop offset="0" stopColor="var(--color-brand-glow)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-canvas)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGlow)" />
        <rect width="100%" height="100%" filter="url(#heroWc)" opacity="0.4" />
      </svg>

      <motion.div style={{ y: slow }} className="absolute -z-10 left-[-6rem] top-[18%]">
        <Blob className="h-72 w-72" tint="glow" opacity={0.5} />
      </motion.div>
      <motion.div style={{ y: fast }} className="absolute -z-10 right-[-5rem] top-[8%]">
        <Blob className="h-80 w-80" tint="peach" opacity={0.45} />
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* left — portrait + wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="order-1 flex flex-col items-center gap-7 md:items-start"
        >
          <figure className="relative w-full max-w-sm">
            <span
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-blob bg-peach-deep/45 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-blob ring-1 ring-brand/25 shadow-[0_28px_60px_-30px_oklch(0.55_0.15_42/0.6)]">
              <Image
                src="/chiara.jpg"
                alt={`${site.name}, ${site.role}`}
                fill
                sizes="(max-width: 768px) 85vw, 384px"
                className="object-cover object-[center_25%]"
                priority
              />
            </div>
          </figure>
          <FlameLogo withWordmark size={54} />
        </motion.div>

        {/* right — message */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center md:text-left"
        >
          <motion.p variants={item} className="font-medium text-brand-deep">
            {site.landing.kicker}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-[clamp(2.1rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-ink"
          >
            {site.landing.hero}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink/85 md:mx-0"
          >
            {site.landing.sub}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Link
              href="#contatti"
              className="rounded-full bg-brand px-8 py-3.5 font-semibold text-ink shadow-[0_14px_34px_-16px_oklch(0.55_0.15_42/0.7)] transition hover:bg-brand-deep hover:text-canvas"
            >
              {site.landing.cta}
            </Link>
            <Link
              href="/chi-sono"
              className="rounded-full px-7 py-3.5 font-medium text-brand-deep ring-1 ring-brand/40 transition hover:bg-peach/60"
            >
              {site.landing.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
