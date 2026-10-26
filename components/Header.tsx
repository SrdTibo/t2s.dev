"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { NAV_LINKS } from "./site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ease-out-expo ${
            scrolled
              ? "border-line bg-ink-2/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-full pr-3"
            aria-label="T2S – Accueil"
          >
            <Image
              src="/logo-t2s.jpg"
              alt=""
              width={40}
              height={40}
              priority
              className="size-10 object-contain mix-blend-lighten"
            />
            <span className="hidden text-sm font-semibold tracking-tight sm:block">T2S Développement</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active ? "text-ink" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {active && (
                    <m.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-lime"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full border border-line bg-white/5 py-2 pl-4 pr-2 text-sm transition-colors hover:border-lime/40 md:inline-flex"
          >
            Un projet ?
            <span className="grid size-6 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 ease-out-expo group-hover:-rotate-45">
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-50 grid size-11 place-items-center rounded-full border border-line bg-ink-2/70 backdrop-blur md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-500 ease-out-expo ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-500 ease-out-expo ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease }}
          >
            <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
              {NAV_LINKS.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-5xl font-semibold tracking-tight ${
                      isActive(link.href) ? "text-lime" : "text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </nav>
            <m.p
              className="text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
            >
              Développeur web basé à Belfort — disponible partout en France.
            </m.p>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
