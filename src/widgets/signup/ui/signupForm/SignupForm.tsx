import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';
import Input from '@/shared/components/Input/Input';

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

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => console.log(data))}>
      {/* <Input label="이메일" type="email" />
      <Input label="비밀번호" type="password" />
      <Input label="비밀번호 확인" type="confirmPassword" /> */}
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
