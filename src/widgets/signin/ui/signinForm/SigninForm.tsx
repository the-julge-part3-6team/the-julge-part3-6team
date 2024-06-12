import * as S from './SigninForm.styled';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { useSigninMutation } from '../../../../models/auth/useSigninMutation';
import Input from '@/shared/components/Input/Input';
import { useSigninState } from '@/models/auth/useSigninValidateion';

export const SigninForm = () => {
  const {
    emailValue,
    passwordValue,
    emailValidation,
    passwordValidation,
    errors,
    setError,
    handleSubmit,
  } = useSigninState();

  const { mutate } = useSigninMutation(setError);

  return (
    <S.SigninFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <Input
        value={emailValue}
        inputType="text"
        type="basic"
        label="이메일"
        register={emailValidation}
        placeholder="이메일을 입력해주세요."
        error={errors.email?.message}
      />
      <Input
        value={passwordValue}
        inputType="password"
        type="basic"
        label="비밀번호"
        register={passwordValidation}
        placeholder="비밀번호를 입력해주세요."
        error={errors.password?.message}
      />
      <RedButton
        text="로그인 하기"
        onClick={handleSubmit(data => mutate(data))}
      />
    </S.SigninFormLayout>
  );
};

export default SigninForm;
