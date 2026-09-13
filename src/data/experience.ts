export interface ExperienceEntry {
  date: string;
  role: string;
  org: string;
  logo?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: 'Jun 2026 – Present',
    role: 'Project Consultant · Data & Systems Technical Lead',
    org: 'PT. Astra International – Honda Sales Operation (Astra Motor)',
    logo: '/images/logos/astra-motor.png',
    bullets: [
      'Leading the technical development of AMDC Pocket, an internal learning platform for Astra Motor Development Center, across architecture, backend development, access rules, testing, and handover readiness.',
      'Built and maintained Django and PostgreSQL backend workflows while preparing and validating user data for system use.',
      'Introduced Jira-based sprint tracking to improve visibility of task ownership, dependencies, blockers, and delivery progress across the development team.',
      'Facilitate weekly Scrum sessions and regular PDCA updates with project stakeholders while the project progresses toward UAT and handover.',
    ],
  },
  {
    date: 'Aug 2026 – Present',
    role: 'AI Evaluation Specialist & Language Expert',
    org: 'Outlier.ai',
    bullets: [
      'Evaluate Speech-to-Speech multimodal AI models for Indonesian localization through RLHF, adversarial red-teaming, and multi-turn conversation auditing.',
      'Write structured rationales covering acoustic quality, safety boundaries, and factual accuracy while maintaining a 3.5/4.0 quality rating.',
    ],
  },
  {
    date: 'Jan 2026 – Apr 2026',
    role: 'Product Development Intern',
    org: 'EON Reality',
    logo: '/images/logos/eon-reality.png',
    bullets: [
      'Engineered the EON Orchestrator, an RAG-based AI workflow system using Python, FastAPI, and PostgreSQL for business proposal and outreach workflows.',
      'Developed a vocational training startup proposal for the Learn for Life initiative, integrating EON-XR around workforce skill gaps in Indonesia.',
      'Benchmarked AI application builders including Replit, Lovable, and Manus to compare development workflow, exportability, and interface quality.',
    ],
  },
  {
    date: 'May 2025 – Jan 2026',
    role: 'Tutor, Bahasa Indonesia for Foreign Speakers (BIPA)',
    org: 'Telkom University Language Center',
    logo: '/images/logos/telkom-university.png',
    bullets: [
      'Taught Indonesian at A1 and A2 levels through the BIPA program in collaboration with Atdikbud KBRI Paris.',
      'Worked with KNB and TIAS scholarship awardees through in-person sessions at Telkom University, adapting feedback to different language backgrounds.',
    ],
  },
  {
    date: 'Apr 2022 – Sept 2022',
    role: 'Full Stack Web Developer',
    org: 'PT. Breezelabs Cipta Utama',
    logo: '/images/logos/breezelabs.png',
    bullets: [
      'Contributed to a cooperative management system built on Laravel and supported user-facing interface work.',
      'Shipped company profile sites using October CMS and WordPress and collaborated in cross-functional Agile delivery.',
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
    desc: "Led Social Media and Creative Media while overhauling SRE Telkom University's visual identity, content system, and cross-divisional workflow. During my wider involvement in SRE, the Instagram audience grew from roughly 1K followers in 2023 to around 3.1K by the end of 2025; I no longer have access to the original analytics dashboard, so I treat those figures as approximate.",
  },
  {
    date: 'Jan 2025 – Jan 2026',
    role: 'Creative & Information Content Manager',
    org: 'IEEE Telkom University',
    logo: '/images/logos/ieee.png',
    desc: 'Produced visual explainers for the IEEE Louds series on topics such as Neuromorphic Computing, Quantum Computing, and IoT, and built a Notion-based content schedule and script templates to support production.',
  },
  {
    date: 'Dec 2023 – Dec 2024',
    role: 'Social Media Manager',
    org: 'SRE Telkom University',
    logo: '/images/logos/sre.png',
    desc: 'Managed social content promoting renewable energy awareness and led Publication & Documentation for SREssay 2024, where I developed the program branding and publication system that later became the starting point for the broader SRE visual overhaul.',
  },
];
