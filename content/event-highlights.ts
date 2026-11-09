import type { MeetupEvent } from "@/lib/meetup";

export type EventBenefit = {
  title: string;
  detail: string;
};

export type EventPhoto = {
  src: string;
  alt: string;
};

export type EventHighlight = {
  /** Meetup event id. Also matched when it appears in the event URL. */
  eventId: string;
  /** Case-insensitive title fragment, so iCal fallbacks still attach the recap. */
  titleMatch: string;
  photos: EventPhoto[];
  benefits: EventBenefit[];
};

export const eventHighlights: EventHighlight[] = [
  {
    eventId: "317219886",
    titleMatch: "buildmyfolio",
    photos: [
      {
        src: "/events/buildmyfolio/group.webp",
        alt: "Participants and facilitators in the DIA computer lab after AWS BuildMyFolio, with the workshop slide on the screen behind them."
      },
      {
        src: "/events/buildmyfolio/slide.webp",
        alt: "A facilitator presenting the AWS BuildMyFolio slide during the workshop at Daffodil International Academy."
      },
      {
        src: "/events/buildmyfolio/lab.webp",
        alt: "Students working at their computers during AWS BuildMyFolio while a presenter demonstrates a portfolio on the projector."
      }
    ],
    benefits: [
      { title: "Live portfolio", detail: "A personal site built in the session and deployed on AWS Amplify." },
      { title: "Built with AI", detail: "Practice using AI tools to design and write that portfolio." },
      { title: "On GitHub", detail: "The project connected to GitHub so it can be updated and shown." },
      { title: "AWS, in practice", detail: "A hands-on introduction to AWS hosting and the services behind a live site." },
      { title: "Challenge-ready", detail: "A path into the AWS Student Builder Challenge with the portfolio they shipped." }
    ]
  }
];

export function highlightFor(event: Pick<MeetupEvent, "id" | "title" | "url">) {
  const title = event.title.toLowerCase();
  return eventHighlights.find((h) => h.eventId === event.id || event.url.includes(h.eventId) || title.includes(h.titleMatch));
}
