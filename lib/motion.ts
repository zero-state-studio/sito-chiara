import type { Variants, Transition } from "framer-motion";

// Ease-out quart — calm, no bounce (DESIGN.md motion).
const easeOutQuart: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuart },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: easeOutQuart } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

// Parent: stagger its children's reveals.
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const pageTransition: {
  initial: Record<string, number>;
  animate: Record<string, number>;
  transition: Transition;
} = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: easeOutQuart },
};

// Shared viewport config for scroll reveals.
export const viewportOnce = { once: true, margin: "-80px" } as const;
