import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grain relative min-h-dvh overflow-x-clip">
      {/* Décor de fond */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-280px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-lime/[0.07] blur-[120px]" />
        <div className="animate-float absolute right-[-120px] top-[240px] h-[320px] w-[320px] rounded-full bg-lime/[0.06] blur-[100px]" />
      </div>

      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller au contenu
      </a>

      <Header />
      <main id="contenu" className="pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
