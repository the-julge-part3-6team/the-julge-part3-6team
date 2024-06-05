import Header from '@/shared/components/Header/Header';
import MyStoreContent from '@/widgets/mystore/ui/MyStoreContent';
import * as S from './index.styled';
import { useUserQuery } from '@/components/user/model/useUserData';

const index = () => {
  const { data, isError, isLoading } = useUserQuery();
  const content = data?.data.shop ? null : <MyStoreContent />;

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>내 가게</S.Title>
          {content}
        </S.MyStoreContentWrap>
      </S.Body>
    </>
  );
};

export default index;
