import Image from "next/image";
import { BookOpen, Hammer, Users, Rocket } from "lucide-react";

const nodes = [
  { label: "Learn", sub: "skill-builder", icon: BookOpen, pos: "left-0 top-0", color: "#2f7bff" },
  { label: "Build", sub: "workshops", icon: Hammer, pos: "right-0 top-0", color: "#b23bc4" },
  { label: "Connect", sub: "meetup-events", icon: Users, pos: "left-0 bottom-0", color: "#b23bc4" },
  { label: "Create Impact", sub: "projects", icon: Rocket, pos: "right-0 bottom-0", color: "#ff9900" }
];

/** Decorative AWS-architecture-style diagram for the hero. */
export default function ArchitectureDiagram() {
  return (
    <figure className="relative mx-auto aspect-[1/1] w-full max-w-[480px]" aria-label="Diagram: Learn, Build, Connect and Create Impact all flow through the AWS Student Builders Group">
      <div className="absolute inset-3 border border-dashed border-sbg-blue/40" aria-hidden="true">
        <span className="chip-label absolute -top-2.5 left-4 bg-void px-2 text-[10px] text-sbg-blue">Region · dia-dhaka-1</span>
        <span className="chip-label absolute -bottom-2.5 right-4 bg-void px-2 text-[10px] text-faint">vpc/sbg-community</span>
      </div>
      <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full" aria-hidden="true" fill="none">
        <g strokeWidth="1.5">
          <path d="M120 112 V 180 H 196" stroke="#2f7bff" className="flow" />
          <path d="M360 112 V 180 H 284" stroke="#b23bc4" className="flow" />
          <path d="M120 368 V 300 H 196" stroke="#b23bc4" className="flow" />
          <path d="M360 368 V 300 H 284" stroke="#ff9900" className="flow" />
          <path d="M240 60 V 172" stroke="#1d2a52" />
          <path d="M240 308 V 420" stroke="#1d2a52" />
        </g>
        <g fill="#060914" strokeWidth="1.5">
          <circle cx="196" cy="180" r="4" stroke="#2f7bff" className="pulse" />
          <circle cx="284" cy="180" r="4" stroke="#b23bc4" className="pulse" />
          <circle cx="196" cy="300" r="4" stroke="#b23bc4" className="pulse" />
          <circle cx="284" cy="300" r="4" stroke="#ff9900" className="pulse" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 border border-sbg-blue/60 bg-panel shadow-[0_0_60px_rgba(47,123,255,0.25)] sm:h-40 sm:w-40">
        <Image src="/brand/awssbg-mark.svg" alt="" width={72} height={72} className="h-16 w-16 sm:h-[72px] sm:w-[72px]" priority />
        <span className="chip-label text-[10px] text-dim">sbg-core</span>
      </div>
      <div className="absolute inset-8">
        {nodes.map(({ label, sub, icon: Icon, pos, color }) => (
          <div key={label} className={`node-panel absolute ${pos} w-[42%] max-w-[170px] p-3 sm:p-4`}>
            <span className="flex h-8 w-8 items-center justify-center" style={{ backgroundColor: `${color}22`, color }}>
              <Icon size={17} aria-hidden="true" />
            </span>
            <p className="mt-3 font-display text-sm font-bold text-white sm:text-base">{label}</p>
            <p className="font-mono text-[10px] text-faint">{sub}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
