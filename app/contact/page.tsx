import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact – Développeur Web à Belfort | T2S",
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
    description:
      "Un projet ? Une question ? Développeur web basé à Belfort, je vous réponds rapidement.",
    url: "https://t2s-france.com/contact",
    siteName: "T2S Développement",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://t2s-france.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
