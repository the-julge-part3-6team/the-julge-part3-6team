import { create } from 'zustand';

interface Props {
  startDate: Date | null;
  price: string;
  selectedLocations: string[];
  setStartDate: (date: Date | null) => void;
  setPrice: (price: string) => void;
  toggleLocation: (location: string) => void;
  removeLocation: (location: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<Props>(set => ({
  startDate: null,
  price: '',
  selectedLocations: [],
  setStartDate: date => set({ startDate: date }),
  setPrice: price => set({ price }),
  toggleLocation: location =>
    set(state => ({
      selectedLocations: state.selectedLocations.includes(location)
        ? state.selectedLocations.filter(loc => loc !== location)
        : [...state.selectedLocations, location],
    })),
  removeLocation: location =>
    set(state => ({
      selectedLocations: state.selectedLocations.filter(
        loc => loc !== location,
      ),
    })),
  resetFilters: () =>
    set({
      startDate: null,
      price: '',
      selectedLocations: [],
    }),
}));
