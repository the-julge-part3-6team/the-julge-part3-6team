import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './MyStoreContent.styled';
import { useQuery } from '@tanstack/react-query';
import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';
import { useUserQuery } from '../model/useUserData';

const MyStoreContent = () => {
  return (
    <S.MyStoreContent>
      <S.Description>내 가게를 소개하고 공고도 등록해 보세요.</S.Description>
      <S.ButtonWrap>
        <RedButton text="가게 등록하기" onClick={() => {}} />
      </S.ButtonWrap>
    </S.MyStoreContent>
  );
};

export default MyStoreContent;
