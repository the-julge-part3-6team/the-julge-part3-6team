import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetNotice = (shop_id: string, notice_id: string) => {
  return useQuery({
    queryKey: [`/shops/${shop_id}/notices/${notice_id}`, shop_id, notice_id],
    queryFn: () => apiInstance.get(`/shops/${shop_id}/notices/${notice_id}`),
  });
};
