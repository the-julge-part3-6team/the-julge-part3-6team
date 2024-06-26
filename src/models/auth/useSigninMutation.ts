import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { Cookies } from 'react-cookie';
import { NOTICE } from '@/constant/path';

const cookies = new Cookies();

interface SigninData {
  email: string;
  password: string;
}

export const useSigninMutation = (setError: any) => {
  const router = useRouter();
  const { setUserId, setType, setAddress } = useUserData();

  return useMutation({
    mutationKey: ['/token'],
    mutationFn: ({ email, password }: SigninData) =>
      apiInstance.post('/token', { email, password }),

    onSuccess: data => {
      const token = data.data.item.token;
      const id = data.data.item.user.item.id;
      const type = data.data.item.user.item.type;
      const address = data.data.item.user.item.address;

      cookies.set('token', token, { path: '/' });
      setUserId(id);
      setType(type);
      setAddress(address);
      router.push(NOTICE.LIST);
    },

    onError: (error: { message: string }) => {
      const statusCode = error.message;

      switch (statusCode) {
        case '404':
          setError('email', {
            type: 'manual',
            message: '존재하지 않거나 비밀번호가 일치하지 않습니다.',
          });
          setError('password', {
            type: 'manual',
            message: '존재하지 않거나 비밀번호가 일치하지 않습니다.',
          });
          return;

        default:
          console.log(error);
          return;
      }
    },
  });
};
