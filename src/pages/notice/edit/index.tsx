import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createNotice';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useModal } from '@/shared/store/useModal';
import { usePatchNotice } from '@/models/notice/usePatchNotice';
import { ModalContainer } from '@/widgets/updateNotice/ui/modalContainer/ModalContainer';

const index = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const { setIsOpen } = useModal();

  useEffect(() => {
    // if (!shop_id) router.push('/mystore');
  }, [shop_id]);

  const { mutate } = usePatchNotice(shop_id!, notice_id!, setIsOpen);

  return (
    <>
      <Header />
      <S.BodyWrap>
        <S.Body>
          <S.Title>공고 편집</S.Title>
          <InputContent mutate={mutate} />
        </S.Body>
      </S.BodyWrap>
      <ModalContainer />
    </>
  );
};

export default index;
