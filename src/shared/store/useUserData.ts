import { Locations } from '@/constant/address';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  phone: any;
  user_id: string;
  type: 'employee' | 'employer' | '';
  address: Locations;
  setUserId: (newId: string) => void;
  setType: (newType: 'employee' | 'employer') => void;
  setAddress: (address: Locations) => void;
}

export const useUserData = create(
  persist<Props>(
    set => ({
      user_id: '',
      type: '',
      address: '',
      setUserId: (newId: string) => set({ user_id: newId }),
      setType: (newType: 'employee' | 'employer') => set({ type: newType }),
      setAddress: (address: Locations) => set({ address }),
    }),
    { name: 'userData' },
  ),
);
