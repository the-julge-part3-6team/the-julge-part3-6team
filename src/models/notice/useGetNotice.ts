import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetNotice = (shop_id: string) => {
  return useQuery({
    queryKey: [`/shops/${shop_id}/notices`],
    queryFn: () => apiInstance.get(`/shops/${shop_id}/notices`),
    enabled: !!shop_id,
  });
};
