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
            <li className="flex items-center gap-2">
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
              <a
                href={b.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-deep ring-1 ring-brand/25 transition hover:bg-brand hover:text-canvas"
              >
                <svg width="18" height="18" viewBox="4 4 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
                  <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
                  <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-ink/85 transition hover:text-brand-deep"
              >
                {site.email}
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
