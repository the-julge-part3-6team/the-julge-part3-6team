import { SignupForm } from '@/widgets/signup';
import * as S from './index.styled';
import Logo from '@/components/auth/ui/logo/Logo';

const index = () => {
  return (
    <S.PageLayout>
      <Logo />
      <SignupForm />
    </S.PageLayout>
  );
};

export default index;
