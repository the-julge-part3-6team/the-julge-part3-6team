import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { mutateUpdateStore } from '@/models/store/mutateUpdateStore';
import { ModalContainer } from '@/widgets/updateStore';
import { useUserData } from '@/shared/store/useUserData';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { setIsOpen } = useModal();

  if (type === 'employee') {
    router.push('/mypage');
    return;
  }

  const { mutate } = mutateUpdateStore(shop_id || '', setIsOpen);

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent mutate={mutate} edit shop_id={shop_id} />
        </S.MyStoreContentWrap>
        <ModalContainer />
      </S.Body>
    </>
  );
};

export default index;
