import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { ButtonLink, Card, Eyebrow } from "@/components/ui";
import { ZONES } from "@/components/site";

export const metadata: Metadata = {
  title: { absolute: "Agents IA & développement C/C++ à Belfort | T2S" },
  description:
    "Ingénieur logiciel basé à Belfort : agents IA sur mesure, intégration de LLM, RAG sur vos données, automatisation, et développement C/C++ (système, performance, embarqué, audio temps réel).",
  keywords: [
    "agent IA Belfort",
    "intelligence artificielle Belfort",
    "intégration LLM",
    "RAG entreprise",
    "automatisation IA",
    "développeur C++ Belfort",
    "programmation système",
    "optimisation performance C++",
    "embarqué IoT",
    "audio temps réel",
    "freelance IA Franche-Comté",
  ],
  openGraph: {
    title: "T2S – Agents IA & développement C/C++",
    description:
      "Agents IA, LLM, RAG et automatisation, plus du C/C++ système, embarqué et temps réel. Basé à Belfort, disponible partout en France.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

const AI_SKILLS = [
  {
    label: "Agents IA sur mesure",
    tag: "Agents",
    description:
      "Des agents qui utilisent vos outils et vos API pour exécuter des tâches complètes, pas seulement répondre à des questions.",
    className: "md:col-span-2",
  },
  {
    label: "Intégration LLM",
    tag: "API",
    description: "Brancher un modèle de langage dans votre produit : assistant, extraction, résumé, classification.",
  },
  {
    label: "RAG sur vos données",
    tag: "Données",
    description: "Une IA qui répond à partir de vos documents et de votre base de données, avec ses sources.",
  },
  {
    label: "Automatisation & workflows",
    tag: "Process",
    description: "Automatiser les tâches répétitives de vos équipes en y intégrant l’IA là où elle apporte vraiment.",
    className: "md:col-span-2",
  },
];

const SYSTEM_SKILLS = [
  { label: "Programmation système", tag: "Linux", description: "Processus, mémoire, réseau bas niveau : du code proche de la machine." },
  { label: "Optimisation & performance", tag: "Perf", description: "Profilage et accélération du code critique, algorithmie soignée." },
  { label: "Embarqué & IoT", tag: "Hardware", description: "Microcontrôleurs, capteurs et objets connectés, de la carte au logiciel." },
  { label: "Audio temps réel", tag: "DSP", description: "Traitement du signal et logiciels audio où chaque milliseconde compte." },
];

const STEPS = [
  { title: "Cadrage", text: "On identifie le problème, les données disponibles et ce qui mérite vraiment l’IA ou le bas niveau." },
  { title: "Prototype", text: "Une première version rapide pour valider la faisabilité sur vos cas réels." },
  { title: "Production", text: "Un code fiable, testé, mesuré et intégré à vos outils existants." },
  { title: "Suivi", text: "Évaluation, ajustements et évolutions une fois en service." },
];

const TECH = ["Agents IA", "LLM", "Claude API", "MCP", "RAG", "Embeddings", "TypeScript", "SQL", "C", "C++", "Linux", "Embarqué", "DSP", "Temps réel"];

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
            Disponible pour vos projets IA & C/C++
          </span>
        </Reveal>

        <SplitText
          delay={0.1}
          className="mt-8 max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          segments={[
            { text: "Agents IA &" },
            { text: "code bas niveau.", className: "font-serif font-normal italic text-lime" },
          ]}
        />

        <Reveal delay={0.5} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-cream/70">
            Je conçois des agents IA qui travaillent vraiment pour vous, et du C/C++ là où la performance et la fiabilité comptent. Depuis Belfort, partout en France.
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

      {/* IA */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal>
          <Eyebrow>Intelligence artificielle</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Une IA qui <span className="font-serif font-normal italic text-lime">agit</span>, pas qui fait de la figuration.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {AI_SKILLS.map((skill, i) => (
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

      {/* C / C++ */}
      <section className="mx-auto max-w-6xl px-6 pt-32">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>C / C++</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Au plus près de la <span className="font-serif font-normal italic text-lime">machine</span>.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted md:justify-self-end">
            Formé à 42, je travaille le C et le C++ pour les systèmes où la mémoire, la latence et la fiabilité ne se
            négocient pas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEM_SKILLS.map((skill, i) => (
            <Reveal key={skill.label} delay={i * 0.08}>
              <Card className="h-full">
                <span className="font-mono text-xs uppercase tracking-widest text-lime">{skill.tag}</span>
                <h3 className="mt-8 text-lg font-semibold">{skill.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
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
            De l’idée à la production, <span className="font-serif font-normal italic text-lime">simplement</span>.
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
