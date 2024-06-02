import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';

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
  console.log(errors);

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => console.log(data))}>
      <input type="text" {...emailValidation} />
      <input type="text" {...passwordValidation} />
      <input type="text" {...confirmPasswordValidation} />
      회원 유형
      <TypeSelectBtn typeValidation={typeValidation} />
      <RedButton
        text="가입하기"
        onClick={handleSubmit(data => console.log(data))}
      />
    </S.SignupFormLayout>
  );
};

export default SignupForm;
