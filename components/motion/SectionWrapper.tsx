import React from "react";

export default function SectionWrapper({
  children,
  label,
  number,
  className = "",
  id
}: {
  children: React.ReactNode;
  label: string;
  number?: string;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          {number ? (
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#98a2b3]">
              {number.padStart(2, "0")} /
            </span>
          ) : null}
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#98a2b3]">
            {label}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
