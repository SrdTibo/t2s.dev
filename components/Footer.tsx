import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "./site";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-muted">Un projet en tête ?</p>
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-4 text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Parlons-en
              <span className="grid size-12 place-items-center rounded-full bg-lime text-2xl text-ink transition-transform duration-500 ease-out-expo group-hover:-rotate-45 sm:size-16">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-cream/70 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-cream/70 hover:text-cream"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} T2S. Tous droits réservés.</span>
          <span>Conçu et développé à Belfort.</span>
        </div>
      </div>
    </footer>
  );
}
