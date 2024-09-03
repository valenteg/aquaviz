export interface EnvironmentalData {
  date: string;
  temperature: number;
  salinity: number;
  currentSpeed: number;
  lightIntensity: number;
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

export interface Alert {
  id: number;
  type: 'temperature' | 'salinity' | 'currentSpeed' | 'pH' | 'nutrient' | 'disease';
  severity: 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
}

export const environmentalData: EnvironmentalData[] = [
  { date: '2023-06-01', temperature: 18, salinity: 35, currentSpeed: 0.3, lightIntensity: 200 },
  { date: '2023-06-05', temperature: 19, salinity: 34, currentSpeed: 0.4, lightIntensity: 220 },
  { date: '2023-06-10', temperature: 20, salinity: 33, currentSpeed: 0.5, lightIntensity: 210 },
  { date: '2023-06-15', temperature: 21, salinity: 34, currentSpeed: 0.4, lightIntensity: 230 },
  { date: '2023-06-20', temperature: 22, salinity: 35, currentSpeed: 0.3, lightIntensity: 240 },
  { date: '2023-06-25', temperature: 23, salinity: 36, currentSpeed: 0.2, lightIntensity: 250 },
  { date: '2023-06-30', temperature: 24, salinity: 35, currentSpeed: 0.3, lightIntensity: 260 },
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

export const mockAlerts: Alert[] = [
  { 
    id: 1, 
    type: 'temperature', 
    severity: 'high', 
    message: 'Water temperature exceeds 25°C, potential stress on seaweed growth',
    timestamp: '2023-06-15T10:30:00Z'
  },
  { 
    id: 2, 
    type: 'salinity', 
    severity: 'medium', 
    message: 'Salinity levels dropped to 28 ppt, below optimal range for Kelp species',
    timestamp: '2023-06-15T11:45:00Z'
  },
  { 
    id: 3, 
    type: 'currentSpeed', 
    severity: 'low', 
    message: 'Current speed reduced to 0.1 m/s, may affect nutrient distribution',
    timestamp: '2023-06-15T09:15:00Z'
  },
  { 
    id: 4, 
    type: 'pH', 
    severity: 'high', 
    message: 'pH levels rising above 8.5, monitor for potential algal bloom',
    timestamp: '2023-06-15T14:00:00Z'
  },
  { 
    id: 5, 
    type: 'nutrient', 
    severity: 'medium', 
    message: 'Nitrogen levels low in sector B, consider supplemental fertilization',
    timestamp: '2023-06-15T16:30:00Z'
  },
  { 
    id: 6, 
    type: 'disease', 
    severity: 'high', 
    message: 'Possible ice-ice disease detected in Eucheuma farm, immediate action required',
    timestamp: '2023-06-15T08:45:00Z'
  },
];

// New interface for nutrient data
export interface NutrientData {
  date: string;
  nitrate: number;
  phosphate: number;
}

// New nutrientData array
export const nutrientData: NutrientData[] = [
  { date: '2023-06-10', nitrate: 5, phosphate: 0.5 },
  { date: '2023-06-11', nitrate: 5.5, phosphate: 0.6 },
  { date: '2023-06-12', nitrate: 6, phosphate: 0.7 },
  { date: '2023-06-13', nitrate: 5.8, phosphate: 0.65 },
  { date: '2023-06-14', nitrate: 5.5, phosphate: 0.6 },
  { date: '2023-06-15', nitrate: 5.2, phosphate: 0.55 },
  { date: '2023-06-16', nitrate: 5, phosphate: 0.5 },
];

export interface ProductionData {
  date: string;
  currentBiomass: number;
  dailyGrowthRate: number;
  projectedHarvestDate: string;
  growthRateTrend: { date: string; rate: number }[];
  nitrogenUptake: number;
  phosphorusUptake: number;
  carbonSequestration: number;
  projectedYield: number;
  previousYield: number;
  temperatureImpact: number;
  nutrientImpact: number;
  farmProductivity: { x: number; y: number; productivity: number }[];
  yieldTrend: { date: string; yield: number }[];
}

export const productionData: ProductionData[] = [
  {
    date: '2023-06-30',
    currentBiomass: 5.2,
    dailyGrowthRate: 3.5,
    projectedHarvestDate: '2023-08-15',
    growthRateTrend: [
      { date: '2023-06-16', rate: 3.2 },
      { date: '2023-06-17', rate: 3.3 },
      { date: '2023-06-18', rate: 3.4 },
      { date: '2023-06-19', rate: 3.5 },
      { date: '2023-06-20', rate: 3.6 },
      { date: '2023-06-21', rate: 3.5 },
      { date: '2023-06-22', rate: 3.4 },
      { date: '2023-06-23', rate: 3.5 },
      { date: '2023-06-24', rate: 3.6 },
      { date: '2023-06-25', rate: 3.7 },
      { date: '2023-06-26', rate: 3.6 },
      { date: '2023-06-27', rate: 3.5 },
      { date: '2023-06-28', rate: 3.4 },
      { date: '2023-06-29', rate: 3.5 },
    ],
    nitrogenUptake: 85,
    phosphorusUptake: 75,
    carbonSequestration: 2.1,
    projectedYield: 12.5,
    previousYield: 11.8,
    temperatureImpact: 70,
    nutrientImpact: 80,
    farmProductivity: [
      { x: 0, y: 0, productivity: 4.8 },
      { x: 0, y: 1, productivity: 5.0 },
      { x: 1, y: 0, productivity: 5.2 },
      { x: 1, y: 1, productivity: 5.1 },
      { x: 2, y: 0, productivity: 4.9 },
      { x: 2, y: 1, productivity: 5.3 },
    ],
    yieldTrend: [
      { date: '2023-06-16', yield: 11.8 },
      { date: '2023-06-17', yield: 11.9 },
      { date: '2023-06-18', yield: 12.0 },
      { date: '2023-06-19', yield: 12.1 },
      { date: '2023-06-20', yield: 12.2 },
      { date: '2023-06-21', yield: 12.3 },
      { date: '2023-06-22', yield: 12.4 },
      { date: '2023-06-23', yield: 12.5 },
      { date: '2023-06-24', yield: 12.6 },
      { date: '2023-06-25', yield: 12.7 },
      { date: '2023-06-26', yield: 12.8 },
      { date: '2023-06-27', yield: 12.9 },
      { date: '2023-06-28', yield: 13.0 },
      { date: '2023-06-29', yield: 13.1 },
    ],
  },
  // You can add more historical data points here if needed
];