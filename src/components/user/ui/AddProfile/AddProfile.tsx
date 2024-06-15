import React from 'react';
import * as S from './AddProfile.styled';
import { useRouter } from 'next/router';
import { MYPAGE } from '@/constant/path';

export const AddProfile = () => {
  const router = useRouter();

  return (
    <S.MyPageBox>
      <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
      <S.CustomRedButton
        onClick={() => {
          router.push(MYPAGE.CREATE);
        }}
      >
        내 프로필 등록하기
      </S.CustomRedButton>
    </S.MyPageBox>
  );
};
