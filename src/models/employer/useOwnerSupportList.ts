import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useOwnerSupportList = ({
  shop_id,
  notice_id,
  limit,
  offset,
}: {
  notice_id: string | null;
  shop_id: string | null;
  limit: number;
  offset: number;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      limit,
      offset,
    ],
    queryFn: () => {
      return apiInstance.get(
        `/shops/${shop_id}/notices/${notice_id}/applications?offset=${offset}&limit=${limit}`,
      );
    },

    keepPreviousData: true,
    enabled: !!shop_id && !!notice_id,
  });
  return { data, isError, isLoading };
};
