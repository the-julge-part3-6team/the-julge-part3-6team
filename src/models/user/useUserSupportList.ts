import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useUserSupportList = () => {
  const { user_id } = useUserData();

  const { data, isError, isLoading } = useQuery({
    queryKey: [`/users/${user_id}/applications`],
    queryFn: () => {
      return apiInstance.get(`/users/${user_id}/applications`);
    },
    enabled: !!user_id,
  });
  return { data, isError, isLoading };
};
