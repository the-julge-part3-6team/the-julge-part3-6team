import { USER_FORM_ERRORS_INITIAL_VALUE } from '@/constant/user';
import { userDataSchema } from '@/models/user/useUserValidateion';
import { Dispatch, SetStateAction } from 'react';

export const isValidData = (
  { name, phone, address, bio }: ProfileUserData,
  setError: Dispatch<SetStateAction<UserFromErrors>>,
) => {
  const { success: isSuccess, error } = userDataSchema.safeParse({
    name,
    phone,
    address,
    bio,
  });

  if (!isSuccess) {
    let errorField: UserFromErrors = USER_FORM_ERRORS_INITIAL_VALUE;
    const { errors } = error;
    errors.forEach(error => {
      const path = error.path[0];
      errorField[path] = error.message;
    });
    setError(errorField);
    return false;
  }
  return true;
};
