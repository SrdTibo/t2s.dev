"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioNotice, setPortfolioNotice] = useState(false);

  const skills = [
    {
      label: "Ref. Google (SEO)",
      description:
        "Optimisation SEO technique et visibilité sur les moteurs de recherche.",
      icon: "🔍",
    },
    {
      label: "WordPress",
      description: "Sites vitrines, CMS personnalisés et solutions e-commerce.",
      icon: "📝",
    },
    {
      label: "React / Next.js",
      description: "Interfaces modernes, rapides et optimisées pour le SEO.",
      icon: "⚛️",
    },
    {
      label: "TypeScript",
      description: "Code robuste, typé et maintenable dans le temps.",
      icon: "🧠",
    },
  ];

  const handlePortfolioClick = () => {
    setPortfolioNotice(true);
    setTimeout(() => {
      setPortfolioNotice(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col relative overflow-hidden">
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
          <Link
            href="/"
            className="text-lime-400 font-semibold border-b-2 border-lime-400 pb-1 hover:text-lime-300 transition"
          >
            Accueil
          </Link>
          <Link href="/about" className="hover:text-white transition">
            À propos
          </Link>

          <motion.button
            type="button"
            onClick={handlePortfolioClick}
            className="relative text-gray-300 transition"
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
        {portfolioNotice && (
          <motion.div
            key="portfolio-toast-home"
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
            key="mobile-menu"
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
                  className="text-lime-400"
                >
                  Accueil
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-lime-400 transition"
                >
                  À propos
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    handlePortfolioClick();
                  }}
                  className="relative text-gray-300 hover:text-lime-300 transition duration-200"
                >
                  <span className="relative inline-flex items-center">
                    <span className="relative z-10">Portfolio</span>
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-lime-400"
                      style={{ originX: 0 }}
                    />
                  </span>
                </button>
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
        id="home"
        className="flex-1 w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Impact Moderne
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-lime-400">
              T2S. Votre partenaire de développement.
            </span>
            <span className="block text-gray-100">
              Des solutions modernes pour votre réussite digitale.
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-xl"></p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="contact"
              className="px-6 py-3 rounded-full bg-lime-400 text-black font-semibold text-sm shadow-lg shadow-lime-500/30 hover:bg-lime-300 transition inline-flex items-center justify-center"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 25px rgba(190,242,100,0.5)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Me contacter
            </motion.a>

            <motion.a
              href="#services"
              className="text-sm text-gray-300 hover:text-white underline-offset-4 hover:underline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Voir mes services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="rounded-3xl border border-lime-500/40 bg-gradient-to-br from-lime-500/10 via-[#050816] to-[#050816] p-1"
            whileHover={{ boxShadow: "0 0 35px rgba(190,242,100,0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl bg-[#050816] p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xs font-semibold text-gray-400 tracking-[0.25em] uppercase">
                  Compétences
                </h2>
                <span className="text-[10px] text-lime-300 uppercase tracking-[0.2em]">
                  Full-stack web
                </span>
              </div>

              <p className="text-xs text-gray-500">
                Un stack moderne pour des projets maintenables, performants et
                évolutifs.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="group relative flex flex-col gap-2 rounded-2xl bg-[#050816] px-4 py-4 shadow-[0_0_0_1px_rgba(190,242,100,0.08)]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(190,242,100,0.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-sm font-semibold text-gray-100 group-hover:text-lime-200">
                        {skill.label}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-gray-400 group-hover:text-gray-200">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Disponible pour vos projets web.
              </div>
            </div>
          </motion.div>
        </motion.div>
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
