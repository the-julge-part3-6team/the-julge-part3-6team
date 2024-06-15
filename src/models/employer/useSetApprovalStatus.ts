import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { useModal } from '@/shared/store/useModal';
import { apiInstance } from '@/shared/utils/axios';

interface Props {
  shop_id: string | null;
  notice_id: string | null;
  id: string;
  status: string;
}

export const useSetApprovalStatus = () => {
  return useMutation({
    mutationFn: async ({ shop_id, notice_id, id, status }: Props) => {
      const response = await apiInstance.put(
        `/shops/${shop_id}/notices/${notice_id}/applications/${id}`,
        {
          status: `${status}`,
        },
      );
      return response.data;
    },
    onSuccess: data => {
      location.reload();
    },

    onError: (error: AxiosError) => {
      console.error(error);
    },
  });
};
