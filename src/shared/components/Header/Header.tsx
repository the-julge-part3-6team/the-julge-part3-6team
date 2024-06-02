import React, { useState } from 'react';
import * as S from './Header.styled';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';
import Search from './Search/Search';
import notificationImg from '@/assets/notification.svg';
import notificationOnImg from '@/assets/notification-on.svg';

const Header = () => {
  const [test, setTest] = useState('asd');
  const [testAlarm, setTestAlarm] = useState('');

  return (
    <S.Header>
      <S.HeaderContainer>
        <Image height={20} src={logo} alt="" className="logo" />
        <Search placeholder={'가게 이름으로 찾아보세요.'} />
        <S.AuthContainer>
          {test ? (
            <>
              <li>
                <a href="">내 가게</a>
              </li>
              <li>
                <a href="">로그아웃</a>
              </li>
              <li>
                <a href="">
                  <Image
                    src={testAlarm ? notificationOnImg : notificationImg}
                    alt=""
                  />
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="">로그인</a>
              </li>
              <li>
                <a href="">회원가입</a>
              </li>
            </>
          )}
        </S.AuthContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
