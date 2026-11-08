export interface Recognition {
  year: string;
  title: string;
  org: string;
  logo?: string;
  note?: string;
}

export const honors: Recognition[] = [
  {
    year: '2026',
    title: 'Astra 1st 2026 Scholarship Awardee',
    org: 'PT. Astra International',
    logo: '/images/logos/astra1st-2026.png',
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
