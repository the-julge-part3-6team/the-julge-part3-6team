import { Logo } from '@/components/auth';
import { PageLayout } from '@/components/auth';
import SigninForm from '@/widgets/signin/ui/signinForm/SigninForm';
import * as S from './index.styled';
import Link from 'next/link';

const index = () => {
  return (
    <PageLayout>
      <Logo />
      <SigninForm />
      <S.SigninLink>
        회원이 아니신가요?&nbsp;&nbsp;
        <Link href="/signup">
          <span>회원가입하기</span>
        </Link>
      </S.SigninLink>
    </PageLayout>
  );
};

export default index;
