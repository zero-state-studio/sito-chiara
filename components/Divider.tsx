type Tone = "canvas" | "surface" | "peach" | "peach-deep";

const bg: Record<Tone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  peach: "bg-peach",
  "peach-deep": "bg-peach-deep",
};
const fill: Record<Tone, string> = {
  canvas: "text-canvas",
  surface: "text-surface",
  peach: "text-peach",
  "peach-deep": "text-peach-deep",
};

type Props = {
  /** Color above the wave (the band you're leaving). */
  from?: Tone;
  /** Color of the wave (the band you're entering). */
  to?: Tone;
  flip?: boolean;
  className?: string;
};

/**
 * Organic wave that melts one band into the next — no hard edges, no gaps.
 * Background is the previous band's color; the wave is the next band's color.
 */
export default function Divider({
  from = "canvas",
  to = "peach",
  flip = false,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full leading-[0] ${bg[from]} ${fill[to]} ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={`block h-[clamp(2.5rem,6vw,5rem)] w-full ${flip ? "-scale-x-100" : ""}`}
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
