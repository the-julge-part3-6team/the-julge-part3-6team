import { useMutation } from '@tanstack/react-query';
import { signupApi } from '../api/signup.api';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

interface SignUpData {
  email: string;
  password: string;
  type: string;
}

export const signupMutation = (setError: any) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['/users'],
    mutationFn: ({ email, password, type }: SignUpData) =>
      signupApi(email, password, type),

    onSuccess: () => {
      alert('가입이 완료되었습니다');
      router.push('/signin');
    },

    onError: (error: AxiosError) => {
      const statusCode = error.response?.status;
      switch (statusCode) {
        case 409:
          setError('email', {
            type: 'manual',
            message: '이미 존재하는 이메일 입니다.',
          });
          return;

        default:
          console.log(error);
          return;
      }
    },
  });
};
