import React from 'react';
import * as S from './NoticePostList.styled';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import PostCard from '@/shared/components/Post/PostCard/PostCard';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';

interface NoticePostListProps {
  noticeId: string;
}

const NoticePostList = ({ noticeId }: NoticePostListProps) => {
  const { data: noticeData, isLoading: noticeLoading } = useGetNoticeDetail('', noticeId);

  if (noticeLoading) return <div>Loading...</div>;

  const notice = noticeData?.data.item;

  if (!notice) return null;

  const store = notice.shop.item;

  return (
    <S.Layout>
      <PostCard
        isClosed={notice.closed}
        notice_id={notice.id}
        shop_id={store.id}
        imageUrl={store.imageUrl}
        shopName={store.name}
        duration={formatWorkTime({
          type: 'notice',
          startsAt: notice.startsAt,
          workHour: notice.workhour,
        })}
        address={store.address1}
        defaultHourlyPay={store.originalHourlyPay}
        currentHourlyPay={Number(notice.hourlyPay)}
      />
    </S.Layout>
  );
};

export default NoticePostList;

