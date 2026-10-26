import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import ContactSection from "@/components/ContactSection";
import { ButtonLink, Card, Eyebrow } from "@/components/ui";
import { ZONES } from "@/components/site";

export const metadata: Metadata = {
  title: "Développeur web à Belfort – Création de site internet",
  description:
    "Développeur web freelance à Belfort : création de site vitrine, landing page, refonte, optimisation SEO et développement sur mesure. Intervention à Belfort, Montbéliard, dans le Doubs, en Alsace et partout en France.",
  keywords: [
    "développeur web Belfort",
    "création site internet Belfort",
    "site vitrine Belfort",
    "freelance web Belfort",
    "développeur Montbéliard",
    "développeur Doubs",
    "développeur Alsace",
    "devis site internet Belfort",
  ],
  openGraph: {
    title: "Développeur web à Belfort – T2S",
    description: "Sites vitrines, landing pages et développement sur mesure, rapides et optimisés SEO, à Belfort et alentours.",
    url: "/developpeur-web-belfort",
  },
  alternates: { canonical: "/developpeur-web-belfort" },
};

const SERVICES = [
  { title: "Site vitrine", text: "Présentez votre activité avec un site clair, élégant et facile à faire évoluer." },
  { title: "Landing page", text: "Une page ciblée pour une offre, un lancement ou une campagne." },
  { title: "Refonte", text: "Modernisez un site existant : design, vitesse, mobile et référencement." },
  { title: "SEO local", text: "Soyez trouvé à Belfort et alentours sur les recherches qui comptent." },
  { title: "Sur mesure", text: "Outils et applications web adaptés à vos besoins métier." },
  { title: "Suivi", text: "Mises à jour, évolutions et accompagnement après la mise en ligne." },
];

export default function DeveloperBelfortPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <Reveal y={12}>
          <Eyebrow>Belfort · Territoire de Belfort</Eyebrow>
        </Reveal>
        <SplitText
          delay={0.1}
          className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          segments={[{ text: "Développeur web à" }, { text: "Belfort.", className: "font-serif font-normal italic text-lime" }]}
        />
        <Reveal delay={0.4} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-cream/70">
            Un interlocuteur local pour créer ou moderniser votre site internet : rapide, responsive et optimisé pour
            Google. J’accompagne commerces, artisans, indépendants et entreprises du Nord Franche-Comté.
          </p>
          <ButtonLink href="#contact">Demander un devis</ButtonLink>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-28">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Secteurs couverts</p>
          <p className="mt-3 text-2xl tracking-tight text-cream/80">{ZONES.join(" · ")}</p>
        </Reveal>
      </section>

      <div id="contact" className="scroll-mt-24">
        <ContactSection
          as="h2"
          intro="Décrivez votre projet et je reviens vers vous rapidement avec des pistes concrètes et adaptées à vos objectifs."
        />
      </div>
    </>
  );
}
