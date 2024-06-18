import { create } from 'zustand';

interface INavStore {
    isMobileOpen: boolean;
    setMobileOpen: (newMenuStatus: boolean) => void;
}

export const useNavStore = create<INavStore>((set) => ({
    isMobileOpen: false,
    setMobileOpen: (newMenuStatus) => set({ isMobileOpen: newMenuStatus }),
}));
