import { apiInstance } from '@/shared/utils/axios';
import { useMutation } from '@tanstack/react-query';

export const postApplication = (
  shop_id: string,
  notice_id: string,
  setIsOpen: any,
) => {
  return useMutation({
    mutationKey: [`shops/${shop_id}/notices/${notice_id}/applications`],
    mutationFn: () =>
      apiInstance.post(`shops/${shop_id}/notices/${notice_id}/applications`),
    onSuccess: () => {
      setIsOpen('applySuccess');
    },
    onError: (error: { message: string }) => {
      console.log(error);
    },
  });
};
