import { create } from 'zustand';

interface AppState {
  selectedFarm: string | null;
  setSelectedFarm: (farm: string | null) => void;
}

const useStore = create<AppState>((set) => ({
  selectedFarm: null,
  setSelectedFarm: (farm) => set({ selectedFarm: farm }),
}));

export default useStore;