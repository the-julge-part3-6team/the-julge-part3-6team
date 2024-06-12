import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetAlerts = (user_id: string) => {
  return useQuery({
    queryKey: [`/users/${user_id}/alerts`],
    queryFn: () => apiInstance.get(`/users/${user_id}/alerts?offset=0&limit=3`),
    enabled: !!user_id,
    retry: false,
  });
};
