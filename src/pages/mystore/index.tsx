import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { useUserQuery } from '@/components/user/model/useUserData';
import { NotFoundNotice, NotfoundStore, StoreCard } from '@/widgets/mystore';
import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '@/shared/components/Footer/Footer';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();

  const {
    data: userData,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useUserQuery();

  useEffect(() => {
    if (type === 'employee') {
      router.push('/mypage');
    }
  }, [type, router]);

  if (isUserLoading) {
    <div>...isLoading</div>;
  }

  const storeData: Store = userData?.data?.item?.shop?.item;

  // const {
  //   data: NoticeData,
  //   isError: isNoticeError,
  //   isLoading: isNoticeLoading,
  // } = useGetNotice(storeData?.id);

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

  let application = <NotFoundNotice />;

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
