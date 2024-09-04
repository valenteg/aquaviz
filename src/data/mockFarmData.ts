export interface FarmData {
  type: 'Feature';
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  properties: {
    name: string;
    cultureType: string;
  };
}

export const mockupFarms: FarmData[] = [
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.1, -41.1], [173.15, -41.1], [173.15, -41.15], [173.1, -41.15], [173.1, -41.1]]]
    },
    properties: {
      name: 'Golden Bay Farm',
      cultureType: 'Kelp',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.2, -41.2], [173.25, -41.2], [173.25, -41.25], [173.2, -41.25], [173.2, -41.2]]]
    },
    properties: {
      name: 'Tasman Bay Farm',
      cultureType: 'Wakame',
    }
  }
];