export interface FarmData {
  type: 'Feature';
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  properties: {
    name: string;
    cultureType: string;
    waterTemp: number;
    dissolvedOxygen: number;
    currentSpeed: number;
    currentDirection: string;
  };
}

export const mockupFarms: FarmData[] = [
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.1470, -41.2290], [173.1520, -41.2310], [173.1540, -41.2350], [173.1510, -41.2380], [173.1460, -41.2360], [173.1450, -41.2320], [173.1470, -41.2290]]]
    },
    properties: {
      name: 'Golden Bay Farm',
      cultureType: 'Kelp',
      waterTemp: 15.2,
      dissolvedOxygen: 7.8,
      currentSpeed: 0.5,
      currentDirection: 'NE'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.1600, -41.2400], [173.1650, -41.2420], [173.1680, -41.2460], [173.1660, -41.2500], [173.1620, -41.2510], [173.1590, -41.2480], [173.1580, -41.2440], [173.1600, -41.2400]]]
    },
    properties: {
      name: 'Tasman Bay Farm',
      cultureType: 'Wakame',
      waterTemp: 14.5,
      dissolvedOxygen: 8.2,
      currentSpeed: 0.8,
      currentDirection: 'SE'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.1300, -41.2100], [173.1350, -41.2120], [173.1370, -41.2160], [173.1340, -41.2190], [173.1290, -41.2170], [173.1280, -41.2130], [173.1300, -41.2100]]]
    },
    properties: {
      name: 'Coastal Seaweed Co.',
      cultureType: 'Nori',
      waterTemp: 16.1,
      dissolvedOxygen: 7.5,
      currentSpeed: 0.3,
      currentDirection: 'NW'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[173.1700, -41.2600], [173.1750, -41.2620], [173.1780, -41.2660], [173.1765, -41.2680], [173.1710, -41.2680], [173.1690, -41.2675], [173.1656, -41.2605], [173.1700, -41.2600]]]
    },
    properties: {
      name: 'Ocean Harvest',
      cultureType: 'Dulse',
      waterTemp: 15.8,
      dissolvedOxygen: 8.5,
      currentSpeed: 0.6,
      currentDirection: 'SW'
    }
  }
];