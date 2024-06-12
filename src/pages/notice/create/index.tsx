import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent, ModalContainer } from '@/widgets/createNotice';
import { useEffect } from 'react';
import { createNoticeMutate } from '@/models/notice/createNoticeMutate';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';

const index = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { setIsOpen } = useModal();

  useEffect(() => {
    if (!shop_id) router.push('/mystore');
  }, []);

  const { mutate } = createNoticeMutate(shop_id || '', setIsOpen);

  return (
    <>
      <Header />
      <S.BodyWrap>
        <S.Body>
          <S.Title>공고 등록</S.Title>
          <InputContent mutate={mutate} />
          <S.ButtonWrap></S.ButtonWrap>
        </S.Body>
      </S.BodyWrap>
      <ModalContainer />
    </>
  );
};

export default index;
