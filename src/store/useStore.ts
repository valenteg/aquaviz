import { create } from 'zustand';

interface User {
  id: string;
  name: string;
}

interface Farm {
  id: string;
  name: string;
}

interface EnvironmentalData {
  temperature: number;
  salinity: number;
  // Add more parameters as needed
}

interface AppState {
  user: User | null;
  selectedFarm: Farm | null;
  environmentalData: EnvironmentalData | null;
  setUser: (user: User | null) => void;
  setSelectedFarm: (farm: Farm | null) => void;
  setEnvironmentalData: (data: EnvironmentalData | null) => void;
}

const useStore = create<AppState>((set) => ({
  user: null,
  selectedFarm: null,
  environmentalData: null,
  setUser: (user) => set({ user }),
  setSelectedFarm: (farm) => set({ selectedFarm: farm }),
  setEnvironmentalData: (data) => set({ environmentalData: data }),
}));

export default useStore;