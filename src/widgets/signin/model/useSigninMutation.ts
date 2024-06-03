import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signinApi } from '../api/signin.api';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';

interface SigninData {
  email: string;
  password: string;
  type: string;
}

export const useSigninMutation = (setError: any) => {
  const router = useRouter();
  const { setUserId, setType } = useUserData();

  return useMutation({
    mutationKey: ['/token'],
    mutationFn: ({ email, password, type }: SigninData) =>
      signinApi(email, password, type),

    onSuccess: data => {
      const token = data.data.item.token;
      const id = data.data.item.user.item.id;
      const type = data.data.item.user.item.type;
      document.cookie = `token=${token}`;
      //   router.push('로그인 후에 이동할 경로');
      // id, type 저장
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
