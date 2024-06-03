import { useForm } from 'react-hook-form';
import { SignupFormState } from '../constant/signupFormState';

export const useSignupState = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { email: '', password: '', confirmPassword: '', type: '' },
  });

  const passwordValue = watch(SignupFormState.password);

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
      pattern: {
        value: /^[a-zA-Z0-9]{8,}$/,
        message: '8자 이상이어야합니다.',
      },
    }),
  };

  const confirmPasswordValidation = {
    ...register(SignupFormState.confirmPassword, {
      required: { value: true, message: '비밀번호를 다시 입력해주세요.' },
      validate: value =>
        value === passwordValue || '비밀번호가 일치하지 않습니다.',
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
    confirmPasswordValidation,
    typeValidation,
    errors,
    handleSubmit,
    setError,
  };
};
