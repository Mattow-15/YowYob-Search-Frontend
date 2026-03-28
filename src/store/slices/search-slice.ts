import { StateCreator } from 'zustand';

export interface SearchFilters {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  location: string;
  radius: number;
  sortBy: 'recent' | 'price_asc' | 'price_desc' | 'popular';
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  isSearching: boolean;
  history: string[];
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  addToHistory: (query: string) => void;
  removeFromHistory: (query: string) => void;
  clearHistory: () => void;
}

export const createSearchSlice: StateCreator<SearchState> = (set) => ({
  query: '',
  filters: {
    category: '',
    minPrice: null,
    maxPrice: null,
    location: '',
    radius: 10,
    sortBy: 'recent',
  },
  isSearching: false,
  history: [],

  setSearchQuery: (query: string) =>
    set((state) => ({
      ...state,
      query,
      isSearching: !!query.trim()
    })),

  setFilters: (newFilters: Partial<SearchFilters>) =>
    set((state) => ({
      ...state,
      filters: { ...state.filters, ...newFilters },
    })),

  resetFilters: () =>
    set((state) => ({
      ...state,
      filters: {
        category: '',
        minPrice: null,
        maxPrice: null,
        location: '',
        radius: 10,
        sortBy: 'recent',
      },
    })),

  addToHistory: (query: string) =>
    set((state) => {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) return state;
      const newHistory = [trimmedQuery, ...state.history.filter((h) => h !== trimmedQuery)].slice(0, 50);
      return { ...state, history: newHistory };
    }),

  removeFromHistory: (query: string) =>
    set((state) => ({
      ...state,
      history: state.history.filter((h) => h !== query),
    })),

  clearHistory: () =>
    set((state) => ({
      ...state,
      history: [],
    })),
});