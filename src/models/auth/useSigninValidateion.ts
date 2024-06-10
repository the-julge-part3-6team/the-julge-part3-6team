import { useForm } from 'react-hook-form';

enum SigninFormState {
  email = 'email',
  password = 'password',
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
    defaultValues: { email: '', password: '' },
  });

  const emailValue = watch(SigninFormState.email);
  const passwordValue = watch(SigninFormState.password);

  const emailValidation = {
    ...register(SigninFormState.email, {
      required: { value: true, message: '이메일을 입력해 주세요.' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: '이메일 형식이 아닙니다.',
      },
    }),
  };

  const passwordValidation = {
    ...register(SigninFormState.password, {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
    }),
  };

  return {
    emailValue,
    passwordValue,
    emailValidation,
    passwordValidation,
    errors,
    handleSubmit,
    setError,
  };
};
