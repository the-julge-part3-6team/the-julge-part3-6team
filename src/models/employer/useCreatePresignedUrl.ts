import { useMutation } from '@tanstack/react-query';

import { apiInstance } from '@/shared/utils/axios';
import { AxiosError } from 'axios';

export const useCreatePresignedUrl = () => {
  return useMutation({
    mutationKey: ['/images'],
    mutationFn: () => apiInstance.post('/images', { name: name }),
    onSuccess: data => console.log(data),
    onError: (error: AxiosError) => console.log(error),
  });
};
