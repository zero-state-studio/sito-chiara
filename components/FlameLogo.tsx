import { site } from "@/content/site";

type Props = {
  className?: string;
  /** Render the handwritten wordmark next to the mark. */
  withWordmark?: boolean;
  /** Pixel size of the flame mark. */
  size?: number;
};

/**
 * Brand mark: a watercolor flame (from the hand-painted brand sketch).
 * Soft vertical wash + warm outline; pairs with the Caveat wordmark.
 */
export default function FlameLogo({
  className = "",
  withWordmark = false,
  size = 34,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 64 80"
        fill="none"
        role="img"
        aria-label={withWordmark ? undefined : `${site.name}, ${site.role}`}
        aria-hidden={withWordmark ? true : undefined}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="flameWash" x1="32" y1="6" x2="32" y2="74" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-brand-glow)" />
            <stop offset="0.55" stopColor="var(--color-brand)" />
            <stop offset="1" stopColor="var(--color-brand-deep)" />
          </linearGradient>
        </defs>
        {/* outer flame body */}
        <path
          d="M33 3C37 15 27 19 29 31C30 37 34 39 34 39C32 34 35 29 39 27C39 35 47 37 47 49C47 60 40 68 31 68C21 68 14 60 15 48C16 37 26 31 29 20C31 14 32 8 29 3C31 5 33 7 33 3Z"
          fill="url(#flameWash)"
          stroke="var(--color-brand-deep)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* inner highlight — watercolor depth */}
        <path
          d="M31 40C28 46 30 56 36 58C32 54 33 47 37 44C35 48 39 52 38 56C42 52 41 44 36 41C34 39 32 39 31 40Z"
          fill="var(--color-peach)"
          opacity="0.7"
        />
      </svg>
      {withWordmark && (
        <span className="font-script leading-[0.95]">
          <span className="block text-[1.35rem] text-ink">{site.name}</span>
          <span className="block text-base text-brand-deep">{site.role}</span>
        </span>
      )}
    </span>
  );
}
