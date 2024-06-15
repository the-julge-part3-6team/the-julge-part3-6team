import React, { useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import ShopDetailWidget from './ShopDetailWidget/ShopDetailWidget';
import DetailWidget from './DetailWidget/DetailWidget';
import RecentPostsWidget from './RecentPostsWidget/RecentPostWidget';
import { useModal } from '@/shared/store/useModal';
import { NoticeData } from '@/shared/types/post';

const NoticeDetail = () => {
  const { key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);

  // NoticeData는 실제 데이터로 대체되어야 함
  const noticeData = {} as NoticeData;

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