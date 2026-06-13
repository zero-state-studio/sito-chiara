import { site } from "@/content/site";

type Props = {
  className?: string;
  /** Render the handwritten wordmark next to the mark. */
  withWordmark?: boolean;
  /** Pixel size of the flame mark. */
  size?: number;
};

/**
 * Brand mark: a watercolor flame cradled by cupped hands — the fire each
 * person carries (the emotions, with a steady inner core) being tended and
 * cared for. Pairs with the Caveat wordmark.
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
          <linearGradient id="flameWash" x1="32" y1="4" x2="32" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-brand-glow)" />
            <stop offset="0.55" stopColor="var(--color-brand)" />
            <stop offset="1" stopColor="var(--color-brand-deep)" />
          </linearGradient>
        </defs>

        {/* flame body — the fire within */}
        <path
          d="M32 4C36 16 26 20 28.5 31C29.5 36.5 33 38.5 33 38.5C31 33.5 34.5 28.5 38.5 26.5C38.5 34.5 45 36.5 45 46C45 53 39.5 58 32 58C24.5 58 18.5 53 19 45C19.5 35.5 28 31 29 21C30.5 15.5 30.5 10 28.5 4C30 6.5 32 7.5 32 4Z"
          fill="url(#flameWash)"
          stroke="var(--color-brand-deep)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* steady inner core — the emotion */}
        <path
          d="M31.5 40C29 45 31 52 35.5 53.5C32 50 33 44.5 36.5 42C34.5 45.5 38 49 37 52C40.5 48.5 39.5 42.5 35 40.5C33.5 39 32 39.2 31.5 40Z"
          fill="var(--color-peach)"
          opacity="0.8"
        />

        {/* cupped hands — the care */}
        <path
          d="M7.5 52C10 64.5 17.5 70.5 31.5 71"
          stroke="var(--color-brand-deep)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M56.5 52C54 64.5 46.5 70.5 32.5 71"
          stroke="var(--color-brand-deep)"
          strokeWidth="2.4"
          strokeLinecap="round"
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
