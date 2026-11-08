// Source: Narapangan capstone poster, "Hasil & Pembahasan" results table.
// These are the only numbers legible from the poster image. The weekly
// price-forecast line shown in the poster's laptop mockup is NOT included
// here since the underlying data points aren't readable/available, do not
// invent them if extending this file.

export interface ModelResult {
  model: string;
  mae: number;
  mapePercent: number;
  directionalAccuracyPercent: number;
}

export const narapanganModelResults: ModelResult[] = [
  { model: 'NBEATSx', mae: 3030.09, mapePercent: 6.33, directionalAccuracyPercent: 73.3 },
  { model: 'NHITS', mae: 4005.18, mapePercent: 8.48, directionalAccuracyPercent: 93.3 },
  { model: 'SARIMAX', mae: 5428.18, mapePercent: 14.03, directionalAccuracyPercent: 40.0 },
  { model: 'LSTM', mae: 9039.76, mapePercent: 19.17, directionalAccuracyPercent: 73.3 },
  { model: 'Prophet', mae: 11923.05, mapePercent: 28.92, directionalAccuracyPercent: 46.7 },
];

export const narapanganBestR2 = 0.869; // NBEATSx, stated on the poster
