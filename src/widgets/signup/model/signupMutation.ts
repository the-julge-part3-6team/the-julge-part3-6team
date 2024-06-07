import { useMutation } from '@tanstack/react-query';
import { signupApi } from '../api/signup.api';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

interface SignUpData {
  email: string;
  password: string;
  type: string;
}

export const signupMutation = (setError: any, setIsOpen: any) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['/users'],
    mutationFn: ({ email, password, type }: SignUpData) =>
      signupApi(email, password, type),

    onSuccess: () => {
      setIsOpen('complete_signup_modal');
      return;
    },

    onError: (error: AxiosError) => {
      const statusCode = error.response?.status;
      switch (statusCode) {
        case 409:
          setIsOpen('conflict_email_modal');
          return;

        default:
          console.log(error);
          return;
      }
    },
  });
};
