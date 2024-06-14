import { useQuery } from '@tanstack/react-query';
import { apiInstance } from '@/shared/utils/axios';

export const useGetNoticeDetail = (shop_id: string, notice_id: string) => {
  return useQuery({
    queryKey: ['/noticeDetail', shop_id, notice_id],
    queryFn: () => apiInstance.get(`/shops/${shop_id}/notices/${notice_id}`),
    enabled: !!shop_id && !!notice_id,
  });
};
