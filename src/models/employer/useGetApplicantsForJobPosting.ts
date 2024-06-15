import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetApplicantsForJobPosting = ({
  shop_id,
  notice_id,
}: {
  shop_id: string | null;
  notice_id: string | null;
}) => {
  const { data, isError, isLoading } = useQuery({
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
