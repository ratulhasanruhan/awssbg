import { ArrowUpRight, Radio } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import { getMeetupEvents, MEETUP_EVENTS_URL } from "@/lib/meetup";

export default async function EventsFeed({ limitPast, limitUpcoming }: { limitPast?: number; limitUpcoming?: number }) {
  const feed = await getMeetupEvents();
  const upcoming = limitUpcoming ? feed.upcoming.slice(0, limitUpcoming) : feed.upcoming;
  const past = limitPast ? feed.past.slice(0, limitPast) : feed.past;

  return (
    <div className="space-y-14">
      <div>
        <h3 className="chip-label mb-5 flex items-center gap-2 text-sbg-blue"><Radio size={14} aria-hidden="true" className="pulse" /> Upcoming</h3>
        {upcoming.length ? (
          <div className="space-y-4">{upcoming.map((e) => <EventCard key={e.id} event={e} />)}</div>
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
          <h3 className="chip-label mb-5 text-faint">Past events</h3>
          <div className="space-y-4">{past.map((e) => <EventCard key={e.id} event={e} past />)}</div>
        </div>
      ) : null}
      <a href={MEETUP_EVENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-aws-orange pb-1 text-sm font-bold text-white hover:text-aws-orange">
        See all on Meetup <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
