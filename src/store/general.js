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

export const useAuth = create((set) => ({
    auth: {
        loggedIn: false,
        basePath: '',
        role: 'guest',
        name: '',
        email: '',
        phone_number: '',
    },
    login: (basePath, role='customer', name, email, phone_number) => set((state) => ({...state, auth: {...state.auth, loggedIn: true, basePath, role, name, email, phone_number}  })),
    logout: () => set((state) => {

        setTimeout(() => {
            sessionStorage.removeItem('xsrf');
            location.reload();
        }, 2000)

        return {...state, auth: {loggedIn: false, basePath: '', role: 'guest'}  }
    }),
}));

withStorageDOMEvents(useMode);
withStorageDOMEvents(useLoading);