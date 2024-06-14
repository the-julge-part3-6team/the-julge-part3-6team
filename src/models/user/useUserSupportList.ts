import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useUserSupportList = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  const { user_id } = useUserData();

  const { data, isError, isLoading } = useQuery({
    queryKey: [`/users/${user_id}/applications`, limit, offset],
    queryFn: () => {
      return apiInstance.get(
        `/users/${user_id}/applications?offset=${offset}&limit=${limit}`,
      );
    },
    enabled: !!user_id,
  });
  return { data, isError, isLoading };
};
