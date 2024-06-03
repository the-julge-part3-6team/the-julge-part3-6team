import * as S from './Logo.styled';
import Image from 'next/image';
import logo from '../../../../../public/logo.svg';

export const Logo = () => {
  return (
    <S.Logo>
      <Image src={logo} alt="logo" />
    </S.Logo>
  );
};
