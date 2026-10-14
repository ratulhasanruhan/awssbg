import type { Metadata } from "next";
import SectionWrapper from "@/components/motion/SectionWrapper";
import TeamGrid from "@/components/home/TeamGrid";
import { committee, leaderPersonJsonLd } from "@/content/committee";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Team",
  description: `Meet the faculty advisors, leader and core team of the AWS Student Builders Group at ${site.institution}, led by Ratul Hasan Ruhan.`,
  path: "/team"
});

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AWS Student Builders Group team",
  itemListElement: committee.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Person", name: m.name, jobTitle: m.role, ...(m.photo ? { image: `${site.url}${m.photo}` } : {}) }
  }))
};

export default function TeamPage() {
  return (
    <main id="main" className="relative pt-16">
      <div className="blueprint blueprint-fade absolute inset-x-0 top-0 h-[420px]" aria-hidden="true" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(leaderPersonJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }} />
      <SectionWrapper as="h1" id="team" label="The people" number="TM" title={<>The <span className="gradient-text">team</span>.</>} intro={`The faculty and students who run the AWS Student Builders Group at ${site.institution}.`}>
        <TeamGrid headingLevel="h2" />
      </SectionWrapper>
    </main>
  );
}
