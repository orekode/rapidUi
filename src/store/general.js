import { create } from "zustand";
import { persist } from "zustand/middleware";
import { withStorageDOMEvents } from ".";

export const useMode = create( persist( (set) => ({
        mode: 'dark',
        toggle:  () => set((state) => ({ mode: state.mode == 'light' ? 'dark' : 'light' })),
    }),
    {
        name: "mode"
    })
);

export const useLoading = create((set) => ({
    show: false,
    toggle:      () => set((state) => ({...state, show: !state.show })),
    showLoading: () => set((state) => ({...state, show: true   })),
    hideLoading: () => set((state) => ({...state, show: false  })), 
}));

withStorageDOMEvents(useMode);
withStorageDOMEvents(useLoading);