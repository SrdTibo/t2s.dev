"use client";

import { m } from "framer-motion";

type Segment = { text: string; className?: string };

/** Titre animé mot par mot (effet "rideau"). */
export default function SplitText({
  segments,
  delay = 0,
  className,
  as: Tag = "h1",
}: {
  segments: Segment[];
  delay?: number;
  className?: string;
  as?: "h1" | "h2";
}) {
  let index = 0;
  return (
    <Tag className={className}>
      {segments.map((seg, s) => (
        <span key={s} className={seg.className}>
          {seg.text.split(" ").map((word, w) => {
            const i = index++;
            return (
              <span key={w} className="inline-block overflow-hidden pb-[0.12em] align-top">
                <m.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </m.span>
                {" "}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
