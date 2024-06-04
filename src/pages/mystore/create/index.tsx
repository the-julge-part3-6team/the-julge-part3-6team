import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import AddStoreImage from '@/components/ceo/ui/addStoreImage/AddStoreImage';

const index = () => {
  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent />
          <AddStoreImage />
        </S.MyStoreContentWrap>
      </S.Body>
    </>
  );
};

export default index;
