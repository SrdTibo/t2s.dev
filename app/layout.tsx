import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/components/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Développeur Web à Belfort – Création de sites modernes | T2S",
    template: "%s | T2S",
  },
  description:
    "Développeur web basé à Belfort : sites modernes, rapides et optimisés SEO pour entreprises et indépendants en Franche-Comté, Doubs, Alsace et partout en France.",
  applicationName: SITE_NAME,
  authors: [{ name: "Thibault Serdet" }],
  openGraph: {
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-t2s.jpg", width: 400, height: 400, alt: "Logo T2S" }],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og-t2s.jpg`,
  founder: { "@type": "Person", name: "Thibault Serdet" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belfort",
    postalCode: "90000",
    addressRegion: "Bourgogne-Franche-Comté",
    addressCountry: "FR",
  },
  areaServed: ["Belfort", "Doubs", "Alsace", "Franche-Comté", "France"],
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
