import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="h-px w-6 bg-lime" />
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-cream/80 transition-colors duration-300 hover:border-cream/30 hover:text-cream"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-lime py-3 pl-6 pr-3 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgb(198_244_50/0.5)] transition-[background-color,box-shadow] duration-300 hover:bg-lime-soft hover:shadow-[0_0_60px_-6px_rgb(198_244_50/0.7)]"
    >
      {children}
      <span className="grid size-7 place-items-center rounded-full bg-ink text-lime transition-transform duration-500 ease-out-expo group-hover:-rotate-45">
        →
      </span>
    </Link>
  );
}

export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`spotlight rounded-3xl border border-line bg-ink-2/60 p-6 transition-colors duration-500 hover:border-lime/25 ${className}`}
    >
      {children}
    </div>
  );
}
