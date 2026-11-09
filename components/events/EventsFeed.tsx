import { ArrowUpRight, Radio } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import { highlightFor } from "@/content/event-highlights";
import { site } from "@/content/site";
import { getMeetupEvents, MEETUP_EVENTS_URL, type MeetupEvent } from "@/lib/meetup";

function absoluteImage(src: string) {
  return src.startsWith("http") ? src : `${site.url}${src}`;
}

function eventJsonLd(events: MeetupEvent[], past = false) {
  return {
    "@context": "https://schema.org",
    "@graph": events.map((e) => {
      const highlight = past ? highlightFor(e) : undefined;
      const images = [...(e.image ? [e.image] : []), ...(highlight?.photos.map((p) => absoluteImage(p.src)) ?? [])];
      return {
        "@type": "Event",
        name: e.title,
        startDate: e.start,
        ...(e.end ? { endDate: e.end } : {}),
        url: e.url,
        ...(e.description ? { description: e.description } : {}),
        ...(images.length ? { image: images } : {}),
        ...(past ? {} : { eventStatus: "https://schema.org/EventScheduled" }),
        eventAttendanceMode: e.online ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
        location: e.online
          ? { "@type": "VirtualLocation", url: e.url }
          : { "@type": "Place", name: e.venue ?? "Daffodil International Academy", address: e.venue ?? "Dhaka, Bangladesh" },
        organizer: { "@type": "Organization", name: "AWS Student Builders Group at Daffodil International Academy", url: site.url }
      };
    })
  };
}

function UpcomingEmpty({ ok }: { ok: boolean }) {
  return (
    <article className="node-panel grid overflow-visible md:grid-cols-[minmax(200px,280px)_1fr]">
      <div className="blueprint relative flex min-h-[180px] flex-col items-center justify-center gap-3 border-b border-line md:border-b-0 md:border-r">
        <Radio className="text-aws-orange pulse" size={22} aria-hidden="true" />
        <p className="chip-label text-dim">From Meetup</p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="chip-label text-faint">Upcoming</p>
        <p className="mt-3 font-display text-2xl font-bold text-white">
          {ok ? "No session on the board yet." : "Event feed is temporarily unavailable."}
        </p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-dim">
          {ok
            ? "The next workshop shows up here with its Meetup artwork, date and RSVP. Join the group so you hear about it as soon as it is published."
            : "We couldn't reach Meetup just now. The latest events, with their cover images, are on our Meetup page."}
        </p>
        <a href={MEETUP_EVENTS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 bg-aws-orange px-4 py-2.5 text-sm font-bold text-void transition-transform hover:-translate-y-0.5">
          Open Meetup <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default async function EventsFeed({ limitPast, limitUpcoming, groupHeading = "h3" }: { limitPast?: number; limitUpcoming?: number; groupHeading?: "h2" | "h3" }) {
  const Group = groupHeading;
  const card = groupHeading === "h2" ? "h3" : "h4";
  const feed = await getMeetupEvents();
  const upcoming = limitUpcoming ? feed.upcoming.slice(0, limitUpcoming) : feed.upcoming;
  const past = limitPast ? feed.past.slice(0, limitPast) : feed.past;

  return (
    <div className="space-y-14">
      {upcoming.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(upcoming)) }} /> : null}
      {past.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(past, true)) }} /> : null}
      <div>
        <Group className="chip-label mb-5 flex items-center gap-2 text-sbg-blue"><Radio size={14} aria-hidden="true" className="pulse" /> Upcoming</Group>
        {upcoming.length ? (
          <div className="space-y-4">
            {upcoming.map((e, i) => <EventCard key={e.id} event={e} featured={i === 0} headingLevel={card} />)}
          </div>
        ) : (
          <UpcomingEmpty ok={feed.ok} />
        )}
      </div>
      {past.length ? (
        <div>
          <Group className="chip-label mb-2 flex items-center gap-2 text-white">
            <span className="h-1.5 w-1.5 bg-aws-orange" aria-hidden="true" /> Past events
          </Group>
          <p className="mb-5 max-w-2xl text-sm leading-6 text-dim">Photos from the room, plus the benefits attendees actually left with.</p>
          <div className="space-y-6">{past.map((e) => <EventCard key={e.id} event={e} past highlight={highlightFor(e)} headingLevel={card} />)}</div>
        </div>
      ) : null}
      <a href={MEETUP_EVENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-aws-orange pb-1 text-sm font-bold text-white hover:text-aws-orange">
        See all on Meetup <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
