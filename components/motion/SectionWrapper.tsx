import React from "react";
import Link from "next/link";

export default function SectionWrapper({
  children,
  label,
  number,
  title,
  intro,
  className = "",
  id,
  as: Heading = "h2",
  more
}: {
  children: React.ReactNode;
  label: string;
  number?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2";
  more?: { href: string; label: string };
}) {
  const headingId = `${id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} aria-label={title ? undefined : label} className={`relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-faint">
          {number ? <span className="chip-label text-aws-orange">{number.padStart(2, "0")}</span> : null}
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          <p className="chip-label">{label}</p>
        </div>
        {title ? (
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Heading id={headingId} className={`${Heading === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"} text-white`}>{title}</Heading>
            {intro || more ? (
              <div className="max-w-lg text-dim lg:justify-self-end">
                {intro}
                {more ? <Link href={more.href} className="mt-3 block w-fit font-mono text-xs uppercase tracking-widest text-aws-orange hover:text-white">{more.label} →</Link> : null}
              </div>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
