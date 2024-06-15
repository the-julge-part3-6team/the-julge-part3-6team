import React, { useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import ShopDetailWidget from './widget/ShopDetailWidget/ShopDetailWidget';
import DetailWidget from './widget/DetailWidget/DetailWidget';
import RecentPostsWidget from './widget/RecentPostsWidget/RecentPostWidget';
import { useSearchParams } from 'next/navigation';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import { renderSpinner } from '@/shared/utils/renderSpinner';

const NoticeDetail = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: noticeData,
    isError: noticeError,
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');

  const [isApplied, setIsApplied] = useState(false);

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.SmallText>식당</S.SmallText>
            {renderSpinner(<ShopDetailWidget
              noticeData={noticeData}
              isApplied={isApplied}
              setIsApplied={setIsApplied}
            />, noticeLoading)}
            <DetailWidget noticeData={noticeData} />
        <S.BigText>최근에 본 공고</S.BigText>
        <RecentPostsWidget />
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetail;
