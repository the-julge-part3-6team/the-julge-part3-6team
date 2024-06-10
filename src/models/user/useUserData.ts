import { useUserData } from '@/shared/store/useUserData';
import { getUserApi } from '@/widgets/mystore/api/getUser.api';
import { useQuery } from '@tanstack/react-query';

export const useUserQuery = () => {
  const { user_id } = useUserData();

  const { data, isError, isLoading } = useQuery({
    queryKey: [`/users/${user_id}`],
    queryFn: () => {
      return getUserApi(user_id);
    },
    enabled: !!user_id,
  });
  return { data, isError, isLoading };
};
