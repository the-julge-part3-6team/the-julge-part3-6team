import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './CustomNotFoundPost.styled';
import React from 'react';
import { useRouter } from 'next/router';
import { MYPAGE } from '@/constant/path';
import { useUserData } from '@/shared/store/useUserData';

export const CustomNotFoundPost = () => {
  const { user_id } = useUserData(state => ({
    user_id: state.user_id,
  }));
  const router = useRouter();
  return (
    <S.CustomLayout>
      <S.CustomContainer>
        <S.CustomTitle>
          <S.CustomPoint>회원</S.CustomPoint>님을 위한 맞춤공고가 없어요😕
        </S.CustomTitle>
        <S.CustomSubTitle>*맞춤 공고란?</S.CustomSubTitle>
        <S.CustomContent>
          설정된 선호 지역을 기반으로 <S.CustomPoint>더줄게</S.CustomPoint>에서
          추천하는 공고입니다.
          <br />
          프로필 페이지에서 선호지역을 설정 또는 수정하고 가까운 가게의 공고를
          추천받아 보세요!
        </S.CustomContent>
        <RedButton
          text="프로필 편집하러 가기"
          onClick={() => {
            router.push(`${MYPAGE.EDIT}?user_id=${user_id}`);
          }}
        />
      </S.CustomContainer>
    </S.CustomLayout>
  );
};
