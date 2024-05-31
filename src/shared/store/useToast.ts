import { create } from 'zustand';

interface Props {
  key: string;
  isToast: boolean;
  setOpenToast: (key: string) => void;
  toastTimer: NodeJS.Timeout | null;
}

export const useToast = create<Props>(set => ({
  key: '',
  isToast: false,
  toastTimer: null,
  setOpenToast: key => {
    set(state => {
      if (state.toastTimer) clearTimeout(state.toastTimer);
      const timer = setTimeout(
        () => set({ isToast: false, toastTimer: null }),
        3000,
      );

      return { isToast: true, toastTimer: timer, key };
    });
  },
}));
