import { create } from 'zustand';

interface Props {
  key: string;
  isOpen: boolean;
  setIsOpen: (key: string) => void;
  setIsClose: () => void;
}

export const useModal = create<Props>(set => ({
  key: '',
  isOpen: false,
  setIsOpen: key => set({ isOpen: true, key }),
  setIsClose: () => set({ isOpen: false }),
}));
