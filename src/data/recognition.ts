export interface Recognition {
  year: string;
  title: string;
  org: string;
  logo?: string;
  note?: string;
  href?: string;
}

export const honors: Recognition[] = [
  {
    year: '2026',
    title: 'Astra 1st 2026 Scholarship Awardee',
    org: 'PT. Astra International',
    logo: '/images/logos/astra1st-2026.png',
  },
  {
    year: 'Oct 2026',
    title: 'National Finalist, ASEAN Data Science Explorers 2026',
    org: 'ASEAN Foundation & SAP',
    logo: '/images/logos/asean-dse.png',
    note: "Selected as one of Indonesia's national finalists, representing Telkom University, with “The Cost of Getting to Opportunity”, a district screening index for Jakarta, Metro Manila, and Bangkok.",
    href: 'work/asean-dse',
  },
  {
    year: '2026',
    title: 'Telkom University Endowment Fund 2026 Awardee',
    org: 'Telkom University',
    logo: '/images/logos/telkom-university.png',
  },
];

export const certifications: Recognition[] = [
  {
    year: '2024',
    title: 'TOEIC Listening and Reading',
    org: 'ETS',
    note: '900 / 990 (Listening 475, Reading 425)',
  },
  {
    year: '2023',
    title: 'Data Science in Retail: Market Basket Analysis',
    org: 'DQLab',
  },
];
