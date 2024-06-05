import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { myPageApi } from '../api/mypage.api';

interface userData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export const useUserValidateion = () => {
  const router = useRouter();
  const { user_id } = useUserData();

  return useMutation({
    mutationKey: [`/users/${user_id}`],
    mutationFn: ({ name, phone, address, bio }: userData) =>
      myPageApi(name, phone, address, bio, user_id),
    //
    onSuccess: data => {
      console.log(data);
    },

    onError: (error: AxiosError) => {
      console.error(error);
    },
  });
};
