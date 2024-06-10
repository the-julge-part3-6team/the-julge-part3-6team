import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './SignupForm.styled';
import { TypeSelectBtn } from '@/components/auth';
import { useSignupState } from '../../model/useSignupValidate';
import { signupMutation } from '../../../../models/auth/signupMutation';
import Input from '@/shared/components/Input/Input';
import { useModal } from '@/shared/store/useModal';
import Modal from '@/shared/components/Modal/Modal';
import { useRouter } from 'next/router';

export const SignupForm = () => {
  const {
    emailValue,
    passwordValue,
    confirmPasswordValue,
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    typeValidation,
    errors,
    setError,
    handleSubmit,
  } = useSignupState();
  const router = useRouter();
  const { setIsOpen, setIsClose } = useModal();
  const { mutate } = signupMutation(setError, setIsOpen);

  const onClickCompleteModal = () => {
    setIsClose();
    router.push('/signin');
  };

  return (
    <S.SignupFormLayout onSubmit={handleSubmit(data => mutate(data))}>
      <Input
        value={emailValue}
        inputType="text"
        type="basic"
        label="이메일"
        register={emailValidation}
        error={errors.email?.message}
        placeholder="이메일을 입력해주세요."
      />
      <Input
        value={passwordValue}
        inputType="password"
        type="basic"
        label="비밀번호"
        register={passwordValidation}
        error={errors.password?.message}
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        value={confirmPasswordValue}
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
      <Modal
        modalKey="conflict_email_modal"
        modalHeader={<S.ModalHeader>이미 사용중인 이메일입니다.</S.ModalHeader>}
        modalFooter={
          <S.ModalFooter>
            <RedButton text="확인" onClick={() => setIsClose()} />
          </S.ModalFooter>
        }
      />
      <Modal
        modalKey="complete_signup_modal"
        modalHeader={<S.ModalHeader>가입이 완료되었습니다!</S.ModalHeader>}
        modalFooter={
          <S.ModalFooter>
            <RedButton text="확인" onClick={onClickCompleteModal} />
          </S.ModalFooter>
        }
      />
    </S.SignupFormLayout>
  );
};

export default SignupForm;
