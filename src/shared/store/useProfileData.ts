import { create } from 'zustand';

interface Props {
  name: string;
  phone: string;
  address: string;
  bio: string;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
  setBio: (bio: string) => void;
}

export const useProfileData = create<Props>(set => ({
  name: '',
  phone: '',
  address: '',
  bio: '',
  setName: (name: string) => set({ name }),
  setPhone: (phone: string) => set({ phone }),
  setAddress: (address: string) => set({ address }),
  setBio: (bio: string) => set({ bio }),
}));
