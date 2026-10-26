import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { ButtonLink, Card, Eyebrow } from "@/components/ui";
import { ZONES } from "@/components/site";

export const metadata: Metadata = {
  title: { absolute: "Développeur Web à Belfort – Création de sites modernes | T2S" },
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
    url: "/",
  },
  alternates: { canonical: "/" },
};

const SKILLS = [
  {
    label: "Référencement Google",
    tag: "SEO",
    description: "Optimisation SEO technique et visibilité sur les moteurs de recherche, dès la conception.",
    className: "md:col-span-2",
  },
  {
    label: "React / Next.js",
    tag: "Front-end",
    description: "Interfaces modernes, rapides et optimisées pour le SEO.",
  },
  {
    label: "WordPress",
    tag: "CMS",
    description: "Sites vitrines, CMS personnalisés et solutions e-commerce.",
  },
  {
    label: "TypeScript",
    tag: "Qualité",
    description: "Code robuste, typé et maintenable dans le temps.",
    className: "md:col-span-2",
  },
];

const STEPS = [
  { title: "Échange", text: "On discute de votre activité, de vos objectifs et de votre budget." },
  { title: "Conception", text: "Structure, contenus et maquette : on valide ensemble la direction." },
  { title: "Développement", text: "Un site rapide, responsive et pensé pour le référencement." },
  { title: "Mise en ligne", text: "Déploiement, suivi et accompagnement après le lancement." },
];

const TECH = ["Next.js", "React", "TypeScript", "WordPress", "Tailwind CSS", "SEO technique", "Node.js", "SQL", "C / C++"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <Reveal y={12}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-cream/80">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-lime" />
            </span>
            Disponible pour vos projets web
          </span>
        </Reveal>

        <SplitText
          delay={0.1}
          className="mt-8 max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          segments={[
            { text: "T2S. Votre partenaire de" },
            { text: "développement.", className: "font-serif font-normal italic text-lime" },
          ]}
        />

        <Reveal delay={0.5} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-cream/70">
            Des solutions modernes pour votre réussite digitale. Je conçois des sites web rapides, élégants et bien
            référencés, depuis Belfort et partout en France.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Me contacter</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              En savoir plus
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* BANDEAU TECHNOS */}
      <div className="relative border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} aria-hidden={i >= TECH.length} className="flex items-center gap-12 whitespace-nowrap font-mono text-sm text-muted">
              {t}
              <span className="text-lime">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* COMPÉTENCES */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal>
          <Eyebrow>Compétences</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Un stack moderne pour des projets <span className="font-serif font-normal italic text-lime">durables</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.label} delay={i * 0.08} className={skill.className}>
              <Card className="flex h-full min-h-56 flex-col justify-between">
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-lime">
                  {skill.tag}
                </span>
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold tracking-tight">{skill.label}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{skill.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal>
          <Eyebrow>Méthode</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            De l’idée à la mise en ligne, <span className="font-serif font-normal italic text-lime">simplement</span>.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="bg-ink">
              <Reveal delay={i * 0.08} className="group h-full p-6 transition-colors duration-500 hover:bg-ink-2">
                <span className="font-mono text-sm text-lime">0{i + 1}</span>
                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ZONES */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <Eyebrow>Zone d’intervention</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Basé à Belfort, <span className="font-serif font-normal italic text-lime">partout</span> en France.
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {ZONES.map((zone) => (
              <li
                key={zone}
                className="rounded-full border border-line px-4 py-2 text-sm text-cream/80 transition-colors duration-300 hover:border-lime/40 hover:text-lime"
              >
                {zone}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
