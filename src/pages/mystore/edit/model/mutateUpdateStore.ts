import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const mutateUpdateStore = (shop_id: string) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['/shops/shop_id'],
    mutationFn: (store: Store) => apiInstance.put(`/shops/${shop_id}`, store),
    onSuccess: () => router.push('/mystore'),
    onError: (error: AxiosError) => console.log(error),
  });
};
