import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { useModal } from '@/shared/store/useModal';
import { apiInstance } from '@/shared/utils/axios';

interface userData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export const useUserValidation = () => {
  const { user_id } = useUserData();
  const { setIsOpen } = useModal();

  return useMutation({
    mutationKey: [`/users/${user_id}`],
    mutationFn: ({ name, phone, address, bio }: userData) => {
      return apiInstance.put(`/users/${user_id}`, {
        name,
        phone,
        address,
        bio,
      });
    },
    onSuccess: data => {
      setIsOpen('등록완료');
      console.log(data);
    },

    onError: (error: AxiosError) => {
      console.error(error);
    },
  });
};
