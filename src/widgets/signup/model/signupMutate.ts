import { useMutation } from '@tanstack/react-query';
import { signupApi } from '../api/signup.api';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

interface SignUpData {
  email: string;
  password: string;
  type: string;
}

export const signupMutate = (setError: any) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['/users'],
    mutationFn: (data: SignUpData) =>
      signupApi(data.email, data.password, data.type),

    onSuccess: () => router.push('/login'),
    onError: (error: AxiosError) => {
      const statusCode = error.response?.status;
      switch (statusCode) {
        case 409:
          setError('email', {
            type: 'manual',
            message: '이미 존재하는 이메일 입니다.',
          });
      }
    },
  });
};
