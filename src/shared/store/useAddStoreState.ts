import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  storeName: string;
  storeType: string;
  storeAddress: string;
  storeAddressDetail: string;
  pay: string;
  storeImage: string;
  storeDescription: string;
  setStoreName: (name: string) => void;
  setStoreType: (type: string) => void;
  setStoreAddress: (address: string) => void;
  setStoreAddressDetail: (addressDetail: string) => void;
  setPay: (pay: string) => void;
  setStoreImage: (image: string) => void;
  setStoreDescription: (description: string) => void;
}

export const useAddStoreState = create<Props>(set => ({
  storeName: '',
  storeType: '',
  storeAddress: '',
  storeAddressDetail: '',
  pay: '',
  storeImage: '',
  storeDescription: '',
  setStoreName: name => set({ storeName: name }),
  setStoreType: type => set({ storeType: type }),
  setStoreAddress: address => set({ storeAddress: address }),
  setStoreAddressDetail: addressDetail =>
    set({ storeAddressDetail: addressDetail }),
  setPay: pay => set({ pay }),
  setStoreImage: image => set({ storeImage: image }),
  setStoreDescription: description => set({ storeDescription: description }),
}));
