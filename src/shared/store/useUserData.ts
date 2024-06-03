import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  user_id: string;
  type: string;
  setUserId: (newId: string) => void;
  setType: (newType: string) => void;
}

export const useUserData = create(
  persist<Props>(
    set => ({
      user_id: '',
      type: '',
      setUserId: (newId: string) => set({ user_id: newId }),
      setType: (newType: string) => set({ type: newType }),
    }),
    { name: 'userData' },
  ),
);
