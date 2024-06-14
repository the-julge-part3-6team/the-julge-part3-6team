import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

interface Props {
  offset: number;
  limit: number;
  sort: string;
  hourlyPayGte?: string;
  address?: string;
  startsAtGte?: string;
}
export const useGetNotices = ({
  offset,
  limit,
  sort,
  hourlyPayGte,
  address,
  startsAtGte,
}: Props) => {
  return useQuery({
    queryKey: [
      `/notices`,
      offset,
      limit,
      sort,
      hourlyPayGte,
      address,
      startsAtGte,
    ],
    queryFn: () =>
      apiInstance.get(
        `/notices?limit=${limit}&offset=${offset}&sort=${sort}&hourlyPayGte=${hourlyPayGte}&${address}&startsAtGte=${startsAtGte}`,
      ),
  });
};
