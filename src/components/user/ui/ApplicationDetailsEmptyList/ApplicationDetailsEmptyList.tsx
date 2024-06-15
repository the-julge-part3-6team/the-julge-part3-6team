import React from 'react';
import * as S from './ApplicationDetailsEmptyList.styled';
import { useRouter } from 'next/router';
import { NOTICE } from '@/constant/path';

export const ApplicationDetailsEmptyList = () => {
  const router = useRouter();

  return (
    <>
      <S.BackgroundBox>
        <S.ContentBox>
          <S.MyPageHeader>신청 내역</S.MyPageHeader>
          <S.MyPageBox>
            아직 신청 내역이 없어요.
            <S.CustomRedButton
              // 수정해야함
              onClick={() => {
                router.push(NOTICE.LIST);
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
