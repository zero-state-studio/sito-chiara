type Tone = "canvas" | "surface" | "peach" | "peach-deep";

const toneColor: Record<Tone, string> = {
  canvas: "text-canvas",
  surface: "text-surface",
  peach: "text-peach",
  "peach-deep": "text-peach-deep",
};

type Props = {
  /** Color of the band this wave flows into. */
  tone?: Tone;
  flip?: boolean;
  className?: string;
};

/**
 * Organic wave that melts one band into the next — no hard edges, no gaps.
 * Two overlapping curves give the join a soft, hand-painted depth.
 */
export default function Divider({
  tone = "peach",
  flip = false,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none -mb-px w-full leading-[0] ${toneColor[tone]} ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={`block h-[clamp(2.5rem,6vw,5rem)] w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,52 C180,104 360,16 600,44 C840,72 1020,108 1200,80 C1320,62 1392,40 1440,36 L1440,110 L0,110 Z"
          fill="currentColor"
          opacity="0.45"
        />
        <path
          d="M0,70 C200,40 380,96 620,76 C880,54 1040,20 1240,46 C1340,59 1400,74 1440,70 L1440,110 L0,110 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
