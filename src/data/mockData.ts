export interface EnvironmentalData {
  date: string;
  temperature: number;
  salinity: number;
  currentSpeed: number;
}

export interface GrowthData {
  date: string;
  growthRate: number;
  nutrientUptake: number;
}

export interface EconomicData {
  date: string;
  costPerKg: number;
  projectedRevenue: number;
}

export const environmentalData: EnvironmentalData[] = [
  { date: '2023-01-01', temperature: 18, salinity: 35, currentSpeed: 0.5 },
  { date: '2023-01-02', temperature: 19, salinity: 34, currentSpeed: 0.6 },
  { date: '2023-01-03', temperature: 17, salinity: 36, currentSpeed: 0.4 },
  { date: '2023-01-04', temperature: 18, salinity: 35, currentSpeed: 0.5 },
  { date: '2023-01-05', temperature: 20, salinity: 33, currentSpeed: 0.7 },
];

export const growthData: GrowthData[] = [
  { date: '2023-01-01', growthRate: 2.5, nutrientUptake: 85 },
  { date: '2023-01-02', growthRate: 2.7, nutrientUptake: 87 },
  { date: '2023-01-03', growthRate: 2.3, nutrientUptake: 83 },
  { date: '2023-01-04', growthRate: 2.6, nutrientUptake: 86 },
  { date: '2023-01-05', growthRate: 2.8, nutrientUptake: 88 },
];

export const economicData: EconomicData[] = [
  { date: '2023-01-01', costPerKg: 2.5, projectedRevenue: 10000 },
  { date: '2023-01-02', costPerKg: 2.4, projectedRevenue: 10500 },
  { date: '2023-01-03', costPerKg: 2.6, projectedRevenue: 9800 },
  { date: '2023-01-04', costPerKg: 2.3, projectedRevenue: 11000 },
  { date: '2023-01-05', costPerKg: 2.5, projectedRevenue: 10200 },
];