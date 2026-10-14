"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" }
];

const MEETUP = "https://www.meetup.com/aws-sbg-at-daffodil-international-academy/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-void/80 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="AWS Student Builders Group, home">
          <Image src="/brand/awssbg-mark.svg" alt="" width={34} height={34} className="h-8 w-8" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight text-white">AWS Student Builders Group</span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:block">Daffodil International Academy</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.href === pathname;
            return (
              <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined} className={`px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:text-white ${active ? "text-white" : "text-dim"}`}>
                {l.label}
              </Link>
            );
          })}
          <a href={MEETUP} target="_blank" rel="noopener noreferrer" className="ml-3 inline-flex items-center gap-1.5 bg-aws-orange px-4 py-2 text-sm font-bold text-void transition-transform hover:-translate-y-0.5">
            Join on Meetup <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <button type="button" className="p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-void px-4 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line/60 py-3.5 font-mono text-sm uppercase tracking-widest text-dim hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href={MEETUP} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-aws-orange py-3 text-sm font-bold text-void">
            Join on Meetup <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
