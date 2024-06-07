import React, { useState } from 'react';
import * as S from './Header.styled';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';
import Search from './Search/Search';
import { useUserData } from '@/shared/store/useUserData';
import { useGetAlerts } from '@/components/alert/model/useGetAlerts';
import { NotLogin } from './notLogin/notLogin';
import { IsLogin } from './isLogin/IsLogin';

const Header = () => {
  const { user_id, type } = useUserData();
  const [testAlarm, setTestAlarm] = useState('');
  const { data, isError, isLoading } = useGetAlerts(user_id);

  return (
    <S.Header>
      <S.HeaderContainer>
        <Image height={20} src={logo} alt="" className="logo" />
        <Search placeholder={'가게 이름으로 찾아보세요.'} />
        <S.AuthContainer>
          {user_id ? (
            <IsLogin type={type} testAlarm={testAlarm} />
          ) : (
            <NotLogin />
          )}
        </S.AuthContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
