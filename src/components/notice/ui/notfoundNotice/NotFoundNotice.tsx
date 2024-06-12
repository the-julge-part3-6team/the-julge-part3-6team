import { useRouter } from 'next/router';
import * as S from './NotFoundNotice.styled';
import RedButton from '@/shared/components/Button/RedButton/RedButton';

export const NotFoundNotice = ({ shop_id }: { shop_id: string }) => {
  const router = useRouter();

  return (
    <S.MyStoreContent>
      <S.Description>내 가게를 소개하고 공고도 등록해 보세요.</S.Description>
      <S.ButtonWrap>
        <RedButton
          text="공고 등록하기"
          onClick={() => router.push(`/notice/create?shop_id=${shop_id}`)}
        />
      </S.ButtonWrap>
    </S.MyStoreContent>
  );
};
