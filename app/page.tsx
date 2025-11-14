import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "Développeur Web à Belfort – Création de sites modernes | T2S",
  description:
    "Développeur web basé à Belfort, spécialisé en création de sites modernes, performants et optimisés SEO. J’accompagne entreprises et indépendants en Franche-Comté, Doubs, Alsace et partout en France.",
  keywords: [
    "développeur web Belfort",
    "création site internet Belfort",
    "site vitrine Belfort",
    "développeur Doubs",
    "développeur Alsace",
    "développeur Franche-Comté",
    "freelance web Belfort",
    "création site professionnel",
    "Next.js",
    "React",
    "développeur freelance France",
  ],
  openGraph: {
    title: "T2S – Développeur Web à Belfort",
    description:
      "Sites web modernes, rapides et optimisés SEO. Développeur basé à Belfort, disponible dans le Doubs, l’Alsace, la Franche-Comté et toute la France.",
    url: "https://t2s-france.com/",
    siteName: "T2S Développement",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://t2s-france.com/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
