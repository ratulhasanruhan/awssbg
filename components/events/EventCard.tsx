import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin, Sparkles, Users } from "lucide-react";
import { formatEventDate, type MeetupEvent } from "@/lib/meetup";
import type { EventHighlight } from "@/content/event-highlights";

function EventArtwork({ event, wide }: { event: MeetupEvent; wide?: boolean }) {
  const d = formatEventDate(event.start);
  return (
    <div className="relative aspect-[16/9] self-center overflow-hidden border-b border-line bg-void md:border-b-0 md:border-r">
      {event.image ? (
        <Image
          src={event.image}
          alt=""
          fill
          sizes={wide ? "(min-width: 768px) 52vw, 100vw" : "(min-width: 768px) 320px, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="blueprint absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-aws-orange">{d.month}</span>
          <span className="font-display text-5xl font-bold text-white">{d.day}</span>
        </div>
      )}
    </div>
  );
}

function EventMeta({ event, past }: { event: MeetupEvent; past?: boolean }) {
  const d = formatEventDate(event.start);
  return (
    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-dim">
      <li className="flex items-center gap-1.5"><CalendarDays size={14} aria-hidden="true" /><time dateTime={event.start}>{d.full}</time></li>
      {event.venue ? <li className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{event.venue}</li> : null}
      {typeof event.rsvps === "number" && event.rsvps > 0 ? <li className="flex items-center gap-1.5"><Users size={14} aria-hidden="true" />{event.rsvps} {past ? "RSVPs" : "going"}</li> : null}
    </ul>
  );
}

function RecapGallery({ highlight }: { highlight: EventHighlight }) {
  return (
    <div>
      <p className="chip-label text-dim">Session photos</p>
      <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {highlight.photos.map((photo, i) => (
          <li key={photo.src} className={i === 0 ? "col-span-2 sm:col-span-1" : undefined}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" className="group/photo relative block aspect-[4/3] overflow-hidden border border-line bg-void">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 30vw, 100vw"
                className="object-cover transition duration-500 group-hover/photo:scale-[1.03]"
              />
              <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 border border-line bg-void/85 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white opacity-0 transition-opacity group-hover/photo:opacity-100 group-focus-visible/photo:opacity-100">
                Open <ArrowUpRight size={12} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitHighlights({ highlight, labelledBy }: { highlight: EventHighlight; labelledBy: string }) {
  return (
    <div className="border border-aws-orange/45 bg-aws-orange/[0.07] p-4 sm:p-5" aria-labelledby={labelledBy}>
      <p id={labelledBy} className="chip-label flex items-center gap-2 text-aws-orange">
        <Sparkles size={13} aria-hidden="true" /> What attendees got
      </p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {highlight.benefits.map((benefit) => (
          <li key={benefit.title} className="min-w-[200px] flex-[1_1_240px] border border-aws-orange/30 bg-void/80 px-3.5 py-3">
            <p className="flex items-start gap-2.5 text-sm font-bold text-white">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-aws-orange" aria-hidden="true" />
              {benefit.title}
            </p>
            <p className="mt-1.5 pl-4 text-xs leading-5 text-dim">{benefit.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EventCard({
  event,
  past = false,
  featured = false,
  headingLevel = "h3",
  highlight
}: {
  event: MeetupEvent;
  past?: boolean;
  featured?: boolean;
  headingLevel?: "h3" | "h4";
  highlight?: EventHighlight;
}) {
  const Title = headingLevel;
  const benefitLabelId = `benefits-${event.id.replace(/[^a-zA-Z0-9_-]/g, "") || "event"}`;
  const wide = featured && !past;
  return (
    <article className={`node-panel group ${highlight ? "shadow-[inset_0_2px_0_0_#ff9900]" : ""}`}>
      <div className={`grid ${wide ? "md:grid-cols-[minmax(300px,1.05fr)_0.95fr]" : "md:grid-cols-[minmax(220px,320px)_1fr]"}`}>
        <EventArtwork event={event} wide={wide} />
        <div className="flex flex-col p-5 sm:p-6">
          <p className="chip-label">
            {highlight ? <span className="bg-aws-orange px-2 py-1 text-void">Highlighted recap</span> : <span className="text-faint">{past ? "Past event" : "Upcoming"}</span>}
          </p>
          <Title className={`mt-3 text-white ${featured || highlight ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="hover:text-aws-orange">{event.title}</a>
          </Title>
          <EventMeta event={event} past={past} />
          {event.description ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-faint">{event.description}</p> : null}
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${past ? "View" : "RSVP for"} ${event.title} on Meetup`}
            className={`mt-5 inline-flex w-fit items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${past ? "border border-line text-dim hover:border-white hover:text-white" : "bg-aws-orange text-void"}`}
          >
            {past ? "View recap" : "RSVP"} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      {highlight ? (
        <div className="space-y-5 border-t border-line p-5 sm:p-6">
          <RecapGallery highlight={highlight} />
          <BenefitHighlights highlight={highlight} labelledBy={benefitLabelId} />
        </div>
      ) : null}
    </article>
  );
}
