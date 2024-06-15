import React, { useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import ShopDetailWidget from './ShopDetailWidget/ShopDetailWidget';
import DetailWidget from './DetailWidget/DetailWidget';
import RecentPostsWidget from './RecentPostsWidget/RecentPostWidget';
import { useModal } from '@/shared/store/useModal';
import { useSearchParams } from 'next/navigation';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';

const NoticeDetail = () => {

  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: noticeData,
    isError: noticeError,
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');
  
  const { key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);

  if (!noticeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.SmallText>식당</S.SmallText>
        <ShopDetailWidget noticeData={noticeData} isApplied={isApplied} />
        <DetailWidget noticeData={noticeData} />
        <S.BigText>최근에 본 공고</S.BigText>
        <RecentPostsWidget isOpen={isOpen} key={key} />
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetail;