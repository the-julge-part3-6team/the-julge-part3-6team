import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

interface Props {
  offset: number;
  limit: number;
}
export const useGetNotices = ({ offset, limit }: Props) => {
  return useQuery({
    queryKey: [`/notices`, offset, limit],
    queryFn: () =>
      apiInstance.get(`/notices`, {
        params: { offset, limit },
      }),
    enabled: !!offset && !!limit,
  });
};
