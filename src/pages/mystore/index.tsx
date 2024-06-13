import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { useUserQuery } from '@/models/user/useUserData';
import { StoreContent } from '@/widgets/mystore';
import Footer from '@/shared/components/Footer/Footer';
import { NoticeContent } from '@/widgets/mystore/ui/NoticeContent/NoticeContent';
import { useRouterGuard } from '@/shared/utils/useRouterGuard';

const index = () => {
  const { data, isError, isLoading } = useUserQuery();
  const store: Store = data?.data?.item?.shop?.item;

  return (
    <>
      <Header />
      <S.Body>
        <S.MyContentWrap>
          <S.Title>내 가게</S.Title>
          <StoreContent store={store} isLoading={isLoading} />
        </S.MyContentWrap>
        <S.MyContentWrap>
          <S.Title>등록한 공고</S.Title>
          <NoticeContent store={store} />
        </S.MyContentWrap>
      </S.Body>
      <Footer />
    </>
  );
};

export default index;
