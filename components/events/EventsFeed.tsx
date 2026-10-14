import { ArrowUpRight, Radio } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import { getMeetupEvents, MEETUP_EVENTS_URL, type MeetupEvent } from "@/lib/meetup";

function eventJsonLd(events: MeetupEvent[]) {
  return {
    "@context": "https://schema.org",
    "@graph": events.map((e) => ({
      "@type": "Event",
      name: e.title,
      startDate: e.start,
      ...(e.end ? { endDate: e.end } : {}),
      url: e.url,
      ...(e.description ? { description: e.description } : {}),
      ...(e.image ? { image: [e.image] } : {}),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: e.online ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
      location: e.online
        ? { "@type": "VirtualLocation", url: e.url }
        : { "@type": "Place", name: e.venue ?? "Daffodil International Academy", address: e.venue ?? "Dhaka, Bangladesh" },
      organizer: { "@type": "Organization", name: "AWS Student Builders Group at Daffodil International Academy", url: "https://aws.diapc.dev" }
    }))
  };
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
      <div>
        <Group className="chip-label mb-5 flex items-center gap-2 text-sbg-blue"><Radio size={14} aria-hidden="true" className="pulse" /> Upcoming</Group>
        {upcoming.length ? (
          <div className="space-y-4">{upcoming.map((e) => <EventCard key={e.id} event={e} headingLevel={card} />)}</div>
        ) : (
          <div className="node-panel p-6 sm:p-8">
            <p className="font-mono text-sm text-dim">
              <span className="text-aws-orange">$</span> {feed.ok ? "no upcoming events scheduled yet" : "event feed is temporarily unavailable"}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-faint">
              {feed.ok ? "New sessions are announced on Meetup first. Join the group to get notified the moment the next one is published." : "We couldn't reach Meetup just now. You can always find the latest events on our Meetup page."}
            </p>
          </div>
        )}
      </div>
      {past.length ? (
        <div>
          <Group className="chip-label mb-5 text-faint">Past events</Group>
          <div className="space-y-4">{past.map((e) => <EventCard key={e.id} event={e} past headingLevel={card} />)}</div>
        </div>
      ) : null}
      <a href={MEETUP_EVENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-aws-orange pb-1 text-sm font-bold text-white hover:text-aws-orange">
        See all on Meetup <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
