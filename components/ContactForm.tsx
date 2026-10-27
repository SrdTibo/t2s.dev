"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-line bg-ink-2 px-4 py-3 text-sm text-cream placeholder:text-muted/60 outline-none transition duration-300 focus:border-lime/60 focus:bg-ink-3 focus:ring-4 focus:ring-lime/10";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Champ piège invisible : les robots le remplissent, pas les humains
    if (data.get("website")) return;

    setStatus("sending");
    try {
      // Chargé seulement à l'envoi pour alléger la page
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        "service_uo6b7f7",
        "template_uend7bw",
        {
          from_name: data.get("name") as string,
          reply_to: data.get("email") as string,
          subject: data.get("subject") as string,
          message: data.get("message") as string,
          budget: data.get("budget") as string,
        },
        "ZZktrIuZRhk8nwbhy"
      );
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Votre nom" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="vous@exemple.com" className={inputClass} />
        </Field>
      </div>

      <Field label="Sujet" htmlFor="subject">
        <input id="subject" name="subject" type="text" required placeholder="Agent IA, automatisation, optimisation C++…" className={inputClass} />
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea id="message" name="message" rows={5} required placeholder="Parlez-moi de votre projet, de votre activité, de vos attentes…" className={`${inputClass} resize-none`} />
      </Field>

      <Field label="Budget estimé (optionnel)" htmlFor="budget">
        <input id="budget" name="budget" type="text" placeholder="Fourchette, ordre de grandeur, à définir…" className={inputClass} />
      </Field>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full bg-lime py-3 pl-6 pr-3 text-sm font-semibold text-ink transition hover:bg-lime-soft disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          <span className="grid size-7 place-items-center rounded-full bg-ink text-lime transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
            →
          </span>
        </button>

        <div aria-live="polite" className="min-h-6 text-sm">
          <AnimatePresence mode="wait">
            {status === "sent" && (
              <m.p key="sent" className="text-lime" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                ✓ Message envoyé, je reviens vers vous rapidement.
              </m.p>
            )}
            {status === "error" && (
              <m.p key="error" className="text-red-400" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                Une erreur est survenue. Veuillez réessayer.
              </m.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-xs font-medium tracking-wide text-cream/70">
        {label}
      </label>
      {children}
    </div>
  );
}
