import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

interface Props {
  address?: string;
}
export const useGetCustomNotices = ({ address }: Props) => {
  return useQuery({
    queryKey: [`/notices?address=${address}`],
    queryFn: () => apiInstance.get(`/notices?address=${address}`),
  });
};
