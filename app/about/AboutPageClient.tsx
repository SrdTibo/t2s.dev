"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPageClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioToast, setPortfolioToast] = useState(false);

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <motion.header
        className="w-full max-w-5xl mx-auto flex items-center justify-between py-8 px-6"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src="/T2S no back.png"
            alt="Logo T2S"
            className="h-12 w-12 object-contain"
          />
        </motion.div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Accueil
          </Link>
          <Link
            href="/about"
            className="text-lime-400 font-semibold border-b-2 border-lime-400 pb-1"
          >
            À propos
          </Link>

          <motion.button
            type="button"
            onClick={() => {
              setPortfolioToast(true);
              setTimeout(() => setPortfolioToast(false), 1800);
            }}
            className="relative text-gray-300 hover:text-lime-400 transition overflow-hidden"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <span className="relative inline-flex items-center">
              <span className="relative z-10">Portfolio</span>
              <motion.span
                variants={{
                  rest: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 },
                }}
                className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-lime-400"
                style={{ originX: 0 }}
              />
            </span>
          </motion.button>

          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <motion.button
          type="button"
          className="md:hidden inline-flex flex-col gap-[4px] p-1"
          onClick={() => setMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <span className="block h-[2px] w-6 bg-white"></span>
          <span className="block h-[2px] w-6 bg-white"></span>
          <span className="block h-[2px] w-6 bg-white"></span>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {portfolioToast && (
          <motion.div
            key="portfolio-toast-about"
            className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1120] border border-red-400/70 px-4 py-2 text-xs text-gray-100 shadow-lg">
              <span>🚧</span>
              <span>Section en construction.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu-about"
            className="fixed inset-0 z-50 bg-[#050816]/95 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-2">
                <img
                  src="/T2S no back.png"
                  alt="Logo T2S"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <motion.button
                type="button"
                className="inline-flex flex-col gap-[4px] p-1"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <span className="block h-[2px] w-6 bg-white rotate-45 translate-y-[3px]"></span>
                <span className="block h-[2px] w-6 bg-white -rotate-45 -translate-y-[3px]"></span>
              </motion.button>
            </div>

            <motion.nav
              className="flex-1 flex flex-col items-center justify-center gap-8 text-xl font-semibold text-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-lime-400 transition"
                >
                  Accueil
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-lime-400"
                >
                  À propos
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <motion.button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setPortfolioToast(true);
                    setTimeout(() => setPortfolioToast(false), 1800);
                  }}
                  className="relative text-gray-300 hover:text-lime-400 transition overflow-hidden"
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <span className="relative inline-flex items-center">
                    <span className="relative z-10">Portfolio</span>
                    <motion.span
                      variants={{
                        rest: { scaleX: 0, opacity: 0 },
                        hover: { scaleX: 1, opacity: 1 },
                      }}
                      className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-lime-400"
                      style={{ originX: 0 }}
                    />
                  </span>
                </motion.button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-lime-400 transition"
                >
                  Contact
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="w-full max-w-5xl mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              À propos de moi
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#f5f0e8]">
              Impact
              <br />
              Moderne
            </h1>

            <div className="mt-6 md:hidden flex justify-center">
              <motion.div
                className="w-full max-w-xs rounded-[2.5rem] overflow-hidden bg-[#0b1220] border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              >
                <div className="aspect-[3/4] bg-[#111827]">
                  <img
                    src="/me.jpg"
                    alt="Photo de Thibault Serdet"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
              J’accompagne particuliers, entreprises et startups pour concevoir,
              développer et déployer des sites web modernes, rapides, élégants
              et performants. Une expertise technique au service de votre
              visibilité et de vos objectifs.
            </p>
            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
              Je maîtrise un ensemble solide de technologies me permettant
              d’intervenir sur toutes les étapes d’un projet web : développement
              front-end en JavaScript (React, Next.js), intégration
              d’interfaces professionnelles (Kendo UI), conception et
              optimisation de bases de données Oracle/SQL, et développement
              back-end structuré via des ORM comme NHibernate. Mon parcours à 42
              m’a permis d’acquérir une rigueur technique rare, avec une vraie
              expertise en algorithmie, en programmation système en C/C++, en
              optimisation et en gestion fine des performances. Habité par une
              culture de qualité, je travaille au sein d’environnements
              exigeants, où la fiabilité, la précision et la maintenabilité du
              code sont essentielles.
            </p>
            <div className="mt-8">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-400 text-black text-sm font-semibold tracking-wide shadow-lg shadow-lime-500/40 hover:bg-lime-300 transition"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(190,242,100,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Discutons de votre projet
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex md:justify-end"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="w-full max-w-xs rounded-[2.5rem] overflow-hidden bg-[#0b1220] border border-white/10 shadow-2xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(15,23,42,0.9)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[3/4] bg-[#111827]">
                <img
                  src="/me.jpg"
                  alt="Photo de Thibault Serdet"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <span>© {new Date().getFullYear()} T2S. Tous droits réservés.</span>

        <div className="flex gap-4">
          <motion.a
            href="http://github.com/SrdTibo"
            className="hover:text-lime-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thibault-serdet/"
            className="hover:text-lime-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.footer>
    </main>
  );
}
