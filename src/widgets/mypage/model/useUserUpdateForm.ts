import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useUserData } from '@/shared/store/useUserData';
import { myPageApi } from '../api/mypage.api';
import { useModal } from '@/shared/store/useModal';
import { ZodError, z } from 'zod';

interface userData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const userDataSchema = z.object({
  name: z.string().min(1, '이름이 비었어요.'),
  phone: z
    .string()
    .min(1, '핸드폰번호가 비었어요.')
    .max(11, '핸드폰 번호를 올바르게 입력해주세요.'),
});

export const useUserValidation = (setError: SetFieldErrors) => {
  const router = useRouter();
  const { user_id } = useUserData();
  const { setIsOpen } = useModal();

  return useMutation({
    mutationKey: [`/users/${user_id}`],
    mutationFn: ({ name, phone, address, bio }: userData) => {
      try {
        userDataSchema.parse({ name, phone, address, bio });
        return myPageApi(name, phone, address, bio, user_id);
      } catch (error) {
        if (error instanceof ZodError) {
          let errorField: { [key: string]: string } = {};
          const { errors } = error;
          errors.forEach(error => {
            const path = error.path[0];
            errorField[path] = error.message;
          });
          setError(errorField);

          throw error;
        }
        throw new Error('Validation error');
      }
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
