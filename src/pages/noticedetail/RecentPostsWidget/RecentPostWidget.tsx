import React, { useEffect, useState } from 'react';
import * as S from './RecentPostsWidget.styled';
import { useSearchParams } from 'next/navigation';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import { NoticeData } from '@/shared/types/post';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import PostList from '@/shared/components/Post/PostList/PostList';

interface RecentPostsWidgetProps {
  isOpen: boolean;
  key: string;
}

const RecentPostsWidget = ({ isOpen, key }: RecentPostsWidgetProps) => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: noticeData,
    isError: noticeError,
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');
  const [recentPosts, setRecentPosts] = useState<NoticeData[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const recentPostsFromStorage = localStorage.getItem('recentPosts');
      recentPostsFromStorage
        ? setRecentPosts(JSON.parse(recentPostsFromStorage))
        : setRecentPosts([]);
    } else {
      setRecentPosts([]);
    }
  }, []);

  useEffect(() => {
    if (notice_id && noticeData && typeof window !== 'undefined') {
      const saveRecentPost = (postId: string) => {
        setRecentPosts((prevPosts: NoticeData[]) => {
          const shopData = noticeData.data.item.shop.item;
          // noticeData를 직접 사용하지 않고 필요한 데이터만 newPost 객체로 추출하여 의존성 최소화
          const newPost: NoticeData = {
            item: {
              id: notice_id,
              hourlyPay: noticeData.data.item.hourlyPay,
              startsAt: noticeData.data.item.startsAt,
              workhour: noticeData.data.item.workhour,
              description: noticeData.data.item.description,
              closed: noticeData.data.item.closed,
              shop: {
                item: {
                  id: shopData.id,
                  name: shopData.name,
                  category: shopData.category,
                  address1: shopData.address1,
                  address2: shopData.address2,
                  description: shopData.description,
                  imageUrl: shopData.imageUrl,
                  originalHourlyPay: shopData.originalHourlyPay,
                },
                href: noticeData.data.item.shop.href,
              },
            },
            links: [],
          };

          const updatedPosts = [
            newPost,
            ...(prevPosts || []).filter(
              (post: NoticeData) => post.item.id !== notice_id,
            ),
          ].slice(0, 6);

          localStorage.setItem('recentPosts', JSON.stringify(updatedPosts));
          return updatedPosts;
        });
      };

      saveRecentPost(notice_id);
    }
  }, [notice_id, noticeData]);

  return (
    <S.RecentWrap>
      <S.PostContainer>
        {renderSpinner(<PostList items={recentPosts} />, noticeLoading)}
      </S.PostContainer>
    </S.RecentWrap>
  );
};

export default RecentPostsWidget;
