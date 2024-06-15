import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetUserApplicationList = (user_id: string) => {
  return useQuery({
    queryKey: [`/users/${user_id}/applications`, user_id],
    queryFn: () => apiInstance.get(`/users/${user_id}/applications`),
    enabled: !!user_id,
  });
};
