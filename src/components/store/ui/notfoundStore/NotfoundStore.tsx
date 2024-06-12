import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './NotfoundStore.styled';
import { useRouter } from 'next/router';

export const NotfoundStore = () => {
  const router = useRouter();

  return (
    <S.MyStoreContent>
      <S.Description>내 가게를 소개하고 공고도 등록해 보세요.</S.Description>
      <S.ButtonWrap>
        <RedButton
          text="가게 등록하기"
          onClick={() => router.push('/mystore/create')}
        />
      </S.ButtonWrap>
    </S.MyStoreContent>
  );
};
