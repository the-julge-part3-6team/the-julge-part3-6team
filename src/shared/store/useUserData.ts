import { create } from 'zustand';

interface Props {
  user_id: string;
  type: string;
  setUserId: (newId: string) => void;
  setType: (newType: string) => void;
}

export const useUserData = create<Props>(set => ({
  user_id: '',
  type: '',
  setUserId: newId => set({ user_id: newId }),
  setType: newType => set({ type: newType }),
}));
