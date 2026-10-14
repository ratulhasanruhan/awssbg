import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Constitution",
  description: "Constitution of the AWS Student Builders Group at Daffodil International Academy: purpose, membership, roles, activities, code of conduct, elections and amendments.",
  path: "/constitution"
});

type Article = { id: string; title: string; clauses: (string | { lead: string; items: string[] })[] };

const articles: Article[] = [
  {
    id: "name",
    title: "Name and affiliation",
    clauses: [
      `The name of the organization is the AWS Student Builders Group at ${site.institution} ("AWS SBG", "the Group").`,
      "The Group is a student-led community affiliated with the AWS Student Builder Groups program and connected to AWS Builder Center (community.aws/buildergroups). It is part of a global network of 600+ student-led groups.",
      `The Group operates as a wing of the ${site.parent.name} at ${site.institution} and follows the policies of the institution.`,
      "The Group is not an official Amazon Web Services entity. AWS and related marks belong to Amazon.com, Inc. or its affiliates and are used in line with program guidance."
    ]
  },
  {
    id: "purpose",
    title: "Purpose and mission",
    clauses: [
      `Our mission is captured in four words: ${site.tagline}.`,
      {
        lead: "The Group exists to:",
        items: [
          "Help students learn cloud and AI technologies through hands-on, peer-led activities.",
          "Give members practical experience by building and deploying real projects.",
          "Connect students with each other, with AWS Builder Center and with the wider global community of builders.",
          "Encourage projects that create a positive impact for the school and the community."
        ]
      }
    ]
  },
  {
    id: "membership",
    title: "Membership and eligibility",
    clauses: [
      `Membership is open to currently enrolled students of ${site.institution}, regardless of discipline, year or prior experience.`,
      "A student becomes a member by joining the Group on Meetup and/or registering through a channel announced by the committee.",
      "Faculty and staff may take part as advisors, mentors or guests.",
      "Members are expected to follow this constitution and the Code of Conduct. Membership may be suspended or ended for serious or repeated breaches, under the process in Article 7.",
      "Members may leave at any time by leaving the Meetup group or informing the committee."
    ]
  },
  {
    id: "structure",
    title: "Structure and roles",
    clauses: [
      {
        lead: "Advisory",
        items: [
          "Faculty Advisor: a faculty member who guides the Group, supports its activities with the institution and approves major decisions such as amendments and disciplinary outcomes.",
          "Convener: a faculty member who helps coordinate the Group with the institution, supports planning and acts as a point of contact for faculty and administration."
        ]
      },
      {
        lead: "Student leadership",
        items: [
          "Leader (Student Builder Group Leader): leads the Group, represents it to AWS Builder Center and the institution, chairs committee meetings and is accountable for the Group's plans and conduct."
        ]
      },
      {
        lead: "Core team",
        items: [
          "Event Management and Logistics: plans events end-to-end, including venue, schedule, logistics and Meetup event pages.",
          "Technical, Event Management and Logistics: owns the technical side of sessions (labs, demos, environments, tooling) and supports event delivery.",
          "Community and Communications: manages member communication, announcements and relationships with partners and other groups.",
          "Social Media Management: runs the Group's social media presence and promotes events.",
          "Social Media and Content Management: creates content (posts, recaps, visuals, write-ups) and keeps it consistent with the Group's brand."
        ]
      },
      "The committee (the Leader and core team, with the Faculty Advisor and Convener) may create, merge or retire roles as the Group grows. Changes are recorded in the meeting minutes.",
      "One person may hold more than one role if the committee agrees."
    ]
  },
  {
    id: "activities",
    title: "Activities",
    clauses: [
      "Events are created and managed on the Group's Meetup page. RSVPs, reminders and updates go through Meetup.",
      {
        lead: "Typical activities include:",
        items: [
          "Workshops: guided, hands-on sessions on cloud and AI topics.",
          "Builder sessions: time to build and deploy projects together with peer support.",
          "Talks, study groups and community meetups.",
          "Collaborative projects, challenges and hackathons."
        ]
      },
      "Members are encouraged to use AWS Builder Center and other official AWS learning resources.",
      "Activities must follow institution rules and must not commit members to any cost without clear notice."
    ]
  },
  {
    id: "benefits",
    title: "Member benefits",
    clauses: [
      {
        lead: "Depending on what is available at the time, members may receive:",
        items: [
          "Access to learning resources and AWS Builder Center.",
          "A campus community of peers and mentors.",
          "Hands-on events and workshops.",
          "Swag, credits or other program benefits when AWS or partners make them available."
        ]
      },
      "No specific benefit is guaranteed. The committee will share benefits fairly and openly when they become available."
    ]
  },
  {
    id: "conduct",
    title: "Code of conduct",
    clauses: [
      "Everyone in our spaces, online and offline, must be respectful, inclusive and professional.",
      {
        lead: "The following are not tolerated:",
        items: [
          "Harassment, discrimination or intimidation of any kind.",
          "Plagiarism or misrepresenting other people's work.",
          "Misuse of cloud accounts, credentials or resources, including sharing secrets or running workloads that break provider terms or the law.",
          "Behaviour that endangers the safety or well-being of others."
        ]
      },
      `Concerns can be raised with any committee member, the Faculty Advisor or by email at ${site.email}. Reports are handled confidentially.`,
      "The committee, with the Faculty Advisor, may issue a warning, restrict participation or end membership, after giving the person a chance to respond."
    ]
  },
  {
    id: "elections",
    title: "Elections and term",
    clauses: [
      "Student committee roles are held for one academic year, unless the committee and Faculty Advisor agree otherwise.",
      "Before the end of a term, the committee announces open roles and invites applications or nominations from members.",
      "Selections are made by member vote or by a selection panel that includes the outgoing Leader and the Faculty Advisor. The method is announced in advance.",
      "The Leader must also meet any requirements set by the AWS Student Builder Groups program.",
      "If a role falls vacant mid-term, the committee may appoint an interim holder until the next selection.",
      "Outgoing role holders should hand over accounts, documents and access to their successors."
    ]
  },
  {
    id: "meetings",
    title: "Meetings",
    clauses: [
      "The committee meets regularly, at least once a month during the academic term, in person or online.",
      "A committee meeting needs a majority of current student committee members to make decisions (quorum).",
      "Decisions are made by consensus where possible, otherwise by simple majority. The Leader has a casting vote.",
      "Key decisions and action items are recorded and shared with the committee.",
      "General member meetings may be called by the committee to share plans and gather feedback."
    ]
  },
  {
    id: "amendments",
    title: "Amendments",
    clauses: [
      "Any member may propose an amendment in writing to the committee.",
      "Amendments require approval by a two-thirds majority of the committee and the consent of the Faculty Advisor.",
      "Approved amendments take effect when published on this page, with the date of the change."
    ]
  }
];

export default function ConstitutionPage() {
  return (
    <main id="main" className="relative px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
      <div className="blueprint blueprint-fade absolute inset-x-0 top-0 h-[420px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <p className="chip-label text-faint"><span className="text-aws-orange">DOC</span> · governance</p>
        <h1 className="mt-5 text-5xl text-white sm:text-6xl">Constitution</h1>
        <p className="mt-5 max-w-2xl text-lg text-dim">How the AWS Student Builders Group at {site.institution} is organized and run.</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Constitution contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="chip-label mb-4 text-faint">Contents</p>
            <ol className="space-y-2 text-sm">
              {articles.map((a, i) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className="flex gap-3 text-dim hover:text-white">
                    <span className="font-mono text-faint">{String(i + 1).padStart(2, "0")}</span>{a.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="space-y-6">
            {articles.map((a, i) => (
              <section key={a.id} id={a.id} aria-labelledby={`${a.id}-h`} className="node-panel scroll-mt-24 p-6 sm:p-8">
                <p className="font-mono text-xs text-sbg-blue">Article {i + 1}</p>
                <h2 id={`${a.id}-h`} className="mt-2 text-2xl text-white sm:text-3xl">{a.title}</h2>
                <ol className="mt-5 space-y-4">
                  {a.clauses.map((c, j) => (
                    <li key={j} className="flex gap-4 leading-7 text-dim">
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-faint">{i + 1}.{j + 1}</span>
                      {typeof c === "string" ? (
                        <span>{c}</span>
                      ) : (
                        <div>
                          <p className="font-semibold text-white">{c.lead}</p>
                          <ul className="mt-2 space-y-2">
                            {c.items.map((it) => (
                              <li key={it} className="flex gap-3"><span className="mt-2.5 h-1 w-3 shrink-0 bg-sbg-purple" aria-hidden="true" />{it}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
            <p className="pt-4 text-sm text-faint">Questions or suggestions? Email <a href={`mailto:${site.email}`} className="text-dim underline underline-offset-4 hover:text-white">{site.email}</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
