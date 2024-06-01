import React from 'react';
import * as S from './AddProfile.styled';

export const AddProfile = () => {
  return (
    <S.MyPageBox>
      <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
      <S.CustomRedButton
        onClick={() => {
          console.log('login');
        }}
      >
        로그인 하기
      </S.CustomRedButton>
    </S.MyPageBox>
  );
};
