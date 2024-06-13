import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetNoticeByStoreId = (shop_id: string, offset: number) => {
  const LIMIT = 3;

  const { data, isLoading, isError } = useQuery({
    queryKey: [`/shops/${shop_id}/notices`, offset],
    queryFn: () =>
      apiInstance.get(
        `/shops/${shop_id}/notices?offset=${offset}&limit=${LIMIT}`,
      ),
    enabled: !!shop_id,
  });

  return { data, isLoading, isError };
};
