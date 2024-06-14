import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';

export const usePatchNotice = (
  shop_id: string,
  notice_id: string,
  setIsOpen: any,
) => {
  return useMutation({
    mutationKey: [`/shops/${shop_id}/notices/${notice_id}`],
    mutationFn: ({ hourlyPay, startsAt, workhour, description }: Notice) =>
      apiInstance.put(`/shops/${shop_id}/notices/${notice_id}`, {
        hourlyPay,
        startsAt,
        workhour,
        description,
      }),
    onSuccess: () => {
      console.log('success');
      setIsOpen('공고 수정 모달');
    },
  });
};
