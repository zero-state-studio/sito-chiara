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
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden px-5 py-[clamp(3.25rem,7vw,5.5rem)] sm:px-6 ${toneClass[tone]} ${className}`}
    >
      <div
        className={`relative z-10 mx-auto w-full ${wide ? "max-w-6xl" : "max-w-5xl"} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
