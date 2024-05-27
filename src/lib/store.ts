import { create } from 'zustand';

interface IGlobalStore {
    tsk: string;
    setTSK: (tsk: string) => void;
}

export const useNavStore = create<IGlobalStore>((set) => ({
    tsk: 'tsk',
    setTSK: (tsk: string) => set({ tsk }),
}));
