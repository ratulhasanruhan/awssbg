import React from "react";

export default function SectionWrapper({
  children,
  label,
  number,
  title,
  intro,
  className = "",
  id
}: {
  children: React.ReactNode;
  label: string;
  number?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const headingId = id ? `${id}-heading` : undefined;
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
            <h2 id={headingId} className="text-4xl text-white sm:text-5xl">{title}</h2>
            {intro ? <div className="max-w-lg text-dim lg:justify-self-end">{intro}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
