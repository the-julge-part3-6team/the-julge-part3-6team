import React, { useEffect, useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { ShopDetailWidget } from '@/widgets/noticedetail';
import { DetailWidget } from '@/widgets/noticedetail';
import { RecentPostsWidget } from '@/widgets/noticedetail';
import { useSearchParams } from 'next/navigation';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { useGetUserApplicationList } from '@/models/application/useGetUsersApplicationList';
import { useUserData } from '@/shared/store/useUserData';

const NoticeDetail = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const { user_id } = useUserData();
  const {
    data: noticeData,
    // isError: noticeError,
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');
  const {
    data: usersApplicationList,
    isLoading: isApplicationListLoading,
    isError,
  } = useGetUserApplicationList(user_id);

  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    usersApplicationList?.data.items.forEach((item: any) => {
      const isSupport = item.item.notice.item.id === noticeData?.data.item.id;

      if (isSupport) {
        setIsApplied(true);
      }
    });
  }, [usersApplicationList, noticeData]);

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.SmallText>식당</S.SmallText>
        {renderSpinner(
          <ShopDetailWidget
            noticeData={noticeData?.data}
            isApplied={isApplied}
            setIsApplied={setIsApplied}
          />,
          noticeLoading,
        )}
        <DetailWidget noticeData={noticeData?.data} />
        <S.BigText>최근에 본 공고</S.BigText>
        <RecentPostsWidget />
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetail;
