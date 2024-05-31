import { create } from 'zustand';

interface Props {
  isToast: boolean;
  setOpenToast: () => void;
}

export const useToast = create<Props>(set => ({
  isToast: false,
  setOpenToast: () => {
    set({ isToast: true });
    setTimeout(() => set({ isToast: false }), 3000);
  },
}));
