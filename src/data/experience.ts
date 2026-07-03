export interface ExperienceEntry {
  date: string;
  role: string;
  org: string;
  logo?: string; // path under public/, e.g. "/images/logos/eon-reality.png". Leave unset for auto initials.
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: 'Jan 2026 – Apr 2026',
    role: 'Product Development Intern',
    org: 'EON Reality',
    logo: '/images/logos/eon-reality.png',
    bullets: [
      'Built the EON Orchestrator platform: a FastAPI and PostgreSQL microservices architecture for an event-driven AI agent ecosystem.',
      'Wrote a vocational training startup proposal ("Learn for Life"), integrating EON-XR to address skill gaps in the Indonesian workforce.',
      'Benchmarked AI app builders (Replit, Lovable, Manus) on visual fidelity and business logic to guide internal tooling decisions.',
    ],
  },
  {
    date: 'May 2025 – Jan 2026',
    role: 'Tutor, Bahasa Indonesia for Foreign Speakers',
    org: 'Telkom University Language Center',
    logo: '/images/logos/telkom-university.png',
    bullets: [
      'Taught Indonesian at A1 and A2 levels through a collaboration between Telkom University and the Indonesian Embassy in Paris.',
      'Worked with KNB and TIAS scholarship awardees in offline sessions, strengthening their Indonesian during their studies.',
    ],
  },
  {
    date: 'Apr 2022 – Sept 2022',
    role: 'Full Stack Web Developer',
    org: 'PT. Breezelabs Cipta Utama',
    logo: '/images/logos/breezelabs.png',
    bullets: [
      'Contributed to a cooperative (Koperasi) management system built on Laravel.',
      'Designed user-facing interfaces and shipped company profile sites on October CMS and WordPress.',
      'Worked in cross-functional Agile teams, supporting Odoo CRM integrations.',
    ],
  },
];

export interface LeadershipEntry {
  date: string;
  role: string;
  org: string;
  logo?: string;
  desc: string;
}

export const leadership: LeadershipEntry[] = [
  {
    date: 'Dec 2024 – Dec 2025',
    role: 'Director of Multimedia',
    org: 'SRE Telkom University',
    logo: '/images/logos/sre.png',
    desc: "Rebuilt SRE's digital presence from scratch, directing Social Media and Creative Media teams to establish unified visual branding. Drove 83% follower growth (1.8K to 3.3K) by aligning content with what the engagement data actually showed, and set up a Notion and Google Sheets system for cross-divisional scheduling.",
  },
  {
    date: 'Jan 2025 – Jan 2026',
    role: 'Creative & Information Content Manager',
    org: 'IEEE Telkom University',
    logo: '/images/logos/ieee.png',
    desc: 'Produced visual explainers for the IEEE Louds series (Neuromorphic Computing, Quantum Computing, IoT), making research-level content accessible through modular design. Built a content schedule and script templates in Notion to speed up production.',
  },
  {
    date: 'Dec 2023 – Dec 2024',
    role: 'Social Media Manager',
    org: 'SRE Telkom University',
    logo: '/images/logos/sre.png',
    desc: 'Managed social content promoting renewable energy awareness, contributed design and media work for Green Impact Days 2024, and led Publication & Documentation for SREssay 2024, a national essay competition.',
  },
];
