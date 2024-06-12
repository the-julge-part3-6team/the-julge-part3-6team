import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent, ModalContainer } from '@/widgets/createStore';

const index = () => {
  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent />
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
