"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: ElementType;
};

type State = "idle" | "pending" | "in";

/**
 * Scroll-reveal that defaults to visible and only animates on scroll-in.
 * - SSR / no-JS / reduced-motion: content renders visible (state stays "idle").
 * - Already in view on load: shown immediately, no hidden flash.
 * - Below the fold: hidden ("pending") until it scrolls into view ("in").
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as,
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return; // stay visible, no motion

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (alreadyInView) return; // already visible, skip the reveal

    setState("pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={state === "idle" ? undefined : state}
      style={delay && state !== "idle" ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
