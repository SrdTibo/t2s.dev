export const SITE_URL = "https://t2s.dev";
export const SITE_NAME = "T2S Développement";

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/ia-belfort", label: "Belfort" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/people/T2S-D%C3%A9veloppement/61583903848408/",
    label: "Facebook",
  },
  { href: "https://github.com/SrdTibo", label: "GitHub" },
  { href: "https://www.linkedin.com/in/thibault-serdet/", label: "LinkedIn" },
] as const;

export const ZONES = [
  "Belfort",
  "Montbéliard",
  "Héricourt",
  "Besançon",
  "Mulhouse",
  "Doubs",
  "Alsace",
  "Franche-Comté",
  "Toute la France",
] as const;
