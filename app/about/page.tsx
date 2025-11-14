import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "À propos – Développeur Web à Belfort | T2S",
  description:
    "Découvrez mon parcours et ma vision du développement web. Développeur basé à Belfort, j’accompagne entreprises et indépendants en Franche-Comté, Doubs, Alsace et partout en France.",
  keywords: [
    "développeur web Belfort",
    "développeur freelance Belfort",
    "création site internet Belfort",
    "développeur Doubs",
    "développeur Alsace",
    "développeur Franche-Comté",
    "développeur web France",
    "T2S",
    "Thibault Serdet",
  ],
  openGraph: {
    title: "À propos – T2S",
    description:
      "Développeur web basé à Belfort. Parcours, compétences et approche orientée qualité et performance.",
    url: "https://t2s-france.com/about",
    siteName: "T2S",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://t2s-france.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
