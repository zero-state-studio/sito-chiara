type Tint = "glow" | "peach" | "brand";

const tints: Record<Tint, { c: string; c2: string }> = {
  glow: { c: "var(--color-brand-glow)", c2: "var(--color-brand)" },
  peach: { c: "var(--color-peach-deep)", c2: "var(--color-brand-glow)" },
  brand: { c: "var(--color-brand)", c2: "var(--color-brand-deep)" },
};

type Props = {
  /** Position + size utilities, e.g. "left-[-4rem] top-10 h-72 w-72". */
  className?: string;
  tint?: Tint;
  /** 0–1 overall opacity. */
  opacity?: number;
};

/**
 * Decorative watercolor stain: layered radial washes on an organic shape,
 * blurred and multiply-blended so overlaps deepen like wet pigment.
 */
export default function Blob({
  className = "",
  tint = "glow",
  opacity = 0.55,
}: Props) {
  const { c, c2 } = tints[tint];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-blob blur-2xl mix-blend-multiply ${className}`}
      style={{
        opacity,
        background: `radial-gradient(58% 54% at 34% 30%, ${c} 0%, transparent 68%), radial-gradient(52% 60% at 72% 70%, ${c2} 0%, transparent 74%)`,
      }}
    />
  );
}
