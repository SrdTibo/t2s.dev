import Reveal from "./Reveal";
import SplitText from "./SplitText";
import ContactForm from "./ContactForm";
import { Eyebrow } from "./ui";
import { SOCIAL_LINKS } from "./site";

export default function ContactSection({
  intro,
  as = "h1",
}: {
  intro: string;
  as?: "h1" | "h2";
}) {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 md:grid-cols-[1.4fr_1fr] md:pt-24">
      <div>
        <Reveal y={12}>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <SplitText
          as={as}
          delay={0.1}
          className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          segments={[{ text: "Discutons de votre" }, { text: "projet.", className: "font-serif font-normal italic text-lime" }]}
        />
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-lg leading-relaxed text-cream/70">{intro}</p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10">
          <ContactForm />
        </Reveal>
      </div>

      <Reveal delay={0.5} className="md:pt-24">
        <aside className="space-y-6 rounded-3xl border border-line bg-ink-2/60 p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Localisation</p>
            <p className="mt-2 text-cream/90">
              Basé à Belfort, disponible pour des projets à distance ou en collaboration avec vos équipes.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Réseaux</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-line px-3 py-1.5 text-sm text-cream/80 transition-colors hover:border-lime/40 hover:text-lime"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
