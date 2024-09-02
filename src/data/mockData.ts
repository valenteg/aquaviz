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