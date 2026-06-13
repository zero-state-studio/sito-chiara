# Design

Visual system for the Chiara Lodovici (psychologist) brand site. Light mode only.
Warm, luminous, human. Orange terracotta is the committed brand color; warmth comes from
saturated orange + watercolor + type, never from a flat cream background.

## Color

Color strategy: **Committed** — terracotta-orange carries identity across heroes and
recurring surfaces. The body is a clean, near-white warm paper (very light, low chroma);
saturated peach/orange fields and watercolor blobs fill sections so the dominant
impression is orange, not white-and-empty. OKLCH throughout.

### Tokens

| Token | OKLCH | ~Hex | Role |
|-------|-------|------|------|
| `--bg` | `oklch(0.985 0.010 70)` | #FBF7F2 | Page background — clean warm paper, very light |
| `--surface` | `oklch(0.965 0.018 68)` | #F6EEE4 | Default card / raised surface |
| `--surface-warm` | `oklch(0.92 0.050 62)` | #F4DBC0 | Soft peach — alternating section bands |
| `--surface-warm-strong` | `oklch(0.86 0.080 58)` | #EFC59B | Stronger peach — emphasis blocks, blobs |
| `--brand` | `oklch(0.70 0.145 48)` | #E08A4E | Primary terracotta-orange — CTAs, accents |
| `--brand-deep` | `oklch(0.55 0.150 42)` | #BC663A | Deep terracotta — hover, links, heading accent |
| `--brand-glow` | `oklch(0.80 0.110 60)` | #F2B27D | Watercolor wash / glow fills |
| `--ink` | `oklch(0.30 0.030 50)` | #3B3127 | Primary text — warm dark brown, not pure black |
| `--ink-soft` | `oklch(0.44 0.032 50)` | #5E5142 | Secondary text |
| `--line` | `oklch(0.70 0.030 55 / 0.35)` | — | Hairline borders |

### Contrast commitments (WCAG AA)

- Body text: `--ink` on `--bg`, `--surface`, `--surface-warm` → all ≥ 7:1. Verified target.
- Secondary `--ink-soft` on `--bg`/`--surface` → ≥ 4.5:1. Avoid on `--surface-warm-strong`.
- **Buttons:** primary CTA = `--brand` fill with **`--ink` (dark brown) label**, not white
  (white on L0.70 orange fails AA). Hover → `--brand-deep` fill with `--bg` label
  (large/bold ≥3:1 ok). Verify empirically in browser during polish.
- Placeholder text uses `--ink-soft`, never a faint gray.

## Typography

Brand-voice words: **calda, fatta-a-mano, gentile** (a watercolor sketchbook, a handwritten
note). Pairing on a contrast axis: warm reading serif display + rounded humanist sans body
+ handwritten script for the wordmark only. No two similar sans.

> Font note: **Fraunces / Lora / Newsreader / Cormorant / Playfair are reflex-reject**
> (Impeccable brand register) — training-data defaults. Chosen deliberately instead:

| Role | Family | Usage |
|------|--------|-------|
| Display / headings | **Literata** (variable warm reading serif) | h1–h3, hero. Cozy, humane, legible; not the editorial-serif cliché (paired with rounded sans + warm color + watercolor, no italic/mono/rules). |
| Body / UI | **Nunito** (rounded humanist sans) | Paragraphs, labels, nav, buttons. Gentle, calm, luminous. |
| Script accent | **Caveat** | Logo wordmark "Chiara Lodovici / Psicologa" and rare flourishes only. NOT for headings/body. |

- Hero h1: `clamp(2.5rem, 6vw, 4.5rem)`, weight 500–600, `letter-spacing: -0.02em`,
  `text-wrap: balance`. Display ceiling ≤ 6rem.
- Body: 1.0625–1.125rem, line-height 1.65, max line length 68ch, `text-wrap: pretty`.
- Fraunces optical/soft settings for warmth; avoid tight tracking (floor -0.04em).

## Motion

Framer Motion. Calm, breathing, ease-out (no bounce/elastic).

- Scroll reveal: fade + 24–28px rise, `whileInView`, `viewport once`, duration ~0.6s,
  ease-out. Stagger children ~0.10–0.12s for lists/grids.
- Reveals enhance an **already-visible** default (no content gated on JS class) — content
  renders without JS; motion is progressive enhancement.
- Hero: gentle parallax on watercolor blobs; flame logo soft draw-in / slow flicker.
- Page transitions: short fade + small rise (~0.4s) via `app/template.tsx`.
- Hover: lift (-translate-y-1) + soft shadow on interactive cards; arrow nudge on links.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` → crossfade/instant, no
  parallax, no transforms. Mandatory.

## Components

- **FlameLogo** — inline SVG flame (from brand sketch), `currentColor` fill + `--brand-deep`
  stroke; optional script wordmark. Animatable (draw-in/flicker).
- **Navbar** — fixed, transparent over hero → `--bg`/90 + blur + hairline on scroll. Active
  link in `--brand-deep`.
- **Section** — reveal wrapper, compact vertical rhythm (`py` ~3.5–5rem), max-w-5xl.
- **Divider** — organic wave/blob SVG between bands, filled with adjacent surface color, to
  remove hard edges and empty gaps.
- **Blob** — soft blurred watercolor shape (`--brand-glow`/`--surface-warm`), decorative,
  parallax.
- **ContactBox** — warm peach panel, rounded, single-column form (nome, email, messaggio),
  ink labels, brand CTA. Idle→sending→success/error states.
- **Cards** — used sparingly and only when the best affordance; never nested, never
  identical-grid filler. Vary size/shape; lean on blobs and bands instead where possible.

## Layout

- Tight, organic rhythm: bands alternate `--bg` ↔ `--surface-warm`, joined by wave dividers
  and overlapping blobs so the page never reads empty or boxy.
- Grid for 2D galleries (`repeat(auto-fit, minmax(260px, 1fr))`), flex for 1D rows.
- Max content width ~64rem; generous but not sprawling. Compact gaps between concepts.
- Semantic z-index scale: base < blob(-10) < content(0) < sticky-nav(50) < modal < toast.
- Radii: soft (`1rem`–`1.75rem`) plus one organic `blob` radius for photo/decor masks.

## Imagery

The brand's imagery system **is watercolor**, not stock photography — authentic to the
hand-painted flame identity. Generic stock photos would fight the hand-made voice.

- **Watercolor washes & blobs:** rich SVG/CSS organic shapes with soft edges, grain, and
  layered `--brand-glow`/`--surface-warm` fills. These carry real visual weight (not flat
  colored blocks) — irregular paths, blur, multiply blends, paper grain.
- **Flame:** the brand mark, used at scale in the hero and as a recurring motif.
- **Portrait:** organic-masked frame for Chiara's real photo (placeholder until supplied),
  styled like a watercolor vignette so it belongs even before the real asset lands.
- Decorative ink/line flourishes (hand-drawn feel) sparingly.

Zero flat colored rectangles standing in for imagery — the watercolor art must read as
crafted. Alt text in brand voice.

## Bans honored

No cream-as-brand (warmth via saturated orange + type). No eyebrow kickers / 01·02·03
markers. No gradient text. No glassmorphism default. No side-stripe borders. No identical
card grids as scaffolding. No hero-metric template.
