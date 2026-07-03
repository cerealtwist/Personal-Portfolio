export interface ProjectEntry {
  repo: string; // GitHub repo name, used to fetch live stats at build time
  name: string;
  desc: string;
  stack: string[]; // matched against TechIcon's icon map
}

export const githubUser = 'cerealtwist';

export const projects: ProjectEntry[] = [
  {
    repo: 'Comtrade-Performance-Analytics',
    name: 'Comtrade Performance Analytics',
    desc: "A decade of Indonesia HS85 electrical machinery trade data across 11 partners, ETL'd from UN Comtrade and the World Bank LPI, surfaced in a five-dashboard Tableau workbook.",
    stack: ['Python', 'Pandas', 'Tableau'],
  },
  {
    repo: 'Airbnb-Big-Data-Analysis-Bangkok',
    name: 'Airbnb Big Data Analysis, Bangkok',
    desc: "Diagnosing Bangkok's Airbnb oversupply and price dynamics (2025-2026) through a scalable PySpark ETL pipeline over large-scale listing data.",
    stack: ['Python', 'Spark'],
  },
  {
    repo: 'Bandung-Accessibility-Analysis',
    name: 'Bandung Accessibility Analysis',
    desc: 'Measuring 15-minute city accessibility across Bandung using BigQuery GIS, K-Means clustering, and Vertex AI.',
    stack: ['BigQuery', 'GIS', 'VertexAI'],
  },
  {
    repo: 'Teralis-Reservation-System',
    name: 'Teralis Reservation System',
    desc: 'A reservation system for a Telkom University venue, built as an Object-Oriented Programming coursework project.',
    stack: ['JavaScript'],
  },
  {
    repo: 'AES-256-Cryptograph',
    name: 'AES-256 Cryptograph',
    desc: 'A data security coursework tool with two core features: encrypting and decrypting CSV and Excel files.',
    stack: ['Python'],
  },
  {
    repo: 'dataviz_energy-transition',
    name: 'Dataviz: Energy Transition',
    desc: 'A data visualization project exploring patterns in the global energy transition.',
    stack: ['Svelte'],
  },
];
