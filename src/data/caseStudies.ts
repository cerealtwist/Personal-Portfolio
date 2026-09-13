export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  year: string;
  role: string;
  context: string;
  intro: string;
  problem: string;
  contribution: string[];
  learning: string;
  externalUrl?: string;
  externalLabel?: string;
  hero?: string;
  heroAlt?: string;
  placeholderLabel?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'amdc-pocket',
    number: '01',
    title: 'AMDC Pocket',
    year: '2026',
    role: 'Data & Systems Technical Lead',
    context: 'Astra Motor · Astra1st Improvement Project',
    intro: 'An internal learning platform designed around fragmented material management, access rules, confidentiality, and long-term maintainability.',
    problem: 'The challenge was not simply to build another learning platform. Existing tools already worked, but management and access flows were fragmented. The product needed to simplify that system without creating a new dependency that only the project team could maintain.',
    contribution: [
      'Backend architecture and Django REST Framework implementation',
      'Application data model and access-control logic',
      'Architecture Decision Records and API coordination',
      'Jira-backed sprint tracking across frontend and backend work',
      'Technical documentation and handover planning',
    ],
    learning: 'Good architecture is not about defending the first decision. It is about documenting the reasoning well enough that the team can change direction responsibly.',
    placeholderLabel: 'Confidential project · safe login / hero visual to be added',
  },
  {
    slug: 'narapangan',
    number: '02',
    title: 'Narapangan',
    year: '2026',
    role: 'Project Lead · Data Product & Full-Stack Development',
    context: 'Telkom University · Capstone Project',
    intro: 'A decision-support system that forecasts red cayenne pepper prices and translates those forecasts into practical procurement recommendations for small food businesses.',
    problem: 'The first question was technical: can we forecast the price? The more useful question became: if we can forecast it, what should a business do differently?',
    contribution: [
      'Led a four-person capstone team from research through implementation',
      'Worked across frontend, backend integration, authentication, and persistence',
      'Connected forecasting output to simulation and recommendation flows',
      'Contributed to the AI-assisted explanation and consultation experience',
    ],
    learning: 'A prediction can be accurate and still be difficult to use. The product challenge was connecting model output to context, explanation, and a decision.',
    externalUrl: 'https://github.com/FaarisKhairrudin/Prescriptive-food-price-intelligence',
    externalLabel: 'GitHub repository',
    hero: '/media/ss-narapangan.png',
    heroAlt: 'Narapangan dashboard',
  },
  {
    slug: 'sre-telkom',
    number: '03',
    title: 'SRE Telkom University',
    year: '2023–2025',
    role: 'Social Media Manager → Director of Multimedia',
    context: 'Society of Renewable Energy Telkom University',
    intro: 'A two-year progression from producing content to rebuilding the visual identity and communication system of a growing sustainability organization.',
    problem: 'The organization had an inherited visual direction, but campaigns often felt disconnected. SREssay 2024 became an early test for a stronger design language, which later expanded into a broader rebrand and multimedia system.',
    contribution: [
      'Created the branding and publication system for SREssay 2024',
      'Led the broader visual rebrand during the following term',
      'Directed Social Media and Creative Media teams',
      'Developed cross-division campaigns and external-facing materials',
      'Extended the identity into merchandise, partnerships, and program communication',
    ],
    learning: 'Creative leadership is different from individual execution. The work shifted from making better graphics myself to building a system other people could use consistently.',
    placeholderLabel: 'SRE rebrand collage / before-and-after visual to be added',
  },
  {
    slug: 'bandung-accessibility',
    number: '04',
    title: 'Bandung Accessibility',
    year: '2026',
    role: 'Independent Spatial Analysis',
    context: '15-minute-city inspired urban accessibility study',
    intro: 'A spatial analysis of how evenly residents can reach education, healthcare, markets, and public transport across Bandung.',
    problem: 'The project asks a simple urban question: how accessible is Bandung without relying on a car? The analysis uses proximity as a measurable proxy while explicitly separating accessibility from true walkability.',
    contribution: [
      'Queried and deduplicated POI data through BigQuery GIS',
      'Built a 500m city grid and 1km-radius accessibility measure',
      'Applied K-Means clustering to identify high, moderate, and low-accessibility areas',
      'Aggregated results to Bandung districts for policy-relevant interpretation',
      'Registered the clustering model in Vertex AI for reproducibility practice',
    ],
    learning: 'The strongest result was not a single score but the spatial pattern: central services cluster together, while eastern and southern areas remain comparatively underserved.',
    externalUrl: 'https://github.com/cerealtwist/Bandung-Accessibility-Analysis',
    externalLabel: 'GitHub repository',
    placeholderLabel: 'Redesigned accessibility map to be added',
  },
  {
    slug: 'comtrade',
    number: '05',
    title: 'Comtrade Performance Analytics',
    year: '2026',
    role: 'Independent Analytics Project',
    context: 'UN Comtrade + World Bank Logistics Performance Index',
    intro: 'An end-to-end supply-chain analytics project examining Indonesia’s electrical machinery trade across key partners from 2015 to 2024.',
    problem: 'The analysis connects two questions: which partners drive trade volatility, and how might logistics performance constrain Indonesia’s supply chain?',
    contribution: [
      'Built the extraction, cleaning, and feature-engineering pipeline',
      'Combined UN Comtrade and World Bank logistics data',
      'Analyzed partner-level trade balance, volatility, and anomalies',
      'Designed an interactive Tableau overview for the final analysis',
      'Documented limitations around LPI frequency, aggregation, and anomaly detection',
    ],
    learning: 'Aggregate trade data can reveal structural patterns, but it can also hide product-level shifts. A stronger next iteration would move selected findings down to HS 6-digit categories.',
    externalUrl: 'https://github.com/cerealtwist/Comtrade-Performance-Analytics',
    externalLabel: 'GitHub repository',
    placeholderLabel: 'Tableau dashboard visual to be added',
  },
];
