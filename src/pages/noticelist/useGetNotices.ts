import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetNotices = () => {
  return useQuery({
    queryKey: [`/notices`],
    queryFn: () => apiInstance.get(`/notices`),
  });
};
