import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { useUserQuery } from '@/models/user/useUserData';
import {
  NotFoundNotice,
  NotfoundStore,
  NoticeCardList,
  StoreCard,
} from '@/widgets/mystore';
import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '@/shared/components/Footer/Footer';
import { useGetNoticeByStoreId } from '@/models/notice/useGetNoticeByStoreId';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();

  useEffect(() => {
    if (type === 'employee') {
      router.push('/mypage');
    }
  }, [type, router]);

  const {
    data: userData,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useUserQuery();

  const storeData: Store = userData?.data?.item?.shop?.item;

  const {
    data: noticeData,
    isError: isNoticeError,
    isLoading: isNoticeLoading,
  } = useGetNoticeByStoreId(storeData?.id);
  const noticeList = noticeData?.data.items;

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

  let application = noticeList ? (
    <NoticeCardList noticeList={noticeList} storeName={storeData?.name} />
  ) : (
    <NotFoundNotice shop_id={storeData?.id} />
  );

  if (isUserLoading) store = <div>loading...</div>;
  if (isNoticeLoading) application = <div>loading...</div>;

  return (
    <>
      <Header />
      {type === 'employer' && (
        <S.Body>
          <S.MyContentWrap>
            <S.Title>내 가게</S.Title>
            {store}
          </S.MyContentWrap>
          {storeData && (
            <S.MyContentWrap>
              <S.Title>등록한 공고</S.Title>
              {application}
            </S.MyContentWrap>
          )}
        </S.Body>
      )}
      <Footer />
    </>
  );
};

export default index;
