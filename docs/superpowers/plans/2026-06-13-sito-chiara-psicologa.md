# Sito Chiara Lodovici — Psicologa — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fast, light-mode, warm-pastel marketing site for psychologist Chiara Lodovici, with dynamic scroll flows and a working contact form, deployed on Vercel.

**Architecture:** Next.js (App Router) static site (SSG). Multi-page: Landing (`/`), Chi sono, Cosa faccio, Progetti, Contatti. Shared Navbar/Footer/ContactBox/FlameLogo/Section/Divider components. Motion (Framer Motion) for scroll-reveal and page transitions. Tailwind CSS design tokens. Web3Forms for the contact form (no custom backend). Content lives in a central `content/` module for easy swapping.

**Tech Stack:** Next.js 15 + TypeScript, Tailwind CSS, Motion (framer-motion), next/font (Caveat + Nunito), next/image, Web3Forms, Vitest + React Testing Library (form logic), Vercel.

**Visual work:** Tasks that style components/pages MUST invoke the **Impeccable** skill (per user request) before/while writing the markup and styles. This plan defines structure, props, content, and verification; Impeccable drives the visual polish (color, rhythm, organic shapes, micro-interactions).

**Verification approach:** Pure visual components are verified by `npm run build` + `npm run lint` passing and a dev-server render check. The contact form (real logic) gets unit tests with Vitest. Every task ends with a commit.

---

## File Structure

```
sito-chiara/
├── app/
│   ├── layout.tsx              # Root: fonts, Navbar, Footer, base metadata
│   ├── page.tsx                # Landing (/)
│   ├── globals.css             # Tailwind + base styles + paper texture
│   ├── chi-sono/page.tsx
│   ├── cosa-faccio/page.tsx
│   ├── progetti/page.tsx
│   └── contatti/page.tsx
├── components/
│   ├── FlameLogo.tsx           # Inline SVG flame (animatable)
│   ├── Navbar.tsx              # Sticky nav, transparent→solid on scroll
│   ├── Footer.tsx
│   ├── ContactBox.tsx          # Web3Forms contact form (client)
│   ├── Section.tsx             # Scroll-reveal wrapper (client)
│   ├── Divider.tsx             # Organic wave/blob SVG divider
│   └── Blob.tsx                # Decorative watercolor blob
├── content/
│   └── site.ts                 # All placeholder copy + service/project data
├── lib/
│   └── motion.ts               # Shared Motion variants
├── public/
│   └── (images, og image)
├── __tests__/
│   └── ContactBox.test.tsx
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── vitest.config.ts
├── vitest.setup.ts
├── package.json
└── .env.local.example
```

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: whole project skeleton via `create-next-app`

- [ ] **Step 1: Scaffold**

Run in the repo root (project files go in the existing repo, not a subfolder):

```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias "@/*" --no-turbopack --use-npm
```

If prompted to proceed in a non-empty directory, confirm yes (keeps `docs/`, `.git`, README).

- [ ] **Step 2: Verify dev server boots**

Run: `npm run build`
Expected: build completes with the default starter pages.

- [ ] **Step 3: Install runtime + test deps**

```bash
npm install framer-motion
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app with Tailwind and test deps"
```

---

## Task 2: Configure Vitest

**Files:**
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Modify: `package.json` (add `test` script)

- [ ] **Step 1: Write `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 2: Write `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 3: Add test script to `package.json`**

In the `"scripts"` block add:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Add a smoke test to verify config**

Create `__tests__/smoke.test.ts`:

```ts
import { describe, it, expect } from "vitest";

describe("vitest", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Run it**

Run: `npm test`
Expected: 1 passing test.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: configure Vitest + RTL"
```

---

## Task 3: Design tokens, fonts, globals

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx` (fonts only in this task)

> Invoke the **Impeccable** skill before authoring colors/typography to lock the visual system.

- [ ] **Step 1: Define color + font tokens in `tailwind.config.ts`**

Replace the `theme.extend` block:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDF8F2",
        peach: { light: "#F8D9BE", lighter: "#FCEBD8" },
        orange: { primary: "#E8915B", accent: "#C7693D" },
        warm: "#3D3128",
      },
      fontFamily: {
        script: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: { blob: "42% 58% 63% 37% / 41% 44% 56% 59%" },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Wire fonts in `app/layout.tsx`**

```tsx
import { Caveat, Nunito } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
```

Apply to `<html>`: `className={`${caveat.variable} ${nunito.variable}`}` and set `<body className="font-sans bg-cream text-warm antialiased">`.

- [ ] **Step 3: Base styles in `app/globals.css`**

Keep the `@tailwind` directives; append:

```css
:root { color-scheme: light; }

html { scroll-behavior: smooth; }

body {
  background-color: #FDF8F2;
  /* subtle paper grain */
  background-image: radial-gradient(rgba(199,105,61,0.04) 1px, transparent 1px);
  background-size: 4px 4px;
}

h1, h2, h3 { font-family: var(--font-caveat); }
```

- [ ] **Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: both pass.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add warm pastel design tokens and fonts"
```

---

## Task 4: Content module

**Files:**
- Create: `content/site.ts`

- [ ] **Step 1: Write placeholder content**

```ts
export const site = {
  name: "Chiara Lodovici",
  role: "Psicologa",
  email: "psico.chiaralodovici@gmail.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/chi-sono", label: "Chi sono" },
    { href: "/cosa-faccio", label: "Cosa faccio" },
    { href: "/progetti", label: "Progetti" },
    { href: "/contatti", label: "Contatti" },
  ],
  landing: {
    hero: "Uno spazio sicuro per ritrovare equilibrio",
    sub: "Psicologa. Ti accompagno con calma e ascolto verso il tuo benessere.",
    cta: "Prenota un primo colloquio",
  },
  chiSono: {
    title: "Chi sono",
    body: [
      "Sono Chiara Lodovici, psicologa. Credo in una relazione di cura fondata su ascolto, rispetto e fiducia.",
      "Il mio approccio mette al centro la persona, i suoi tempi e le sue risorse, in uno spazio accogliente e senza giudizio.",
    ],
    values: ["Ascolto", "Empatia", "Riservatezza", "Crescita"],
  },
  cosaFaccio: {
    title: "Cosa faccio",
    services: [
      { title: "Terapia individuale", text: "Un percorso personale per affrontare ansia, stress e momenti di difficoltà." },
      { title: "Sostegno di coppia", text: "Uno spazio di dialogo per ritrovare comprensione e vicinanza." },
      { title: "Gestione dell'ansia", text: "Strumenti pratici per riconoscere e gestire l'ansia nel quotidiano." },
      { title: "Percorsi di crescita", text: "Conoscere sé stessi per vivere con maggiore consapevolezza e serenità." },
    ],
  },
  progetti: {
    title: "Progetti",
    items: [
      { title: "Gruppi di ascolto", text: "Incontri di gruppo dedicati al benessere emotivo." },
      { title: "Workshop benessere", text: "Laboratori su gestione dello stress e mindfulness." },
      { title: "Sportello scuole", text: "Supporto psicologico per studenti e famiglie." },
    ],
  },
  contatti: {
    title: "Contatti",
    intro: "Scrivimi: ti risponderò il prima possibile.",
  },
} as const;
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add central placeholder content module"
```

---

## Task 5: Motion variants

**Files:**
- Create: `lib/motion.ts`

- [ ] **Step 1: Write shared variants**

```ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add shared motion variants"
```

---

## Task 6: FlameLogo component

**Files:**
- Create: `components/FlameLogo.tsx`

> Invoke **Impeccable** to refine the SVG path so it matches the watercolor flame sketch.

- [ ] **Step 1: Write the component**

```tsx
type Props = { className?: string; withWordmark?: boolean };

export default function FlameLogo({ className = "", withWordmark = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 64" width="32" height="42" aria-hidden="true" className="text-orange-primary">
        <path
          d="M24 2c2 10-6 14-6 22 0 5 3 8 3 8s-1-6 3-10c1 8 8 9 8 18a14 14 0 1 1-28 0c0-9 6-13 9-20 2-5 1-12-2-18 6 2 9 6 10 0z"
          fill="currentColor"
          stroke="#C7693D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {withWordmark && (
        <span className="font-script leading-none">
          <span className="block text-xl text-warm">Chiara Lodovici</span>
          <span className="block text-sm text-orange-accent">Psicologa</span>
        </span>
      )}
    </span>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add FlameLogo component"
```

---

## Task 7: Section + Blob + Divider components

**Files:**
- Create: `components/Section.tsx`
- Create: `components/Blob.tsx`
- Create: `components/Divider.tsx`

> Invoke **Impeccable** for the organic blob/divider shapes and spacing rhythm (tight, no empty feel).

- [ ] **Step 1: Write `Section.tsx` (scroll-reveal)**

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type Props = { id?: string; className?: string; children: React.ReactNode };

export default function Section({ id, className = "", children }: Props) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`relative px-6 py-14 md:py-20 ${className}`}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-5xl">
        {children}
      </motion.div>
    </motion.section>
  );
}
```

- [ ] **Step 2: Write `Blob.tsx`**

```tsx
type Props = { className?: string };

export default function Blob({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 h-64 w-64 rounded-blob bg-peach-light/60 blur-2xl ${className}`}
    />
  );
}
```

- [ ] **Step 3: Write `Divider.tsx` (organic wave)**

```tsx
type Props = { className?: string; flip?: boolean };

export default function Divider({ className = "", flip = false }: Props) {
  return (
    <div aria-hidden="true" className={`w-full leading-none ${className}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`w-full h-12 ${flip ? "rotate-180" : ""}`}>
        <path
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          className="fill-peach-lighter"
        />
      </svg>
    </div>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: passes.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Section, Blob and Divider components"
```

---

## Task 8: ContactBox component (with tests)

**Files:**
- Create: `components/ContactBox.tsx`
- Create: `__tests__/ContactBox.test.tsx`
- Create: `.env.local.example`

> This is the one component with real logic — tested. Invoke **Impeccable** for the visual styling only.

- [ ] **Step 1: Write failing test `__tests__/ContactBox.test.tsx`**

```tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactBox from "@/components/ContactBox";

describe("ContactBox", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true }) })) as unknown as typeof fetch);
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_KEY", "test-key");
  });

  it("renders name, email, message fields", () => {
    render(<ContactBox />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/messaggio/i)).toBeInTheDocument();
  });

  it("submits and shows success message", async () => {
    const user = userEvent.setup();
    render(<ContactBox />);
    await user.type(screen.getByLabelText(/nome/i), "Mario");
    await user.type(screen.getByLabelText(/email/i), "mario@test.it");
    await user.type(screen.getByLabelText(/messaggio/i), "Ciao");
    await user.click(screen.getByRole("button", { name: /invia/i }));
    await waitFor(() => expect(screen.getByText(/grazie/i)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("https://api.web3forms.com/submit", expect.any(Object));
  });
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `@/components/ContactBox`.

- [ ] **Step 3: Write `components/ContactBox.tsx`**

```tsx
"use client";
import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactBox() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("subject", "Nuovo contatto dal sito");
    data.append("to", site.email);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-3xl bg-peach-lighter/80 p-6 md:p-10 shadow-sm ring-1 ring-orange-primary/15">
      <h2 className="text-3xl text-orange-accent">{site.contatti.title}</h2>
      <p className="mt-1 mb-6 text-warm/80">{site.contatti.intro}</p>
      {status === "success" ? (
        <p className="text-lg text-orange-accent">Grazie! Il tuo messaggio è stato inviato.</p>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <label className="grid gap-1 text-sm">
            <span>Nome</span>
            <input name="name" required className="rounded-xl border border-orange-primary/30 bg-cream px-4 py-2 outline-none focus:border-orange-primary" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input type="email" name="email" required className="rounded-xl border border-orange-primary/30 bg-cream px-4 py-2 outline-none focus:border-orange-primary" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Messaggio</span>
            <textarea name="message" required rows={4} className="rounded-xl border border-orange-primary/30 bg-cream px-4 py-2 outline-none focus:border-orange-primary" />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="justify-self-start rounded-full bg-orange-primary px-7 py-3 font-semibold text-cream transition hover:bg-orange-accent disabled:opacity-60"
          >
            {status === "sending" ? "Invio…" : "Invia messaggio"}
          </button>
          {status === "error" && <p className="text-red-700">Errore nell'invio. Riprova.</p>}
        </form>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Run tests, verify pass**

Run: `npm test`
Expected: PASS (3 tests).

- [ ] **Step 5: Write `.env.local.example`**

```
# Web3Forms access key — get it free at https://web3forms.com (associate with psico.chiaralodovici@gmail.com)
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add ContactBox with Web3Forms submission + tests"
```

---

## Task 9: Navbar + Footer

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`

> Invoke **Impeccable** for nav styling and scroll state polish.

- [ ] **Step 1: Write `Navbar.tsx`**

```tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-cream/90 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Home"><FlameLogo /></Link>
        <ul className="flex gap-5 text-sm md:gap-7">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition hover:text-orange-accent ${pathname === item.href ? "text-orange-accent font-semibold" : "text-warm"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Write `Footer.tsx`**

```tsx
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-peach-lighter px-6 py-10 text-sm text-warm/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center md:flex-row md:justify-between">
        <FlameLogo withWordmark />
        <a href={`mailto:${site.email}`} className="hover:text-orange-accent">{site.email}</a>
        <p>© {site.name} · Psicologa</p>
      </div>
    </footer>
  );
}
```

> Note: the year is intentionally static text ("Psicologa") not a computed `Date` — keeps the page fully static. If a dynamic year is wanted later, pass it from a server component.

- [ ] **Step 3: Verify**

Run: `npm run build && npm run lint`
Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Navbar and Footer"
```

---

## Task 10: Root layout + metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Complete `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: "Psicologa. Uno spazio sicuro per ritrovare calma, equilibrio e benessere.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Uno spazio sicuro per ritrovare calma ed equilibrio.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${caveat.variable} ${nunito.variable}`}>
      <body className="font-sans bg-cream text-warm antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: complete root layout with navbar, footer, SEO metadata"
```

---

## Task 11: Landing page

**Files:**
- Modify: `app/page.tsx`

> Invoke **Impeccable** — this is the hero; highest visual priority. Parallax blobs, animated flame, tight spacing, teaser cards to sections, contact box at bottom.

- [ ] **Step 1: Write `app/page.tsx`**

```tsx
import Link from "next/link";
import Section from "@/components/Section";
import Blob from "@/components/Blob";
import Divider from "@/components/Divider";
import FlameLogo from "@/components/FlameLogo";
import ContactBox from "@/components/ContactBox";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Section className="text-center !py-24">
        <Blob className="left-6 top-10" />
        <Blob className="right-0 top-32 bg-peach-lighter/70" />
        <FlameLogo className="mx-auto mb-4 scale-150" />
        <h1 className="text-4xl md:text-6xl text-orange-accent">{site.landing.hero}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-warm/80">{site.landing.sub}</p>
        <Link href="/contatti" className="mt-7 inline-block rounded-full bg-orange-primary px-8 py-3 font-semibold text-cream transition hover:bg-orange-accent">
          {site.landing.cta}
        </Link>
      </Section>

      <Divider />

      <Section className="bg-peach-lighter/40">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { href: "/chi-sono", label: site.chiSono.title, text: site.chiSono.body[0] },
            { href: "/cosa-faccio", label: site.cosaFaccio.title, text: site.cosaFaccio.services[0].text },
            { href: "/progetti", label: site.progetti.title, text: site.progetti.items[0].text },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-orange-primary/10 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-2xl text-orange-accent">{c.label}</h3>
              <p className="mt-2 text-sm text-warm/75 line-clamp-3">{c.text}</p>
              <span className="mt-3 inline-block text-sm text-orange-primary group-hover:translate-x-1 transition">Scopri →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Divider flip />

      <Section id="contatti">
        <ContactBox />
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npm run lint`
Expected: pass.

- [ ] **Step 3: Visual check**

Run: `npm run dev`, open http://localhost:3000 — hero, teaser cards, divider waves, contact box render; scroll-reveal fires.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add landing page with hero, teasers, contact box"
```

---

## Task 12: Chi sono page

**Files:**
- Create: `app/chi-sono/page.tsx`

> Invoke **Impeccable** for layout (bio + photo placeholder + values chips).

- [ ] **Step 1: Write `app/chi-sono/page.tsx`**

```tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import Blob from "@/components/Blob";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.chiSono.title };

export default function ChiSono() {
  return (
    <Section>
      <Blob className="right-0 top-0" />
      <h1 className="text-4xl md:text-5xl text-orange-accent">{site.chiSono.title}</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div className="space-y-4 text-lg text-warm/85">
          {site.chiSono.body.map((p, i) => <p key={i}>{p}</p>)}
          <ul className="flex flex-wrap gap-2 pt-2">
            {site.chiSono.values.map((v) => (
              <li key={v} className="rounded-full bg-peach-light px-4 py-1 text-sm text-orange-accent">{v}</li>
            ))}
          </ul>
        </div>
        <div className="aspect-[3/4] rounded-blob bg-peach-light/70" aria-label="Foto Chiara Lodovici (placeholder)" />
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Chi sono page"
```

---

## Task 13: Cosa faccio page

**Files:**
- Create: `app/cosa-faccio/page.tsx`

> Invoke **Impeccable** for service card grid + hover micro-interactions.

- [ ] **Step 1: Write `app/cosa-faccio/page.tsx`**

```tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.cosaFaccio.title };

export default function CosaFaccio() {
  return (
    <Section>
      <h1 className="text-4xl md:text-5xl text-orange-accent">{site.cosaFaccio.title}</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {site.cosaFaccio.services.map((s) => (
          <article key={s.title} className="rounded-3xl bg-peach-lighter/70 p-6 ring-1 ring-orange-primary/10 transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-2xl text-orange-accent">{s.title}</h3>
            <p className="mt-2 text-warm/80">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Cosa faccio page"
```

---

## Task 14: Progetti page

**Files:**
- Create: `app/progetti/page.tsx`

> Invoke **Impeccable** for the projects grid.

- [ ] **Step 1: Write `app/progetti/page.tsx`**

```tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.progetti.title };

export default function Progetti() {
  return (
    <Section>
      <h1 className="text-4xl md:text-5xl text-orange-accent">{site.progetti.title}</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {site.progetti.items.map((p) => (
          <article key={p.title} className="rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-orange-primary/10 transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-2xl text-orange-accent">{p.title}</h3>
            <p className="mt-2 text-sm text-warm/80">{p.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Progetti page"
```

---

## Task 15: Contatti page

**Files:**
- Create: `app/contatti/page.tsx`

- [ ] **Step 1: Write `app/contatti/page.tsx`**

```tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import Blob from "@/components/Blob";
import ContactBox from "@/components/ContactBox";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.contatti.title };

export default function Contatti() {
  return (
    <Section>
      <Blob className="left-0 top-10" />
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl text-orange-accent">{site.contatti.title}</h1>
          <p className="mt-4 text-lg text-warm/80">{site.contatti.intro}</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-orange-primary hover:text-orange-accent">{site.email}</a>
        </div>
        <ContactBox />
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build && npm run lint`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Contatti page"
```

---

## Task 16: Page transitions

**Files:**
- Create: `app/template.tsx`

- [ ] **Step 1: Write `app/template.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={pageTransition.initial} animate={pageTransition.animate} transition={pageTransition.transition}>
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: pass. Navigate between pages in `npm run dev` — fade/slide transition fires.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add page transitions"
```

---

## Task 17: Vercel config, robots, final polish

**Files:**
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Modify: `README.md`

- [ ] **Step 1: Write `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" } };
}
```

- [ ] **Step 2: Write `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = "https://chiaralodovici.it"; // update to real domain at deploy

export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map((n) => ({ url: `${base}${n.href === "/" ? "" : n.href}` }));
}
```

- [ ] **Step 3: Write `README.md`**

```markdown
# Sito Chiara Lodovici — Psicologa

Next.js (App Router) marketing site. Light mode, warm pastel palette, dynamic scroll.

## Sviluppo
\`\`\`bash
npm install
cp .env.local.example .env.local   # inserisci NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev
\`\`\`

## Form contatti
Usa Web3Forms. Crea una access key gratuita su https://web3forms.com associata a
psico.chiaralodovici@gmail.com e mettila in \`NEXT_PUBLIC_WEB3FORMS_KEY\`.

## Deploy
Push su Vercel. Imposta la variabile d'ambiente \`NEXT_PUBLIC_WEB3FORMS_KEY\` nel progetto Vercel.
\`\`\`bash
npm run build
\`\`\`
```

- [ ] **Step 4: Final verification**

Run: `npm run build && npm run lint && npm test`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: add robots, sitemap, README and final polish"
```

---

## Self-Review

**Spec coverage:**
- Light mode, warm pastel/orange → Task 3 tokens, Task 11 hero. ✓
- 5 sezioni multi-pagina → Tasks 11–15. ✓
- Contact box on landing bottom + contatti page → Task 8 component, used in Task 11 + Task 15. ✓
- Mail to psico.chiaralodovici@gmail.com → Task 8 (Web3Forms `to` + subject), Task 4 `site.email`. ✓
- Dynamic forms/scroll → Task 5 variants, Task 7 Section/Blob/Divider, Task 11 parallax blobs, Task 16 page transitions. ✓
- Tight spacing / not empty → Task 3 note, Task 7 dividers/blobs, compact `py` rhythm. ✓
- Fast / Vercel → SSG (no dynamic Date in render), next/font, Task 17 robots/sitemap, README deploy. ✓
- Brand flame + cursive wordmark → Task 6 FlameLogo, Caveat font Task 3. ✓
- Impeccable skill for graphics → flagged on Tasks 3, 6, 7, 8, 9, 11–14. ✓

**Placeholder scan:** No TBD/TODO. Domain `chiaralodovici.it` flagged as "update at deploy" (intentional, not a gap). ✓

**Type consistency:** `site` shape (Task 4) matches all usages (`site.nav`, `site.landing.*`, `site.chiSono.body[]`, `site.cosaFaccio.services[]`, `site.progetti.items[]`, `site.contatti.*`, `site.email`, `site.name`, `site.role`). `ContactBox`/`Section`/`Blob`/`Divider`/`FlameLogo` props match call sites. Motion variants `fadeUp`/`stagger`/`pageTransition` consistent. ✓
