import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const createNoticeMutate = (shop_id: string, setIsOpen: any) => {
  return useMutation({
    mutationKey: [`/shops/${shop_id}/notices`],
    mutationFn: (notice: CreateNotice) =>
      apiInstance.post(`/shops/${shop_id}/notices`, notice),
    onSuccess: () => {
      setIsOpen('등록완료 모달');
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
