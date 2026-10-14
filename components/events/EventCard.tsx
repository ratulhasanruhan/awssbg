import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { formatEventDate, type MeetupEvent } from "@/lib/meetup";

export default function EventCard({ event, past = false }: { event: MeetupEvent; past?: boolean }) {
  const d = formatEventDate(event.start);
  return (
    <article className={`node-panel group flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:p-6 ${past ? "opacity-80" : ""}`}>
      <div className="flex w-16 shrink-0 flex-col items-center border border-line bg-void py-2 text-center" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-widest text-aws-orange">{d.month}</span>
        <span className="font-display text-2xl font-bold text-white">{d.day}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl text-white">
          <a href={event.url} target="_blank" rel="noopener noreferrer" className="hover:text-aws-orange">{event.title}</a>
        </h3>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-dim">
          <li className="flex items-center gap-1.5"><CalendarDays size={14} aria-hidden="true" /><time dateTime={event.start}>{d.full}</time></li>
          {event.venue ? <li className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{event.venue}</li> : null}
          {typeof event.rsvps === "number" && event.rsvps > 0 ? <li className="flex items-center gap-1.5"><Users size={14} aria-hidden="true" />{event.rsvps} {past ? "attended" : "going"}</li> : null}
        </ul>
        {event.description ? <p className="mt-3 line-clamp-2 text-sm leading-6 text-faint">{event.description}</p> : null}
      </div>
      <a href={event.url} target="_blank" rel="noopener noreferrer" aria-label={`${past ? "View" : "RSVP for"} ${event.title} on Meetup`} className={`inline-flex shrink-0 items-center justify-center gap-1.5 self-start px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${past ? "border border-line text-dim hover:text-white" : "bg-aws-orange text-void"}`}>
        {past ? "View recap" : "RSVP"} <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </article>
  );
}
