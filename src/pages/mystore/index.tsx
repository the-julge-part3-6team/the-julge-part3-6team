import Header from '@/shared/components/Header/Header';
import MyStoreContent from '@/widgets/mystore/ui/MyStoreContent';
import * as S from './index.styled';

const index = () => {
  return (
    <>
      <Header />
      <S.MyStoreContentWrap>
        <S.Title>내 가게</S.Title>
        <MyStoreContent />
      </S.MyStoreContentWrap>
    </>
  );
};

export default index;
