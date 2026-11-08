export type Category = 'data' | 'product' | 'design';

export const categories: { id: Category; label: string; short: string }[] = [
  { id: 'data', label: 'Data & Analytics', short: 'Data' },
  { id: 'product', label: 'Product & Engineering', short: 'Product' },
  { id: 'design', label: 'Design & Leadership', short: 'Design' },
];

export interface CaseStudy {
  slug: string;
  tag: string;
  summary: string;
  categories: Category[];
  group: string;
  // logo tile for the list thumbnail (and the panel when there is no screenshot)
  brandLogo?: string;
  brandBg?: string;
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
  extraLinks?: { label: string; url: string }[];
  // list thumbnail when it should differ from the hero
  thumb?: string;
  hero?: string;
  heroAlt?: string;
  placeholderLabel?: string;
  // team projects: heading for the contribution list
  contributionLabel?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'amdc-pocket',
    brandLogo: '/images/logos/amdc-pocket.png',
    hero: '/images/covers/amdc-login.png',
    heroAlt: 'AMDC Pocket sign-in page: "Perpustakaan digital materi Astra Motor" with the email and password form',
    tag: 'Astra Motor · Astra1st',
    summary: 'Building an internal learning platform around access, maintainability, and real organizational constraints.',
    categories: ['product'],
    group: '2026',
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
  },
  {
    slug: 'narapangan',
    brandLogo: '/images/logos/narapangan.png',
    brandBg: '#204b2d',
    tag: 'Telkom University · Capstone',
    summary: 'Turning volatile food-price forecasts into procurement decisions for small food businesses.',
    categories: ['data', 'product'],
    group: '2026',
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
    slug: 'asean-dse',
    hero: '/images/covers/asean-dse.png',
    heroAlt: "Diverging bar chart of the Opportunity Access Score for six case districts in Bangkok, Jakarta and Metro Manila, from Samphanthawong at +2.60 to Nong Chok at -1.68",
    tag: 'ASEAN Data Science Explorers 2026 · National Finalist',
    summary: 'Showing not just which districts are far from jobs and services, but why.',
    categories: ['data'],
    group: '2026',
    number: '03',
    title: 'The Cost of Getting to Opportunity',
    year: '2026',
    role: 'Two-person team (19JTLK), Telkom University',
    context: 'ASEAN Data Science Explorers 2026 · ASEAN Foundation & SAP',
    intro: 'A district screening index for urban opportunity access across Jakarta, Metro Manila, and Bangkok, built only from open data.',
    problem: 'Two districts can look equally disadvantaged for completely different reasons: sparse opportunities, weak transit, or distance from the main business centre. A single composite number hides which one it is, so the same fix ends up applied to different problems.',
    contributionLabel: 'What we built',
    contribution: [
      'The Opportunity Access Score (OAS): mapped opportunity, recorded transit, and core proximity, each standardized within its own city and averaged equally',
      'A pipeline from OpenStreetMap, Transitland, and COD-AB boundaries through Python to SAP Analytics Cloud, screening 109 districts',
      'A log-density sensitivity check; rank correlation stayed at 0.988 to 0.993 across the three cities',
      'Six contrasting case districts that show three different reasons a district can lag, from core distance in Bangkok to transit-dependence in Metro Manila',
      'AccessLens, a planner dashboard concept that turns the score into a validation checklist and an action brief',
    ],
    learning: 'OAS does not prescribe the intervention; it narrows the decision space. Being clear about what the score cannot answer (routes, frequency, fares, informal transport) made the method more useful, not less.',
  },
  {
    slug: 'bandung-accessibility',
    hero: '/images/covers/bandung-accessibility.png',
    heroAlt: "Grid map of Bandung in 500 m cells, colored by accessibility cluster; high-access cells concentrate in the city center",
    tag: 'Independent · Spatial analysis',
    summary: 'Mapping how unevenly everyday services are distributed across Bandung.',
    categories: ['data'],
    group: '2026',
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
  },
  {
    slug: 'comtrade',
    hero: '/images/covers/comtrade-dashboard.png',
    thumb: '/images/covers/comtrade.png',
    heroAlt: "Tableau dashboard: Indonesia HS 85 trade trend, trade by partner, trade balance and total volume by partner, 2015 to 2024",
    tag: 'Independent · Supply chain',
    summary: 'Reading Indonesia’s electrical machinery trade through dependence, volatility, and logistics performance.',
    categories: ['data'],
    group: '2026',
    number: '05',
    title: 'Comtrade Performance Analytics',
    year: '2026',
    role: 'Independent Analytics Project',
    context: 'UN Comtrade + World Bank Logistics Performance Index',
    intro: 'An end-to-end supply-chain analytics project examining Indonesia’s electrical machinery trade across key partners from 2015 to 2024.',
    problem: 'The analysis connects two questions: which partners drive trade volatility, and how might logistics performance constrain Indonesia’s supply chain?',
    contribution: [
      'Built a 3-stage ETL pipeline pulling a decade of monthly trade data from the UN Comtrade API and World Bank LPI, covering 11 trading partners',
      'Diagnosed a structural deficit with China that grew 137.7% from 2015 to 2024, while Indonesia ran an average $1.62B annual surplus with the US',
      "Found Indonesia's LPI rank fell from 46th to 61st as every ASEAN peer improved, with customs efficiency (2.8/5.0) as the main bottleneck",
      'Delivered a 5-dashboard Tableau workbook: trade overview, demand volatility, COVID-19 shock, logistics correlation, and the 2024 HS 85 demand surge (+120.87% YoY)',
    ],
    learning: 'Aggregate trade data can reveal structural patterns, but it can also hide product-level shifts. A stronger next iteration would move selected findings down to HS 6-digit categories.',
    externalUrl: 'https://github.com/cerealtwist/Comtrade-Performance-Analytics',
    externalLabel: 'GitHub repository',
    extraLinks: [
      {
        label: 'Tableau dashboard',
        url: 'https://public.tableau.com/app/profile/farand.mahazalfaa/viz/FarandComtrade/D1TradeOverview',
      },
    ],
  },
];
