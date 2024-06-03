import React from 'react';
import * as S from './index.styled';
import { AddProfile } from '@/widgets/mypage/ul/addProfile/AddProfile';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';

const MyPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <S.MyPageHeader>내 프로필</S.MyPageHeader>
          <AddProfile />
        </S.ContentWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyPage;
