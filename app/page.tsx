import Link from "next/link";
import { Suspense } from "react";
import { ArrowUpRight, BookOpen, Code2, Globe2, Mail, Network, Sparkles, Users } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/motion/SectionWrapper";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import TeamGrid from "@/components/home/TeamGrid";
import EventsFeed from "@/components/events/EventsFeed";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ description: site.description, path: "/" });
import { leaderPersonJsonLd } from "@/content/committee";

const pillars = [
  { title: "Learn", icon: BookOpen, body: "Peer-led sessions that turn cloud concepts into working mental models, alongside AWS's own learning resources.", tag: "01 · foundations" },
  { title: "Build", icon: Code2, body: "Hands-on workshops and builder sessions where you deploy real things, not just read about them.", tag: "02 · hands-on" },
  { title: "Connect", icon: Users, body: "A campus community of builders, plus a door into AWS Builder Center and a global network of student groups.", tag: "03 · community" },
  { title: "Create Impact", icon: Sparkles, body: "Projects and events that solve real problems for our school and community, and grow your portfolio.", tag: "04 · outcomes" }
];

const benefits = [
  "Peer community of builders, developers and tech enthusiasts on campus",
  "Access to AWS Builder Center, a global hub for learning and collaboration",
  "Hands-on workshops and events designed to build real technical skills",
  "Learning resources, and swag or credits when they're made available"
];

function EventsFallback() {
  return <div className="node-panel h-40 animate-pulse" aria-label="Loading events" />;
}

export default function HomePage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
        <div className="blueprint blueprint-fade absolute inset-0" aria-hidden="true" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sbg-blue/20 blur-[120px]" aria-hidden="true" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sbg-purple/20 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-in">
            <p className="chip-label inline-flex items-center gap-2 border border-line bg-panel/70 px-3 py-1.5 text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-aws-orange pulse" aria-hidden="true" /> {site.institution}
            </p>
            <h1 className="mt-7 text-5xl text-white sm:text-6xl lg:text-7xl">
              Architect your <span className="gradient-text">future</span> on the cloud.
            </h1>
            <p className="mt-6 font-mono text-sm text-aws-orange">{site.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-dim">
              The AWS Student Builders Group at {site.institution} is a student-led community for learning cloud and AI by building, part of a global network of 600+ student-led groups connected to AWS Builder Center.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.meetup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-aws-orange px-5 py-3.5 text-sm font-bold text-void transition-transform hover:-translate-y-0.5">
                Join on Meetup <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href={site.builderCenterJoin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-sbg-blue/70 bg-sbg-blue/10 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-sbg-blue/20">
                Join AWS Builder Center <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <Link href="/events" className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-dim underline decoration-line underline-offset-4 transition-colors hover:text-white">
                Browse events
              </Link>
            </div>
          </div>
          <div className="hero-in hero-delay">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <SectionWrapper id="about" label="About the group" number="01" className="border-t border-line" title={<>A community that <span className="gradient-text">ships</span>.</>} intro="No previous cloud experience required. Every activity is designed to turn an idea into something that runs.">
        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, icon: Icon, body, tag }, i) => (
            <ScrollReveal key={title} delay={i * 0.07} className="h-full border-b border-r border-line">
              <div className="group h-full bg-void p-6 transition-colors hover:bg-panel sm:p-7">
                <p className="font-mono text-[10px] text-faint">{tag}</p>
                <Icon className="mt-6 text-sbg-blue transition-colors group-hover:text-aws-orange" size={26} aria-hidden="true" />
                <h3 className="mt-5 text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dim">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="node-panel h-full p-7">
              <Network className="text-sbg-purple" size={24} aria-hidden="true" />
              <h3 className="mt-4 text-2xl text-white">Part of a global network</h3>
              <p className="mt-3 leading-7 text-dim">We're one of 600+ student-led groups connected to AWS Builder Center, AWS's community platform for builders at every skill level.</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <a href={site.builderCenterJoin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-aws-orange">Join the AWS community <ArrowUpRight size={15} aria-hidden="true" /></a>
                <a href={site.builderGroups} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-dim hover:text-white">About Builder Groups <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="node-panel h-full p-7">
              <Globe2 className="text-aws-orange" size={24} aria-hidden="true" />
              <h3 className="mt-4 text-2xl text-white">What members get</h3>
              <ul className="mt-4 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-6 text-dim"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-aws-orange" aria-hidden="true" />{b}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* EVENTS */}
      <SectionWrapper id="events" label="Events · live from Meetup" number="02" className="border-t border-line bg-panel/40" title="What's deploying next." intro="Workshops, builder sessions and meetups. Every event is managed on Meetup, so RSVP there to save your seat.">
        <Suspense fallback={<EventsFallback />}>
          <EventsFeed limitUpcoming={3} limitPast={3} />
        </Suspense>
      </SectionWrapper>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(leaderPersonJsonLd) }} />
      {leaderPersonJsonLd.sameAs.map((url) => <link key={url} rel="me" href={url} />)}
      {/* TEAM */}
      <SectionWrapper id="team" label="The people" number="03" more={{ href: "/team", label: "Team page" }} className="border-t border-line" title={<>Meet the <span className="gradient-text">builders</span>.</>} intro="The faculty and students who keep the group running.">
        <TeamGrid />
      </SectionWrapper>

      {/* CONTACT */}
      <SectionWrapper id="contact" label="Get involved" number="04" className="border-t border-line">
        <div className="relative overflow-hidden border border-line bg-panel p-8 sm:p-12">
          <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-4xl text-white sm:text-5xl">Ready to start building?</h2>
              <p className="mt-5 max-w-xl text-dim">Open to {site.institution} students. Join the AWS community on Builder Center, RSVP to events on Meetup, follow us on Facebook, or send us an email.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={site.builderCenterJoin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-aws-orange px-5 py-4 text-sm font-bold text-void">Join AWS Builder Center <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href={site.meetup} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-aws-orange/60 bg-void px-5 py-4 text-sm font-bold text-white hover:bg-aws-orange/10">Join on Meetup <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-line bg-void px-5 py-4 text-sm font-semibold text-white hover:border-sbg-blue">Follow on Facebook <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href={`mailto:${site.email}`} className="flex items-center justify-between border border-line bg-void px-5 py-4 text-sm font-semibold text-white hover:border-sbg-purple">{site.email} <Mail size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-faint">
          How the group is run: read our <Link href="/constitution" className="text-dim underline decoration-line underline-offset-4 hover:text-white">draft constitution</Link>.
        </p>
      </SectionWrapper>
    </main>
  );
}
