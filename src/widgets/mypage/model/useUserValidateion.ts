import { locations } from '@/components/filter/constant/locations';
import { useForm } from 'react-hook-form';

// 상수로 빼기 ? enum을 쓰면 객체로 그대로 값자체를 쓸수 있다.
enum userUpdateForm {
  name = 'name',
  phone = 'phone',
  address = 'address',
  bio = 'bio',
}

export const useUserUpdateForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { name: '', phone: '', address: '', bio: '' },
  });

  const PhoneValidation = {
    ...register(userUpdateForm.phone, {
      required: { value: true, message: '연락처를 입력해 주세요.' },
      pattern: {
        value: /^01[016789]\d{3,4}\d{4}$/,
        message: '올바른 연락처가 아닙니다.',
      },
    }),
  };

  const locationValidation = {
    ...register(userUpdateForm.address, {
      required: { value: true, message: '위치를 선택해 주세요.' },
      validate: {
        validLocation: value => locations.includes(value),
      },
    }),
  };

  return {
    PhoneValidation,
    locationValidation,
    errors,
    handleSubmit,
    setError,
  };
};
