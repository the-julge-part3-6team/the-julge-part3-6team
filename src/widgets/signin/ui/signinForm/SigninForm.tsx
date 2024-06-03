import { TypeSelectBtn } from '@/components/auth';
import * as S from './SigninForm.styled';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { useSigninState } from '../../model/useSigninValidateion';
import { useSigninMutation } from '../../model/useSigninMutation';

const SigninForm = () => {
  const {
    emailValidation,
    passwordValidation,
    typeValidation,
    errors,
    setError,
    handleSubmit,
  } = useSigninState();

  const { mutate } = useSigninMutation(setError);

  return (
    <S.SigninFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <input type="text" {...emailValidation} />
      <input type="text" {...passwordValidation} />
      <TypeSelectBtn typeValidation={typeValidation} />
      <RedButton
        text="로그인 하기"
        onClick={handleSubmit(data => mutate(data))}
      />
    </S.SigninFormLayout>
  );
};

export default SigninForm;
