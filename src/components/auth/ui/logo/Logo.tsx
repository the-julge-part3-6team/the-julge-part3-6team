import * as S from './Logo.styled';
import Image from 'next/image';
import logo from '../../../../../public/logo.svg';

const Logo = () => {
  return (
    <S.Logo>
      <Image src={logo} alt="logo" />
    </S.Logo>
  );
};

export default Logo;
