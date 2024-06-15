import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  phone: any;
  user_id: string;
  type: 'employee' | 'employer' | '';
  setUserId: (newId: string) => void;
  setType: (newType: 'employee' | 'employer') => void;
}

export const useUserData = create(
  persist<Props>(
    set => ({
      user_id: '',
      type: '',
      setUserId: (newId: string) => set({ user_id: newId }),
      setType: (newType: 'employee' | 'employer') => set({ type: newType }),
    }),
    { name: 'userData' },
  ),
);
