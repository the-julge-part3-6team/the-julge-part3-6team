import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetNoticeByStoreId = (shop_id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`/shops/${shop_id}/notices`],
    queryFn: () => apiInstance.get(`/shops/${shop_id}/notices`),
    enabled: !!shop_id,
  });

  return { data, isLoading, isError };
};
