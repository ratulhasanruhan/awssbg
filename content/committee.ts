export type CommitteeMember = {
  name: string;
  role: string;
  group: "advisory" | "lead" | "core";
  title?: string;
  photo?: string;
  /** Primary public profile; the name links here. */
  profile?: string;
  quote?: string;
  links?: { label: "GitHub" | "LinkedIn" | "Website" | "Facebook"; url: string }[];
};

// Source: "AWS & DPC" Google Drive folder (core team sheet + photo cards) and portraits supplied by the team.
export const committee: CommitteeMember[] = [
  {
    name: "Ratul Hasan Ruhan",
    role: "Leader",
    title: "AWS Student Builders Group",
    group: "lead",
    photo: "/team/ratul-hasan-ruhan.webp",
    profile: "https://ratuler.vercel.app",
    quote: "Building opportunities, bringing people together, and creating real impact through technology.",
    links: [
      { label: "Website", url: "https://ratuler.vercel.app" },
      { label: "GitHub", url: "https://github.com/ratulhasanruhan" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ratul-hasan-ruhan/" }
    ]
  },
  { name: "Nazrana Haque", role: "Faculty Advisor", title: "Assistant Professor", group: "advisory", photo: "/team/nazrana-haque.webp" },
  { name: "Rozana Afsin Tanha", role: "Convener", title: "Lecturer", group: "advisory", photo: "/team/rozana-afsin-tanha.webp" },
  { name: "Fahim Shahriar", role: "Event Management and Logistics", group: "core", photo: "/team/fahim-shahriar.webp" },
  { name: "MD Nadim Mahamud", role: "Technical, Event Management and Logistics", group: "core", photo: "/team/nadim-mahamud.webp" },
  { name: "Priyata Ruth Pahan", role: "Community and Communications", group: "core", photo: "/team/priyata-ruth-pahan.webp" },
  { name: "Ahnaf Abid Khan", role: "Social Media Management", group: "core", photo: "/team/ahnaf-abid-khan.webp" },
  { name: "Sidratul Muntaha", role: "Social Media and Content Management", group: "core" }
];

export const leaderPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://aws.diapc.dev/team#ratul-hasan-ruhan",
  name: "Ratul Hasan Ruhan",
  jobTitle: "AWS Student Builders Group Leader",
  image: "https://aws.diapc.dev/team/ratul-hasan-ruhan.webp",
  url: "https://ratuler.vercel.app",
  memberOf: {
    "@type": "Organization",
    "@id": "https://aws.diapc.dev/#organization",
    name: "AWS Student Builders Group at Daffodil International Academy",
    url: "https://aws.diapc.dev"
  },
  worksFor: { "@type": "Organization", name: "Appibrium", url: "https://appibrium.com" },
  sameAs: [
    "https://github.com/ratulhasanruhan",
    "https://www.linkedin.com/in/ratul-hasan-ruhan/",
    "https://www.facebook.com/ratulhasan.ruhan",
    "https://ratuler.vercel.app"
  ]
};
