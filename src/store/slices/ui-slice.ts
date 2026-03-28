import { StateCreator } from 'zustand';

export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  notifications: number;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
  setNotifications: (count: number) => void;
}

export const createUISlice: StateCreator<UIState> = (set) => ({
  theme: 'light',
  sidebarOpen: true,
  mobileMenuOpen: false,
  notifications: 0,
  
  toggleTheme: () =>
    set((state) => ({ 
      ...state, 
      theme: state.theme === 'light' ? 'dark' : 'light' 
    })),
    
  toggleSidebar: () =>
    set((state) => ({ 
      ...state, 
      sidebarOpen: !state.sidebarOpen 
    })),
    
  toggleMobileMenu: () =>
    set((state) => ({ 
      ...state, 
      mobileMenuOpen: !state.mobileMenuOpen 
    })),
    
  setNotifications: (count: number) =>
    set((state) => ({ 
      ...state, 
      notifications: count 
    })),
});