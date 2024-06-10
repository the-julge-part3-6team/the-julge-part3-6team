import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { myPageApi } from '../api/mypage.api';
import { useModal } from '@/shared/store/useModal';

interface userData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export const useUserValidation = () => {
  const router = useRouter();
  const { user_id } = useUserData();
  const { setIsOpen } = useModal();

  return useMutation({
    mutationKey: [`/users/${user_id}`],
    mutationFn: ({ name, phone, address, bio }: userData) => {
      return myPageApi(name, phone, address, bio, user_id);
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
