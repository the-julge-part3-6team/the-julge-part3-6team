import { userDataSchema } from '@/widgets/mypage/model/useUserValidateion';

export const isValidData = (
  { name, phone, address, bio }: FieldErrors,
  setError: SetFieldErrors,
) => {
  const { success: isSuccess, error } = userDataSchema.safeParse({
    name,
    phone,
    address,
    bio,
  });

  if (!isSuccess) {
    let errorField: { [key: string]: string } = {};
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
