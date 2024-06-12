import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent, ModalContainer } from '@/widgets/createStore';
import { useModal } from '@/shared/store/useModal';
import { mutateAddStore } from '@/models/store/mutateAddStore';

const index = () => {
  const { setIsOpen } = useModal();
  const { mutate } = mutateAddStore(setIsOpen);

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent mutate={mutate} edit={false} shop_id={null} />
        </S.MyStoreContentWrap>
        <S.ButtonCotainer>
          <S.ButtonWrap></S.ButtonWrap>
        </S.ButtonCotainer>
        <ModalContainer />
      </S.Body>
    </>
  );
};

export default index;
