import Image from "next/image";
import { ArrowUpRight, Globe, Quote } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>;
}
function LinkedinIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>;
}
import { committee, type CommitteeMember } from "@/content/committee";
import ScrollReveal from "@/components/motion/ScrollReveal";

const linkIcon = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Website: Globe, Facebook: Globe } as const;

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("");
}

function accentFor(m: CommitteeMember) {
  return m.group === "advisory" ? "#c25bd3" : m.group === "lead" ? "#ff9900" : "#5b9bff";
}

function Links({ m }: { m: CommitteeMember }) {
  if (!m.links?.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {m.links.map((l) => {
        const Icon = linkIcon[l.label];
        return (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer me" className="inline-flex items-center gap-1.5 border border-line bg-void/60 px-3 py-2 text-xs font-semibold text-dim transition-colors hover:border-aws-orange hover:text-white">
              <Icon size={14} aria-hidden="true" /> {l.label}
              <span className="sr-only"> profile of {m.name} (opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function LeaderCard({ m, level }: { m: CommitteeMember; level: "h2" | "h3" }) {
  const H = level;
  return (
    <ScrollReveal>
      <article className="node-panel grid overflow-hidden md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" aria-labelledby="leader-name">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[460px]">
          <Image
            src={m.photo!}
            alt={`${m.name}, Leader of the AWS Student Builders Group at Daffodil International Academy`}
            fill
            priority={false}
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 42vw, 100vw"
            className="object-cover object-top"
          />
          <span className="chip-label absolute left-4 top-4 bg-void/80 px-2 py-1 text-[10px] text-aws-orange backdrop-blur">Group leader</span>
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="chip-label text-aws-orange">Lead · student builder group leader</p>
          <H id="leader-name" className="mt-4 text-4xl text-white sm:text-5xl">
            {m.profile ? (
              <a href={m.profile} target="_blank" rel="noopener noreferrer me" className="group inline-flex items-start gap-2 hover:text-aws-orange">
                {m.name}
                <ArrowUpRight className="mt-1 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={22} aria-hidden="true" />
                <span className="sr-only">(personal website, opens in a new tab)</span>
              </a>
            ) : m.name}
          </H>
          <p className="mt-2 text-lg text-dim">{m.role}</p>
          {m.quote ? (
            <blockquote className="mt-7 border-l-2 border-sbg-purple pl-5">
              <Quote className="mb-2 text-sbg-purple" size={18} aria-hidden="true" />
              <p className="text-lg italic leading-8 text-ink">“{m.quote}”</p>
            </blockquote>
          ) : null}
          <Links m={m} />
        </div>
      </article>
    </ScrollReveal>
  );
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
                sizes={large ? "(min-width: 768px) 360px, 100vw" : "(min-width: 1024px) 220px, (min-width: 640px) 30vw, 46vw"}
                className="object-cover grayscale-[30%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            ) : (
              <div className="blueprint flex h-full items-center justify-center" role="img" aria-label={m.name}>
                <span className="font-display text-5xl font-bold text-white/80">{initials(m.name)}</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void/90 to-transparent" aria-hidden="true" />
            <span className="chip-label absolute left-3 top-3 bg-void/80 px-2 py-1 text-[10px] backdrop-blur" style={{ color: accent }}>
              {m.group === "advisory" ? "Advisory" : "Core"}
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
      {leader ? <LeaderCard m={leader} level={headingLevel} /> : null}
      <div>
        <G className="chip-label mb-6 text-faint">Faculty advisory</G>
        <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
          {advisory.map((m, i) => <MemberCard key={m.name} m={m} index={i} large level={card} />)}
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
