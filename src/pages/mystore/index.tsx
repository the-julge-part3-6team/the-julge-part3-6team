import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { useUserQuery } from '@/components/user/model/useUserData';
import {
  NotFoundApplication,
  NotfoundStore,
  StoreCard,
} from '@/widgets/mystore';
import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '@/shared/components/Footer/Footer';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();

  useEffect(() => {
    if (type === 'employee') {
      router.push('/mypage');
    }
  }, [type, router]);

  const { data, isError, isLoading: isUserLoading } = useUserQuery();
  const storeData: Store = data?.data?.item?.shop?.item;

  let store = storeData ? (
    <StoreCard
      shop_id={storeData.id}
      imageUrl={storeData.imageUrl}
      name={storeData.name}
      address={storeData.address1}
      description={storeData.description}
    />
  ) : (
    <NotfoundStore />
  );

  let application = <NotFoundApplication />;

  if (isUserLoading) {
    store = <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      {type === 'employer' && (
        <S.Body>
          <S.MyContentWrap>
            <S.Title>내 가게</S.Title>
            {store}
          </S.MyContentWrap>
          <S.MyContentWrap>
            <S.Title>등록한 공고</S.Title>
            {application}
          </S.MyContentWrap>
        </S.Body>
      )}
      <Footer />
    </>
  );
};

export default index;
