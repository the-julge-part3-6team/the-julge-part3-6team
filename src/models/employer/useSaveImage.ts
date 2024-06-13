import { awsApiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSaveImage = () => {
  return useMutation({
    mutationKey: ['presignedUrl'],
    mutationFn: (data: { file: File; url: string }) => {
      return awsApiInstance.put(data.url, data.file);
    },
    onSuccess: data => console.log(data),
    onError: (error: AxiosError) => console.log(error),
  });
};
