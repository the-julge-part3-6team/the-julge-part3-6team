import React from 'react';
import * as S from './index.styled';
import { AddProfile } from '@/widgets/mypage/ul/addProfile/AddProfile';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useUserQuery } from '@/components/user/model/useUserData';

const MyPage = () => {
  const { data, isError, isLoading } = useUserQuery();
  const content = data?.data.item.phone ? null : <AddProfile />;
  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <S.MyPageHeader>내 프로필</S.MyPageHeader>
          {content}
        </S.ContentWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyPage;
