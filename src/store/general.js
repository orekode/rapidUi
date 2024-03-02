import { create } from "zustand";

export const useMode = create((set) => ({
    mode: 'dark',
    toggle:  () => set((state) => ({ mode: state.mode == 'light' ? 'dark' : 'light' })),
}));

export const useCart = create((set) => ({
    cart: false,
    toggle: () => set((state) => ({...state, cart: !state.cart }))
}));