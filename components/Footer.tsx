import Link from "next/link";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

const b = site.business;
const alboLabel = `Albo Psicologi E.R. n° ${b.alboNumber}`;

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

        {/* navigation */}
        <nav aria-label="Navigazione footer">
          <p className="text-sm font-semibold text-ink">Naviga</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink/85 transition hover:text-brand-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
                className="text-ink/85 transition hover:text-brand-deep"
              >
                LinkedIn
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

      <div className="mx-auto mt-10 max-w-7xl border-t border-ink/10 pt-4 text-xs text-ink/70">
        © {site.name} · {site.role}
      </div>
    </footer>
  );
}
