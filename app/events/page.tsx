import type { Metadata } from "next";
import { Suspense } from "react";
import SectionWrapper from "@/components/motion/SectionWrapper";
import EventsFeed from "@/components/events/EventsFeed";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Events",
  description: "Upcoming and past workshops, builder sessions and meetups from the AWS Student Builders Group at Daffodil International Academy, synced live from Meetup.",
  path: "/events"
});

export default function EventsPage() {
  return (
    <main id="main" className="relative pt-16">
      <div className="blueprint blueprint-fade absolute inset-x-0 top-0 h-[420px]" aria-hidden="true" />
      <SectionWrapper as="h1" id="events" label="Events · synced from Meetup" number="EV" title={<>Events <span className="gradient-text">schedule</span>.</>} intro="Workshops, builder sessions and meetups. Each event links to Meetup, where you can RSVP.">
        <Suspense fallback={<div className="node-panel h-40 animate-pulse" aria-label="Loading events" />}>
          <EventsFeed groupHeading="h2" />
        </Suspense>
      </SectionWrapper>
    </main>
  );
}
