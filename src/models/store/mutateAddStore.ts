import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const mutateAddStore = (setIsOpen: any) => {
  return useMutation({
    mutationKey: ['/shops'],
    mutationFn: (store: Store) => {
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
    onSuccess: () => setIsOpen('등록완료 모달'),
    onError: (error: { message: string }) => {
      const statusCode = error.message;

      switch (statusCode) {
        case '409':
          setIsOpen('이미 등록된 가게가 존재합니다.');
      }
    },
  });
};
