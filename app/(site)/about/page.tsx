import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { ButtonLink, Card, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos – Développeur Web à Belfort",
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
    description: "Développeur web basé à Belfort. Parcours, compétences et approche orientée qualité et performance.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const EXPERTISE = [
  { title: "Front-end", text: "JavaScript, React, Next.js et intégration d’interfaces professionnelles (Kendo UI)." },
  { title: "Données", text: "Conception et optimisation de bases de données Oracle / SQL." },
  { title: "Back-end", text: "Développement structuré via des ORM comme NHibernate." },
  { title: "Fondamentaux", text: "Formé à 42 : algorithmie, C/C++, programmation système et performances." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 md:grid-cols-[1.3fr_1fr] md:items-center md:pt-24">
        <div>
          <Reveal y={12}>
            <Eyebrow>À propos de moi</Eyebrow>
          </Reveal>
          <SplitText
            delay={0.1}
            className="mt-6 text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.9] tracking-[-0.04em]"
            segments={[{ text: "Impact" }, { text: "moderne.", className: "font-serif font-normal italic text-lime" }]}
          />
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
              J’accompagne particuliers, entreprises et startups pour concevoir, développer et déployer des sites web
              modernes, rapides, élégants et performants. Une expertise technique au service de votre visibilité et de
              vos objectifs.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-lime/10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/me.jpg"
              alt="Photo de Thibault Serdet, développeur web à Belfort"
              width={640}
              height={640}
              priority
              className="aspect-[4/5] w-full object-cover grayscale-[30%] transition duration-700 ease-out-expo hover:scale-[1.03] hover:grayscale-0"
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Thibault Serdet · Belfort
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal>
          <Eyebrow>Parcours</Eyebrow>
          <p className="mt-6 max-w-3xl text-2xl leading-snug tracking-tight text-cream/90 md:text-3xl">
            Mon parcours à 42 m’a permis d’acquérir une{" "}
            <span className="font-serif italic text-lime">rigueur technique</span> rare. Je travaille au sein
            d’environnements exigeants, où la fiabilité, la précision et la maintenabilité du code sont essentielles.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <span className="font-mono text-sm text-lime">0{i + 1}</span>
                <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <ButtonLink href="/contact">Discutons de votre projet</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
