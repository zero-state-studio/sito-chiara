import Link from "next/link";
import FlameLogo from "./FlameLogo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-peach-deep px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.5fr_1fr]">
        <div>
          <FlameLogo withWordmark size={30} />
          <p className="mt-4 max-w-sm text-sm text-ink/80">
            Uno spazio sicuro per ritrovare calma ed equilibrio. Scrivimi quando
            te la senti — senza fretta.
          </p>
        </div>

        <nav aria-label="Navigazione footer" className="grid gap-2 text-sm sm:justify-end">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/85 transition hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-1 font-medium text-brand-deep transition hover:text-ink"
          >
            {site.email}
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-ink/10 pt-5 text-xs text-ink/70">
        © {site.name} · {site.role}
      </div>
    </footer>
  );
}
