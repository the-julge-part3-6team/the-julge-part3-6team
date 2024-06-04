import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';
import { signupMutation } from '../../model/signupMutation';
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

  const { mutate } = signupMutation(setError);

  console.log(errors);

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <Input
        inputType="text"
        type="basic"
        label="이메일"
        register={emailValidation}
        error={errors.email?.message}
        placeholder="이메일을 입력해주세요."
      />
      <Input
        inputType="password"
        type="basic"
        label="비밀번호"
        register={passwordValidation}
        error={errors.password?.message}
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        inputType="password"
        type="basic"
        label="비밀번호 확인"
        register={confirmPasswordValidation}
        error={errors.confirmPassword?.message}
        placeholder="비밀번호를 다시 입력해주세요."
      />

      <S.TypeSelectContainer>
        회원 유형
        <TypeSelectBtn typeValidation={typeValidation} />
      </S.TypeSelectContainer>
      <RedButton text="가입하기" onClick={handleSubmit(data => mutate(data))} />
    </S.SignupFormLayout>
  );
};

export default SignupForm;
