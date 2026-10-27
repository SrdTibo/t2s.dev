import type { Metadata } from "next";

// Ancienne URL : redirige vers la nouvelle page (export statique, pas de redirection serveur)
export const metadata: Metadata = {
  title: "Redirection",
  robots: { index: false, follow: true },
  alternates: { canonical: "/ia-belfort" },
};

export default function LegacyBelfortRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ia-belfort" />
      <p style={{ padding: 24 }}>
        Cette page a déménagé : <a href="/ia-belfort">IA &amp; C/C++ à Belfort</a>.
      </p>
    </>
  );
}
