export type CommitteeMember = {
  name: string;
  role: string;
  group: "advisory" | "lead" | "core";
  title?: string;
  photo?: string;
  links?: { label: string; url: string }[];
};

// Source: "AWS & DPC" Google Drive folder (core team sheet + photo cards) and portraits supplied by the team.
export const committee: CommitteeMember[] = [
  { name: "Nazrana Haque", role: "Faculty Advisor", title: "Assistant Professor", group: "advisory", photo: "/team/nazrana-haque.webp" },
  { name: "Rozana Afsin Tanha", role: "Convener", title: "Lecturer", group: "advisory", photo: "/team/rozana-afsin-tanha.webp" },
  { name: "Ratul Hasan Ruhan", role: "Leader", group: "lead", photo: "/team/ratul-hasan-ruhan.webp" },
  { name: "Fahim Shahriar", role: "Event Management and Logistics", group: "core", photo: "/team/fahim-shahriar.webp" },
  { name: "MD Nadim Mahamud", role: "Technical, Event Management and Logistics", group: "core", photo: "/team/nadim-mahamud.webp" },
  { name: "Priyata Ruth Pahan", role: "Community and Communications", group: "core", photo: "/team/priyata-ruth-pahan.webp" },
  { name: "Ahnaf Abid Khan", role: "Social Media Management", group: "core", photo: "/team/ahnaf-abid-khan.webp" },
  { name: "Sidratul Muntaha", role: "Social Media and Content Management", group: "core" }
];
