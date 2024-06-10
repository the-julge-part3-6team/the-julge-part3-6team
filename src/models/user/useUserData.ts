import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useUserQuery = () => {
  const { user_id } = useUserData();

  const { data, isError, isLoading } = useQuery({
    queryKey: [`/users/${user_id}`],
    queryFn: () => {
      return apiInstance.get(`/users/${user_id}`);
    },
    enabled: !!user_id,
  });
  return { data, isError, isLoading };
};
