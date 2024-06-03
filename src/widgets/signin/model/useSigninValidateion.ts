import { useForm } from 'react-hook-form';

enum SignupFormState {
  email = 'email',
  password = 'password',
  type = 'type',
}

export const useSigninState = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { email: '', password: '', type: '' },
  });

  const emailValidation = {
    ...register(SignupFormState.email, {
      required: { value: true, message: '이메일을 입력해 주세요.' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: '이메일 형식이 아닙니다.',
      },
    }),
  };

  const passwordValidation = {
    ...register(SignupFormState.password, {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
    }),
  };

  const typeValidation = {
    ...register(SignupFormState.type, {
      required: { value: true, message: '유형을 선택해 주세요.' },
    }),
  };

  return {
    emailValidation,
    passwordValidation,
    typeValidation,
    errors,
    handleSubmit,
    setError,
  };
};
