import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';
import { signupMutation } from '../../model/signupMutation';

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

  const { mutate } = signupMutation(setError);

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <input type="text" {...emailValidation} />
      <input type="password" {...passwordValidation} />
      <input type="password" {...confirmPasswordValidation} />
      <S.TypeSelectContainer>
        회원 유형
        <TypeSelectBtn typeValidation={typeValidation} />
      </S.TypeSelectContainer>

      <RedButton text="가입하기" onClick={handleSubmit(data => mutate(data))} />
    </S.SignupFormLayout>
  );
};

export default SignupForm;
