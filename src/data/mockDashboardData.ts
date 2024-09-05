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

export interface NutrientData {
  date: string;
  nitrate: number;
  phosphate: number;
}

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

export interface MarketPriceData {
  currentPrices: { species: string; price: number }[];
  priceHistory: { date: string; price: number; forecast: number }[];
}

export const environmentalData: EnvironmentalData[] = [
  { date: '2023-06-01', temperature: 18, salinity: 35, currentSpeed: 0.3, lightIntensity: 200 },
  { date: '2023-06-05', temperature: 18.5, salinity: 34.5, currentSpeed: 0.4, lightIntensity: 220 },
  { date: '2023-06-10', temperature: 19, salinity: 34, currentSpeed: 0.5, lightIntensity: 210 },
  { date: '2023-06-15', temperature: 19.5, salinity: 34.5, currentSpeed: 0.4, lightIntensity: 230 },
  { date: '2023-06-20', temperature: 20, salinity: 35, currentSpeed: 0.3, lightIntensity: 240 },
  { date: '2023-06-25', temperature: 20.5, salinity: 35.5, currentSpeed: 0.2, lightIntensity: 250 },
  { date: '2023-06-30', temperature: 21, salinity: 35, currentSpeed: 0.3, lightIntensity: 260 },
];

export const growthData: GrowthData[] = [
  { date: '2023-06-26', growthRate: 2.3, nutrientUptake: 82 },
  { date: '2023-06-27', growthRate: 2.4, nutrientUptake: 84 },
  { date: '2023-06-28', growthRate: 2.5, nutrientUptake: 85 },
  { date: '2023-06-29', growthRate: 2.6, nutrientUptake: 86 },
  { date: '2023-06-30', growthRate: 2.5, nutrientUptake: 85 },
];

export const economicData: EconomicData[] = [
  { date: '2023-06-26', costPerKg: 1.8, projectedRevenue: 25000 },
  { date: '2023-06-27', costPerKg: 1.75, projectedRevenue: 26000 },
  { date: '2023-06-28', costPerKg: 1.85, projectedRevenue: 24500 },
  { date: '2023-06-29', costPerKg: 1.7, projectedRevenue: 27000 },
  { date: '2023-06-30', costPerKg: 1.8, projectedRevenue: 25500 },
];

export const mockAlerts: Alert[] = [
  { 
    id: 1, 
    type: 'temperature', 
    severity: 'medium', 
    message: 'Water temperature reaching 21°C, monitor seaweed stress levels',
    timestamp: '2023-06-30T10:30:00Z'
  },
  { 
    id: 2, 
    type: 'salinity', 
    severity: 'low', 
    message: 'Salinity levels at 34 ppt, slightly below optimal range for Kelp',
    timestamp: '2023-06-30T11:45:00Z'
  },
  { 
    id: 3, 
    type: 'currentSpeed', 
    severity: 'medium', 
    message: 'Current speed increased to 0.5 m/s, check farm infrastructure',
    timestamp: '2023-06-30T09:15:00Z'
  },
  { 
    id: 4, 
    type: 'pH', 
    severity: 'low', 
    message: 'pH levels stable at 8.1, within optimal range',
    timestamp: '2023-06-30T14:00:00Z'
  },
  { 
    id: 5, 
    type: 'nutrient', 
    severity: 'medium', 
    message: 'Nitrogen levels decreasing in sector B, consider supplementation',
    timestamp: '2023-06-30T16:30:00Z'
  },
  { 
    id: 6, 
    type: 'disease', 
    severity: 'low', 
    message: 'No signs of ice-ice disease, continue regular monitoring',
    timestamp: '2023-06-30T08:45:00Z'
  },
];

export const nutrientData: NutrientData[] = [
  { date: '2023-06-24', nitrate: 5.2, phosphate: 0.5 },
  { date: '2023-06-25', nitrate: 5.3, phosphate: 0.52 },
  { date: '2023-06-26', nitrate: 5.1, phosphate: 0.49 },
  { date: '2023-06-27', nitrate: 5.0, phosphate: 0.48 },
  { date: '2023-06-28', nitrate: 4.9, phosphate: 0.47 },
  { date: '2023-06-29', nitrate: 4.8, phosphate: 0.46 },
  { date: '2023-06-30', nitrate: 4.7, phosphate: 0.45 },
];

export const productionData: ProductionData[] = [
  {
    date: '2023-06-30',
    currentBiomass: 45.5,
    dailyGrowthRate: 2.5,
    projectedHarvestDate: '2023-07-07',
    growthRateTrend: [
      { date: '2023-06-16', rate: 2.2 },
      { date: '2023-06-17', rate: 2.3 },
      { date: '2023-06-18', rate: 2.4 },
      { date: '2023-06-19', rate: 2.5 },
      { date: '2023-06-20', rate: 2.6 },
      { date: '2023-06-21', rate: 2.5 },
      { date: '2023-06-22', rate: 2.4 },
      { date: '2023-06-23', rate: 2.5 },
      { date: '2023-06-24', rate: 2.6 },
      { date: '2023-06-25', rate: 2.7 },
      { date: '2023-06-26', rate: 2.6 },
      { date: '2023-06-27', rate: 2.5 },
      { date: '2023-06-28', rate: 2.4 },
      { date: '2023-06-29', rate: 2.5 },
    ],
    nitrogenUptake: 82,
    phosphorusUptake: 72,
    carbonSequestration: 1.8,
    projectedYield: 52.5,
    previousYield: 50.2,
    temperatureImpact: 85,
    nutrientImpact: 78,
    farmProductivity: [
      { x: 0, y: 0, productivity: 4.8 },
      { x: 0, y: 1, productivity: 5.0 },
      { x: 1, y: 0, productivity: 5.2 },
      { x: 1, y: 1, productivity: 5.1 },
      { x: 2, y: 0, productivity: 4.9 },
      { x: 2, y: 1, productivity: 5.3 },
    ],
    yieldTrend: [
      { date: '2023-06-16', yield: 50.2 },
      { date: '2023-06-17', yield: 50.4 },
      { date: '2023-06-18', yield: 50.6 },
      { date: '2023-06-19', yield: 50.8 },
      { date: '2023-06-20', yield: 51.0 },
      { date: '2023-06-21', yield: 51.2 },
      { date: '2023-06-22', yield: 51.4 },
      { date: '2023-06-23', yield: 51.6 },
      { date: '2023-06-24', yield: 51.8 },
      { date: '2023-06-25', yield: 52.0 },
      { date: '2023-06-26', yield: 52.1 },
      { date: '2023-06-27', yield: 52.2 },
      { date: '2023-06-28', yield: 52.3 },
      { date: '2023-06-29', yield: 52.4 },
    ],
  },
];

export const costBreakdown = [
  { name: 'Labor', value: 35 },
  { name: 'Materials', value: 25 },
  { name: 'Energy', value: 15 },
  { name: 'Maintenance', value: 20 },
  { name: 'Other', value: 5 },
];

export const revenueFactors = [
  { name: 'Yield', value: 75 },
  { name: 'Market Price', value: 80 },
  { name: 'Quality Grade', value: 85 },
];

export const farmValueComponents = [
  { name: 'Crop', value: 750000 },
  { name: 'Equipment', value: 450000 },
  { name: 'Licenses', value: 150000 },
  { name: 'Water Rights', value: 250000 },
];

export const marketPriceData: MarketPriceData = {
  currentPrices: [
    { species: 'Kelp', price: 3.5 },
    { species: 'Nori', price: 4.2 },
    { species: 'Wakame', price: 3.8 },
  ],
  priceHistory: economicData.map(item => ({
    date: item.date,
    price: item.costPerKg * 1.8,
    forecast: item.costPerKg * 1.9,
  })),
};