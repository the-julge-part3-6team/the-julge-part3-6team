import { create } from 'zustand';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsClose: () => void;
}

export const useModal = create<Props>(set => ({
  isOpen: false,
  setIsOpen: () => set({ isOpen: true }),
  setIsClose: () => set({ isOpen: false }),
}));
