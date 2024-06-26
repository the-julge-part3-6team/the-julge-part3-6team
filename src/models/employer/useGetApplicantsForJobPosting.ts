import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface Applicant {
  count: number;
  hasNext: boolean;
  items: {
    item: {
      createdAt: Date;
      id: string;
      notice: any;
      shop: any;
      status: string;
      user: any;
    };
  }[];
  limit: number;
  offset: number;
}

export const useGetApplicantsForJobPosting = ({
  shop_id,
  notice_id,
}: {
  shop_id: string | null;
  notice_id: string | null;
}) => {
  const { data, isError, isLoading } = useQuery<AxiosResponse<Applicant>>({
    queryKey: [`/shops/${shop_id}/notices/${notice_id}/applications`],
    queryFn: () => {
      return apiInstance.get(
        `/shops/${shop_id}/notices/${notice_id}/applications`,
      );
    },
    enabled: !!shop_id && !!notice_id,
  });
  return { data, isError, isLoading };
};
