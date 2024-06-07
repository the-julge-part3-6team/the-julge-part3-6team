import React from 'react';
import * as S from './EmptyList.styled';
import { useRouter } from 'next/router';

export const EmptyList = () => {
  const router = useRouter();

  return (
    <>
      <S.BackgroundBox>
        <S.ContentBox>
          <S.MyPageHeader>신청 내역</S.MyPageHeader>
          <S.MyPageBox>
            아직 신청 내역이 없어요.
            <S.CustomRedButton
              onClick={() => {
                router.push('mypage/create');
              }}
            >
              공고 보러가기
            </S.CustomRedButton>
          </S.MyPageBox>
        </S.ContentBox>
      </S.BackgroundBox>
    </>
  );
};
