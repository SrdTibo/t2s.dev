import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact – Développeur Web à Belfort",
  description:
    "Contactez-moi pour discuter de votre projet web : site vitrine, landing page, optimisation SEO ou développement sur mesure. Disponible à Belfort, Doubs, Alsace, Franche-Comté et France entière.",
  keywords: [
    "contact développeur web Belfort",
    "faire un site internet Belfort",
    "contact freelance web",
    "développeur Doubs contact",
    "développeur Alsace contact",
    "devis site internet Belfort",
    "T2S",
  ],
  openGraph: {
    title: "Contact – T2S Développeur Web Belfort",
    description: "Un projet ? Une question ? Développeur web basé à Belfort, je vous réponds rapidement.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContactSection intro="Un besoin précis, une idée à affiner ou simplement des questions ? Décrivez votre projet et je reviens vers vous rapidement." />
  );
}
