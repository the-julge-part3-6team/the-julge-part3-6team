import { apiInstance } from '@/shared/utils/axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

interface Props {
  currentPage: number;
  limit: number;
  sort: string;
  hourlyPayGte?: string;
  addressList?: string[];
  startsAtGte?: string;
}
export const useGetNotices = ({
  currentPage,
  limit,
  sort,
  hourlyPayGte,
  addressList,
  startsAtGte,
}: Props) => {
  return useQuery({
    queryKey: [
      `/notices?limit=${limit}&offset=${currentPage}&sort=${sort}&hourlyPayGte=${hourlyPayGte}&${addressList}${startsAtGte}`,
    ],
    queryFn: () => {
      const address = addressList
        ?.map(
          selectedLocation => `address=${encodeURIComponent(selectedLocation)}`,
        )
        .join('&');

      return apiInstance.get(
        `/notices?limit=${limit}&offset=${currentPage}&sort=${sort}&hourlyPayGte=${hourlyPayGte}&${address}${startsAtGte}`,
      );
    },

    keepPreviousData: true,
  });
};
