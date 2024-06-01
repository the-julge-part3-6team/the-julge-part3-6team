import React, { ReactNode } from 'react';
import * as S from './index.styled';
import { AddProfile } from '@/widgets/mypage/ul/addProfile/AddProfile';

interface Prop {
  children: ReactNode;
}

const MyPage = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.MyPageHeader>내 프로필</S.MyPageHeader>
        <AddProfile />
      </S.ContentWrap>
    </S.Container>
  );
};

export default MyPage;
