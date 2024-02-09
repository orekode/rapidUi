import { create } from "zustand";

export const useMode = create((set) => ({
    mode: 'light',
    toggle:  () => set((state) => ({ mode: state.mode == 'light' ? 'dark' : 'light' })),
}));

export const useCart = create((set) => ({
    cart: true,
    toggle: () => set((state) => ({...state, cart: !state.cart }))
}));