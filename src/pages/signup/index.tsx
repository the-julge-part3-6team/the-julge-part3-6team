import { SignupForm } from '@/widgets/signup';
import * as S from './index.styled';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

const index = () => {
  return (
    <S.PageLayout>
      <S.Logo>
        <Image src={logo} alt="logo" />
      </S.Logo>
      <SignupForm />
    </S.PageLayout>
  );
};

export default index;
