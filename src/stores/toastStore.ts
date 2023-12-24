import { createStore, useStore } from 'zustand';

interface ToastData {
  message: string;
}

interface ToastState {
  isToastVisible: boolean;
}

interface State {
  toastData: ToastData & ToastState;
}

interface Action {
  showToast: (data: ToastData) => void;
  hideToast: () => void;
}

const INITIAL_TOAST_DATA = {
  message: '',
  isToastVisible: false,
};

export const toastStore = createStore<State & Action>((set, get) => ({
  toastData: INITIAL_TOAST_DATA,
  showToast: (data) => set({ toastData: { ...data, isToastVisible: true } }),
  hideToast: () => {
    set({ toastData: { ...get().toastData, isToastVisible: false } });
  },
}));

export const useToastStore = <T>(
  selector: (state: State & Action) => T,
  equals?: (a: T, b: T) => boolean,
) => useStore(toastStore, selector, equals);
