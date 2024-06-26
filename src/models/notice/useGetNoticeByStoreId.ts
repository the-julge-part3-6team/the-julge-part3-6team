import { apiInstance } from '@/shared/utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetNoticeByStoreId = (shop_id: string) => {
  const LIMIT = 3;

  return useInfiniteQuery({
    queryKey: [`/shops/${shop_id}/notices`, shop_id],

    queryFn: ({ pageParam }) =>
      apiInstance.get(
        `/shops/${shop_id}/notices?offset=${pageParam}&limit=${LIMIT}`,
      ),

    getNextPageParam: (lastPage, allPages) =>
      lastPage.data?.hasNext ? allPages.length * 3 : undefined,

    enabled: !!shop_id,
  });
};
