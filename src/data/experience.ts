export interface ExperienceEntry {
  date: string;
  role: string;
  org: string;
  logo?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: 'Oct 2026 – Present',
    role: 'AI Engineer Intern',
    org: 'Rey.id',
    logo: '/images/logos/rey.png',
    bullets: [
      'Built a Python evaluation harness (Jupyter, pydantic-ai) for LLM-based diagnosis extraction from handwritten medical documents, and tuned the extraction instructions to raise diagnosis-name accuracy by 40 percentage points with zero regressions.',
      'Benchmarked 9 LLM configurations (Gemini, GPT, Claude) through a LiteLLM gateway on accuracy, cost, and latency to guide model selection for production extraction.',
      'Wrote hospital-specific extraction prompts for itemized medical bills across 18 hospitals, validated with pytest and Dockerized pipeline runs, reaching 100% line-item accuracy (up from as low as 0%).',
    ],
  },
  {
    date: 'Jun 2026 – Nov 2026',
    role: 'Project Consultant',
    org: 'PT. Astra International – Honda Sales Operation (Astra Motor)',
    logo: '/images/logos/astra-motor.png',
    bullets: [
      'Led end-to-end development of the Digital Library for Astra Motor Human Capital (HC): a Django REST API and a 16-entity PostgreSQL schema (22 migrations) covering role-based access, learning programs, progress tracking, approval workflows, and audit logs.',
      'Automated delivery with a GitHub Actions CI/CD pipeline (~660 backend tests, frontend tests, and production build checks on every merge) and a one-step production deploy with health checks and automatic rollback.',
      'Managed the backlog and sprints in Jira, aligned requirements and release scope with HC stakeholders, and ran user acceptance testing (92 test cases across 10 modules) plus a System Usability Scale survey to turn feedback into prioritized fixes.',
    ],
  },
  {
    date: 'Aug 2026 – Present',
    role: 'AI Evaluation Specialist & Language Expert',
    org: 'Outlier.ai',
    logo: '/images/logos/outlier.png',
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
      'Engineered the EON Orchestrator, a retrieval-augmented generation (RAG) application using Python, FastAPI, and PostgreSQL to support business proposal workflows, email outreach drafting, and presentation generation.',
      'Developed a vocational training startup proposal for the Learn for Life initiative, aligning EON-XR solutions with Indonesian workforce skills needs.',
      'Evaluated no-code application builders against cost, developer workflow, UI/UX capabilities, and file-export requirements to inform tool selection.',
    ],
  },
  {
    date: 'May 2025 – Jan 2026',
    role: 'Tutor, Bahasa Indonesia for Foreign Speakers (BIPA)',
    org: 'Telkom University Language Center',
    logo: '/images/logos/telkom-university.png',
    bullets: [
      'Taught Indonesian to foreign speakers at Debutant (A1) and Pre-Intermediate (A2) levels through the BIPA program, a collaboration between Telkom University and Atdikbud KBRI Paris.',
      'Worked with KNB and TIAS scholarship awardees in offline sessions at Telkom University, helping them strengthen their Indonesian during their studies.',
      'Gave personalized feedback to students from diverse backgrounds on Indonesian for both academic and everyday settings.',
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
    desc: "Rebuilt SRE's digital presence from scratch, directing Social Media and Creative Media to a unified visual branding and design guidelines. Grew followers 83% (1.8K to 3.3K) by reading engagement patterns and aligning content with what the audience actually responded to, and set up Notion and Google Sheets tracking for cross-divisional schedules and content KPIs.",
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
