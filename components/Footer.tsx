import Link from "next/link";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

const b = site.business;
const alboLabel = `Albo Psicologi Emilia Romagna n° ${b.alboNumber}`;

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-peach-deep px-5 pb-7 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-10">
        {/* identity */}
        <div className="max-w-sm">
          <FlameLogo withWordmark size={26} />
          <p className="mt-3 text-sm text-ink/80">
            Uno spazio sicuro per ritrovare calma ed equilibrio. Scrivimi quando
            te la senti — senza fretta.
          </p>
          <p className="mt-3 text-sm text-ink/70">
            {b.studioName} · {b.addressLocality} ({b.addressRegion})
          </p>
        </div>

        {/* legal */}
        <nav aria-label="Note legali">
          <p className="text-sm font-semibold text-ink">Note legali</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/privacy" className="text-ink/85 transition hover:text-brand-deep">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="text-ink/85 transition hover:text-brand-deep">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* professional / contact */}
        <div>
          <p className="text-sm font-semibold text-ink">Contatti</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-ink/85 transition hover:text-brand-deep"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={b.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-deep ring-1 ring-brand/25 transition hover:bg-brand hover:text-canvas"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </li>
            <li>
              {b.alboUrl ? (
                <a
                  href={b.alboUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/85 transition hover:text-brand-deep"
                >
                  {alboLabel}
                </a>
              ) : (
                <span className="text-ink/70">{alboLabel}</span>
              )}
            </li>
            <li className="text-ink/70">
              P.IVA {b.vat || "[da inserire]"}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-ink/10 pt-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Dott.ssa {site.name} — {site.role} · Tutti i
        diritti riservati
      </div>
    </footer>
  );
}
