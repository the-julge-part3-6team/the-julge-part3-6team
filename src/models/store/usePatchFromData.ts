import React, { useEffect } from 'react';

interface SetStore {
  setStoreName: (name: string) => void;
  setStoreType: (category: string) => void;
  setStoreAddress: (address: string) => void;
  setStoreAddressDetail: (address: string) => void;
  setPay: (pay: number) => void;
  setStoreDescription: (description: string) => void;
  setStoreImage: (image: string) => void;
}

export const usePatchFormData = (
  isLoading: boolean,
  router: any,
  {
    setStoreName,
    setStoreType,
    setStoreAddress,
    setStoreAddressDetail,
    setPay,
    setStoreDescription,
    setStoreImage,
  }: SetStore,
  store: Store,
  shop_id: string | null,
) => {
  useEffect(() => {
    if (isLoading) return;
    if (!shop_id) router.push('/mystore');
    setStoreName(store.name);
    setStoreType(store.category);
    setStoreAddress(store.address1);
    setStoreAddressDetail(store.address2);
    setPay(store.originalHourlyPay);
    setStoreDescription(store.description);
    setStoreImage(store.imageUrl);
  }, [store]);
};
