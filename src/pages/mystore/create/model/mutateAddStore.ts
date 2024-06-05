import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface Store {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export const mutateAddStore = () => {
  return useMutation({
    mutationKey: ['/shops'],
    mutationFn: (store: Store) => apiInstance.post('/shops', store),
    onSuccess: data => console.log(data.data),
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
