import { create } from "zustand";

export const useMode = create((set) => ({
    mode: 'light',
    toggle:  () => set((state) => ({ mode: state.mode == 'light' ? 'dark' : 'light' }))
}));