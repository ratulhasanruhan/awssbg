export type CommitteeMember = {
  name: string;
  role: string;
  photo?: string;
  links?: { label: string; url: string }[];
};

// Source: "AWS & DPC" Google Drive folder (core team sheet + core team photo cards).
export const committee: CommitteeMember[] = [
  { name: "Nazrana Haque", role: "Faculty Advisor · Assistant Professor", photo: "/team/nazrana-haque.webp", links: [] },
  { name: "Rozana Afsin Tanha", role: "Convener · Lecturer", photo: "/team/rozana-afsin-tanha.webp", links: [] },
  { name: "Ratul Hasan Ruhan", role: "Leader, AWS SBG", photo: "/team/ratul-hasan-ruhan.webp", links: [] },
  { name: "Fahim Shahriar", role: "Event Management and Logistics", photo: "/team/fahim-shahriar.webp", links: [] },
  { name: "MD Nadim Mahamud", role: "Technical, Event Management and Logistics", photo: "/team/nadim-mahamud.webp", links: [] },
  { name: "Priyata Ruth Pahan", role: "Community and Communications", photo: "/team/priyata-ruth-pahan.webp", links: [] },
  { name: "Ahnaf Abid Khan", role: "Social Media Management", photo: "/team/ahnaf-abid-khan.webp", links: [] },
  { name: "Sidratul Muntaha", role: "Social Media and Content Management", photo: "/brand/placeholder.svg", links: [] }
];
