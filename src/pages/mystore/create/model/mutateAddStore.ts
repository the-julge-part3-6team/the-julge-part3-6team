import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const mutateAddStore = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['/shops'],
    mutationFn: (store: Store) => {
      console.log(store.originalHourlyPay);
      console.log(typeof store.originalHourlyPay);
      return apiInstance.post('/shops', {
        name: store.name,
        category: store.category,
        address1: store.address1,
        address2: store.address2,
        description: store.description,
        imageUrl: store.imageUrl,
        originalHourlyPay: store.originalHourlyPay,
      });
    },
    onSuccess: () => router.push('/mystore'),
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
