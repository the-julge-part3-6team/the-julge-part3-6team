import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signinApi } from '../api/signin.api';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';

interface SigninData {
  email: string;
  password: string;
}

export const useSigninMutation = (setError: any) => {
  const router = useRouter();
  const { setUserId, setType } = useUserData();

  return useMutation({
    mutationKey: ['/token'],
    mutationFn: ({ email, password }: SigninData) => signinApi(email, password),

    onSuccess: data => {
      const token = data.data.item.token;
      const id = data.data.item.user.item.id;
      const type = data.data.item.user.item.type;
      document.cookie = `token=${token}`;
      router.push('/mystore');

      setUserId(id);
      setType(type);
    },

    onError: (error: AxiosError) => {
      const statusCode = error.response?.status;
      switch (statusCode) {
        case 404:
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
