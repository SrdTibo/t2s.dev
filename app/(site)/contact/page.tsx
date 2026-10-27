import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact – Agents IA & C/C++ à Belfort",
  description:
    "Contactez-moi pour un projet d’agent IA, d’intégration de LLM, de RAG, d’automatisation ou de développement C/C++. Basé à Belfort, disponible dans le Doubs, en Alsace, en Franche-Comté et partout en France.",
  keywords: [
    "contact freelance IA",
    "agent IA Belfort",
    "devis agent IA",
    "devis automatisation IA",
    "développeur C++ Belfort",
    "T2S",
  ],
  openGraph: {
    title: "Contact – T2S",
    description: "Un projet IA ou C/C++ ? Basé à Belfort, je vous réponds rapidement.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContactSection intro="Un besoin précis, une idée à affiner ou simplement des questions ? Décrivez votre projet et je reviens vers vous rapidement." />
  );
}
