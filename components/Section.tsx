import type { ReactNode } from "react";

type Tone = "canvas" | "surface" | "peach" | "peach-deep";

const toneClass: Record<Tone, string> = {
  canvas: "",
  surface: "bg-surface",
  peach: "bg-peach",
  "peach-deep": "bg-peach-deep",
};

type Props = {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  /** Wider max-width for galleries. */
  wide?: boolean;
  children: ReactNode;
};

/** Layout band: tone background, compact vertical rhythm, centered container. */
export default function Section({
  id,
  tone = "canvas",
  className = "",
  containerClassName = "",
  wide = false,
  children,
}: Props) {
  // Let an explicit max-w in containerClassName win over the default.
  const maxW = containerClassName.includes("max-w-")
    ? ""
    : wide
      ? "max-w-7xl"
      : "max-w-6xl";
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden px-5 py-[clamp(3.25rem,7vw,5.5rem)] sm:px-8 lg:px-12 ${toneClass[tone]} ${className}`}
    >
      <div
        className={`relative z-10 mx-auto w-full ${maxW} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
