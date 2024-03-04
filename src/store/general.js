import { create } from "zustand";

export const useMode = create((set) => ({
    mode: 'dark',
    toggle:  () => set((state) => ({ mode: state.mode == 'light' ? 'dark' : 'light' })),
}));

export const useCart = create((set) => ({
    cart: false,
    toggle: () => set((state) => ({...state, cart: !state.cart }))
}));

export const useLoading = create((set) => ({
    show: false,
    toggle:      () => set((state) => ({...state, show: !state.show })),
    showLoading: () => set((state) => ({...state, show: true   })),
    hideLoading: () => set((state) => ({...state, show: false  })), 
}));