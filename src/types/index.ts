export interface Farm {
  id: string;
  name: string;
  location: [number, number];
  // ... other properties
}

export interface EnvironmentalData {
  temperature: number;
  salinity: number;
  // ... other properties
}

// ... other type definitions