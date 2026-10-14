import Image from "next/image";
import { committee, type CommitteeMember } from "@/content/committee";
import ScrollReveal from "@/components/motion/ScrollReveal";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("");
}

function MemberCard({ m, featured = false, index }: { m: CommitteeMember; featured?: boolean; index: number }) {
  const accent = m.group === "advisory" ? "#b23bc4" : m.group === "lead" ? "#ff9900" : "#2f7bff";
  return (
    <ScrollReveal delay={(index % 4) * 0.07}>
      <figure className="group relative h-full">
        <div className="relative overflow-hidden border border-line bg-panel">
          <div className="relative aspect-[4/5]">
            {m.photo ? (
              <Image
                src={m.photo}
                alt={`Portrait of ${m.name}`}
                fill
                sizes={featured ? "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"}
                className="object-cover grayscale-[35%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            ) : (
              <div className="blueprint flex h-full items-center justify-center" role="img" aria-label={`${m.name} (photo coming soon)`}>
                <span className="font-display text-5xl font-bold text-white/80">{initials(m.name)}</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void via-void/60 to-transparent" aria-hidden="true" />
            <span className="chip-label absolute left-3 top-3 bg-void/80 px-2 py-1 text-[10px] backdrop-blur" style={{ color: accent }}>
              {m.group === "advisory" ? "Advisory" : m.group === "lead" ? "Lead" : "Core"}
            </span>
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }} aria-hidden="true" />
          </div>
          <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: accent }} aria-hidden="true" />
        </div>
        <figcaption className="mt-4">
          <h3 className={`${featured ? "text-2xl" : "text-lg"} text-white`}>{m.name}</h3>
          <p className="mt-1 text-sm font-medium" style={{ color: accent }}>{m.role}</p>
          {m.title ? <p className="mt-0.5 text-xs text-faint">{m.title}</p> : null}
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}

export default function TeamGrid() {
  const featured = committee.filter((m) => m.group !== "core");
  const core = committee.filter((m) => m.group === "core");
  return (
    <div className="space-y-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((m, i) => <MemberCard key={m.name} m={m} featured index={i} />)}
      </div>
      <div>
        <p className="chip-label mb-6 text-faint">Core team</p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {core.map((m, i) => <MemberCard key={m.name} m={m} index={i} />)}
        </div>
      </div>
    </div>
  );
}
