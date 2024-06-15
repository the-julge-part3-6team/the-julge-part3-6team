import React, { useState } from 'react';
import * as S from './Header.styled';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';
import Search from './Search/Search';
import { useUserData } from '@/shared/store/useUserData';
import { useGetAlerts } from '@/models/alert/useGetAlerts';
import { NotLogin } from './notLogin/notLogin';
import { IsLogin } from './isLogin/IsLogin';
import Link from 'next/link';
import { NotificationModal } from '@/components/notifications';
import notificationImg from '@/assets/notification.svg';
import { useModal } from '@/shared/store/useModal';
import { Notifications } from '@/shared/types/notification';

const Header = () => {
  const { user_id, type } = useUserData();
  const { data, isError, isLoading } = useGetAlerts(user_id);
  console.log(data);
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/noticelist">
          <Image height={20} src={logo} alt="" className="logo" />
        </Link>
        <Search placeholder={'가게 이름으로 찾아보세요.'} />
        <S.AuthContainer>
          {user_id ? <IsLogin type={type} /> : <NotLogin />}
        </S.AuthContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
