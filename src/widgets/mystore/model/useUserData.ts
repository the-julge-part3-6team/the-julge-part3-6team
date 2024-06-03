import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { getUserApi } from '../api/getUser.api';

export const useUserQuery = () => {
  const { user_id } = useUserData();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['/shops/'],
    queryFn: () => {
      return getUserApi(user_id);
    },
    enabled: !!user_id,
  });
  return { data, isError, isLoading };
};
