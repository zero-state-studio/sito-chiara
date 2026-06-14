import Link from "next/link";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-peach-deep px-5 pb-7 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <FlameLogo withWordmark size={30} />
          <p className="mt-3 text-sm text-ink/80">
            Uno spazio sicuro per ritrovare calma ed equilibrio. Scrivimi quando
            te la senti — senza fretta.
          </p>
          <p className="mt-3 text-sm text-ink/70">
            {site.business.studioName} · {site.business.addressLocality} (
            {site.business.addressRegion})
          </p>
        </div>

        <div className="md:text-right">
          <nav
            aria-label="Navigazione footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink/85 transition hover:text-brand-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block font-medium text-brand-deep transition hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-ink/10 pt-4 text-xs text-ink/70">
        © {site.name} · {site.role}
      </div>
    </footer>
  );
}
