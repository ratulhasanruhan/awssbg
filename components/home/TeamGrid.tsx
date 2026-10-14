import { committee, type CommitteeMember } from "@/content/committee";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Image from "next/image";


function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("");
}

function accentFor(m: CommitteeMember) {
  return m.group === "advisory" ? "#c25bd3" : m.group === "lead" ? "#ff9900" : "#5b9bff";
}

function MemberCard({ m, index, large = false, level }: { m: CommitteeMember; index: number; large?: boolean; level: "h3" | "h4" }) {
  const H = level;
  const accent = accentFor(m);
  return (
    <ScrollReveal delay={(index % 5) * 0.06}>
      <figure className="group relative h-full">
        <div className="relative overflow-hidden border border-line bg-panel">
          <div className="relative aspect-[4/5]">
            {m.photo ? (
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes={large ? "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 220px, (min-width: 640px) 30vw, 46vw"}
                className="object-cover grayscale-[30%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            ) : (
              <div className="blueprint flex h-full items-center justify-center" role="img" aria-label={m.name}>
                <span className="font-display text-5xl font-bold text-white/80">{initials(m.name)}</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void/90 to-transparent" aria-hidden="true" />
            <span className="chip-label absolute left-3 top-3 bg-void/80 px-2 py-1 text-[10px] backdrop-blur" style={{ color: accent }}>
              {m.group === "advisory" ? "Advisory" : m.group === "lead" ? "Lead" : "Core"}
            </span>
          </div>
          <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: accent }} aria-hidden="true" />
        </div>
        <figcaption className="mt-4">
          <H className={`${large ? "text-2xl" : "text-lg"} text-white`}>{m.name}</H>
          <p className="mt-1 text-sm font-medium" style={{ color: accent }}>{m.role}</p>
          {m.title ? <p className="mt-0.5 text-xs text-faint">{m.title}</p> : null}
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}

export default function TeamGrid({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const G = headingLevel;
  const card = headingLevel === "h2" ? "h3" : "h4";
  const leader = committee.find((m) => m.group === "lead");
  const advisory = committee.filter((m) => m.group === "advisory");
  const core = committee.filter((m) => m.group === "core");
  return (
    <div className="space-y-16">
      <div>
        <G className="chip-label mb-6 text-faint">Advisory &amp; leadership</G>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...advisory, ...(leader ? [leader] : [])].map((m, i) => <MemberCard key={m.name} m={m} index={i} large level={card} />)}
        </div>
      </div>
      <div>
        <G className="chip-label mb-6 text-faint">Core team</G>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5">
          {core.map((m, i) => <MemberCard key={m.name} m={m} index={i} level={card} />)}
        </div>
      </div>
    </div>
  );
}
