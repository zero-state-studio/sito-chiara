"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
}

export default function Navbar() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation — adjust state during render
  // (React's documented pattern; no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-canvas/85 shadow-[0_8px_30px_-18px_oklch(0.55_0.15_42/0.5)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" aria-label={`${site.name} — home`} className="z-10">
          <FlameLogo size={28} />
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-8 text-lg md:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative transition-colors hover:text-brand-deep ${
                    active ? "text-brand-deep" : "text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="relative z-10 grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-peach/60 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile panel */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-canvas/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-5 pt-1">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-lg transition ${
                    active ? "bg-peach text-brand-deep" : "text-ink hover:bg-peach/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
