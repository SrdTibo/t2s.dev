"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPageClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioToast, setPortfolioToast] = useState(false);
  const [sentToast, setSentToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handlePortfolioClick = () => {
    setPortfolioToast(true);
    setTimeout(() => setPortfolioToast(false), 1800);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorToast(false);
    setSentToast(false);
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const params = {
      from_name: formData.get("name") as string,
      reply_to: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      budget: formData.get("budget") as string,
    };

    try {
      await emailjs.send(
        "service_uo6b7f7",
        "template_uend7bw",
        params,
        "ZZktrIuZRhk8nwbhy"
      );
      setSentToast(true);
      form.reset();
      setTimeout(() => setSentToast(false), 2500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorToast(true);
      setTimeout(() => setErrorToast(false), 2500);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* ----------------------------------------------- */}
      {/*                     HEADER                      */}
      {/* ----------------------------------------------- */}
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
          <img src="/T2S no back.png" alt="Logo T2S" className="h-12 w-12 object-contain" />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          <Link href="/about" className="hover:text-white transition">À propos</Link>

          {/* PORTFOLIO ANIMÉ */}
          <motion.button
            type="button"
            onClick={handlePortfolioClick}
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

          <Link
            href="/contact"
            className="text-lime-400 font-semibold border-b-2 border-lime-400 pb-1 hover:text-lime-300 transition"
          >
            Contact
          </Link>
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

      {/* ----------------------------------------------- */}
      {/*                   TOAST PORTFOLIO               */}
      {/* ----------------------------------------------- */}
      <AnimatePresence>
        {portfolioToast && (
          <motion.div
            key="portfolio-toast-contact"
            className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1120] border border-red-400/70 px-4 py-2 text-xs text-gray-100 shadow-lg">
              <span>🚧</span>
              <span>Section portfolio en construction.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------- */}
      {/*                 TOAST MESSAGE SENT              */}
      {/* ----------------------------------------------- */}
      <AnimatePresence>
        {sentToast && (
          <motion.div
            key="sent-toast-contact"
            className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1120] border border-lime-400/70 px-4 py-2 text-xs text-gray-100 shadow-lg">
              <span>✅</span>
              <span>Votre message a bien été envoyé.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------- */}
      {/*                TOAST ERROR SENDING              */}
      {/* ----------------------------------------------- */}
      <AnimatePresence>
        {errorToast && (
          <motion.div
            key="error-toast-contact"
            className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1120] border border-red-400/70 px-4 py-2 text-xs text-gray-100 shadow-lg">
              <span>⚠️</span>
              <span>Une erreur est survenue. Veuillez réessayer.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------- */}
      {/*               MENU MOBILE (ANIMÉ)               */}
      {/* ----------------------------------------------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu-contact"
            className="fixed inset-0 z-50 bg-[#050816]/95 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-6">
              <img src="/T2S no back.png" alt="Logo T2S" className="h-12 w-12 object-contain" />

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
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">Accueil</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-lime-400">À propos</Link>

              {/* mobile portfolio button */}
              <motion.button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  handlePortfolioClick();
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

              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lime-400">
                Contact
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------- */}
      {/*                  SECTION CONTACT                */}
      {/* ----------------------------------------------- */}
      <motion.section
        className="w-full max-w-5xl mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">

          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">Contact</p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#f5f0e8]">
              Discutons de votre projet.
            </h1>

            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Un besoin précis, une idée à affiner ou simplement des questions ?
              Décrivez votre projet et je reviens vers vous rapidement.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-gray-300 tracking-wide">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40 transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-gray-300 tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40 transition"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-medium text-gray-300 tracking-wide">
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40 transition"
                  placeholder="Refonte de site, développement sur-mesure..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-gray-300 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40 transition resize-none"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs font-medium text-gray-300 tracking-wide">
                  Budget estimé (optionnel)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  className="w-full rounded-xl bg-[#020617] border border-white/10 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40 transition"
                  placeholder="Fourchette, ordre de grandeur, à définir..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-lime-500/40 hover:bg-lime-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
                whileHover={
                  isSending
                    ? {}
                    : { scale: 1.04, boxShadow: "0 0 25px rgba(190,242,100,0.5)" }
                }
                whileTap={isSending ? {} : { scale: 0.96 }}
              >
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* ------------------------------------------- */}
          {/*        COLONNE DROITE — INFOS CONTACT       */}
          {/* ------------------------------------------- */}
          <motion.div
            className="hidden md:flex md:justify-end"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="w-full max-w-xs rounded-[2.5rem] bg-gradient-to-br from-lime-500/10 via-[#020617] to-[#020617] border border-lime-400/40 shadow-2xl p-5 flex flex-col gap-4"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 35px rgba(190,242,100,0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs font-semibold text-gray-400 tracking-[0.25em] uppercase">
                Infos
              </div>

              <div className="space-y-3 text-sm text-gray-200">
                <p className="text-gray-300">
                  Basé en France, disponible pour des projets à distance ou en collaboration.
                </p>

                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</p>
                  <a
                    href="mailto:t2s.france.contact@gmail.com"
                    className="text-sm text-lime-300 hover:text-lime-200 break-all"
                  >
                    t2s.france.contact@gmail.com
                  </a>
                </div>

                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Réseaux</p>
                  <div className="flex gap-4 text-sm">
                    <a href="http://github.com/SrdTibo" className="hover:text-lime-300">GitHub</a>
                    <a href="https://www.linkedin.com/in/thibault-serdet/" className="hover:text-lime-300">LinkedIn</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>

      {/* ----------------------------------------------- */}
      {/*                     FOOTER                      */}
      {/* ----------------------------------------------- */}
      <motion.footer
        className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <span>© {new Date().getFullYear()} T2S. Tous droits réservés.</span>

        <div className="flex gap-4">
          <motion.a
            href="https://www.facebook.com/people/T2S-D%C3%A9veloppement/61583903848408/"
            className="hover:text-lime-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </motion.a>
          <motion.a
            href="http://github.com/SrdTibo"
            className="hover:text-lime-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thibault-serdet/"
            className="hover:text-lime-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.footer>

    </main>
  );
}
