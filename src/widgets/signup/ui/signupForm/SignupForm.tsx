import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';
import { signupMutate } from '../../model/signupMutate';

export const SignupForm = () => {
  const {
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    typeValidation,
    errors,
    setError,
    handleSubmit,
  } = useSignupState();

  const { mutate } = signupMutate(setError);

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <input type="text" {...emailValidation} />
      <input type="password" {...passwordValidation} />
      <input type="password" {...confirmPasswordValidation} />
      회원 유형
      <TypeSelectBtn typeValidation={typeValidation} />
      <RedButton text="가입하기" onClick={handleSubmit(data => mutate(data))} />
    </S.SignupFormLayout>
  );
};

export default SignupForm;
