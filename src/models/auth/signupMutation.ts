import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { apiInstance } from '@/shared/utils/axios';

interface SignUpData {
  email: string;
  password: string;
  type: string;
}

export const signupMutation = (setError: any, setIsOpen: any) => {
  return useMutation({
    mutationKey: ['/users'],
    mutationFn: ({ email, password, type }: SignUpData) =>
      apiInstance.post('/users', { email, password, type }),

    onSuccess: () => {
      setIsOpen('complete_signup_modal');
      return;
    },

    onError: (error: { message: string }) => {
      const statusCode = error.message;

      switch (statusCode) {
        case '409':
          setIsOpen('conflict_email_modal');
          return;

        default:
          return;
      }
    },
  });
};
