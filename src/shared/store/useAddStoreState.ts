import { create } from 'zustand';

interface Props {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: number;
  imageUrl: string;
  description: string;
  setId: (id: string) => void;
  setStoreName: (name: string) => void;
  setStoreType: (type: string) => void;
  setStoreAddress: (address: string) => void;
  setStoreAddressDetail: (addressDetail: string) => void;
  setPay: (pay: number) => void;
  setStoreImage: (image: string) => void;
  setStoreDescription: (description: string) => void;
}

export const useAddStoreState = create<Props>(set => ({
  id: '',
  name: '',
  category: '',
  address1: '',
  address2: '',
  originalHourlyPay: 0,
  imageUrl: '',
  description: '',
  setId: id => set({ id }),
  setStoreName: name => set({ name }),
  setStoreType: category => set({ category }),
  setStoreAddress: address1 => set({ address1 }),
  setStoreAddressDetail: address2 => set({ address2 }),
  setPay: originalHourlyPay => set({ originalHourlyPay }),
  setStoreImage: imageUrl => set({ imageUrl }),
  setStoreDescription: description => set({ description }),
}));
