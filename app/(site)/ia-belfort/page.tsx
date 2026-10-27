import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import ContactSection from "@/components/ContactSection";
import { ButtonLink, Card, Eyebrow } from "@/components/ui";
import { ZONES } from "@/components/site";

export const metadata: Metadata = {
  title: "Agents IA & développement C/C++ à Belfort",
  description:
    "Freelance IA à Belfort : agents IA, intégration de LLM, RAG sur vos données et automatisation, plus du développement C/C++ système, embarqué et temps réel. Intervention à Belfort, Montbéliard, dans le Doubs, en Alsace et partout en France.",
  keywords: [
    "agent IA Belfort",
    "intelligence artificielle Belfort",
    "freelance IA Belfort",
    "automatisation IA entreprise",
    "RAG entreprise",
    "développeur C++ Belfort",
    "développeur embarqué Montbéliard",
    "IA Franche-Comté",
  ],
  openGraph: {
    title: "Agents IA & C/C++ à Belfort – T2S",
    description: "Agents IA, LLM, RAG et automatisation, plus du C/C++ système et embarqué, à Belfort et alentours.",
    url: "/ia-belfort",
  },
  alternates: { canonical: "/ia-belfort" },
};

const SERVICES = [
  { title: "Agents IA", text: "Des agents qui traitent vos demandes, vos documents ou vos tickets de bout en bout." },
  { title: "Assistant interne", text: "Un assistant qui répond à partir de vos documents et de vos données (RAG)." },
  { title: "Automatisation", text: "Supprimer les tâches répétitives : saisie, tri, rapports, relances." },
  { title: "Intégration LLM", text: "Ajouter de l’IA à un logiciel ou un outil métier existant." },
  { title: "C / C++ & performance", text: "Optimiser ou développer du code critique, système ou temps réel." },
  { title: "Embarqué & IoT", text: "Logiciel pour microcontrôleurs, capteurs et objets connectés." },
];

export default function AiBelfortPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <Reveal y={12}>
          <Eyebrow>Belfort · Nord Franche-Comté</Eyebrow>
        </Reveal>
        <SplitText
          delay={0.1}
          className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          segments={[{ text: "L’IA au travail, à" }, { text: "Belfort.", className: "font-serif font-normal italic text-lime" }]}
        />
        <Reveal delay={0.4} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-cream/70">
            Un interlocuteur local pour intégrer l’IA dans votre activité : agents, automatisation et assistants branchés
            sur vos données. Et du C/C++ pour l’industrie, l’embarqué et le temps réel.
          </p>
          <ButtonLink href="#contact">Parler de votre projet</ButtonLink>
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
          intro="Décrivez votre besoin et je reviens vers vous rapidement avec des pistes concrètes et adaptées à vos objectifs."
        />
      </div>
    </>
  );
}
