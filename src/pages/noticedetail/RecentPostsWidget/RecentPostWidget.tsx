import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import * as S from './RecentPostsWidget.styled';
import { useSearchParams } from 'next/navigation';
import { useUserQuery } from '@/models/user/useUserData';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import { NoticeData } from '@/shared/types/post';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import PostList from '@/shared/components/Post/PostList/PostList';
import CustomModal from '../component/CustomModal/CustomModal';
import checkImg from '@/assets/check.svg';
import cautionImg from '@/assets/caution.svg';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { useHandleModal, HandleModalType } from '../utils/useHandleModal';

interface RecentPostsWidgetProps {
  isOpen: boolean;
  key: string;
}

const RecentPostsWidget: React.FC<RecentPostsWidgetProps> = ({
  isOpen,
  key,
}) => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  } = useUserQuery();
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

  // useHandleModal을 호출하여 handleModal 객체를 가져옴
  const { applyClick, cancelClick, confirmCancel, closeCancelModal, confirm } =
    useHandleModal({
      setIsApplied: (value: boolean) => {}, // 실제 setIsApplied 함수로 대체
    });

  const modalHeader =
    key === 'profileAlert' ? (
      <>
        <Image src={cautionImg} alt="경고 표시" />내 프로필을 먼저 등록해주세요.
      </>
    ) : key === 'applySuccess' ? (
      <>
        <Image src={checkImg} alt="체크 표시" />
        신청이 완료되었습니다.
      </>
    ) : null;

  return (
    <S.RecentWrap>
      <S.BigText>최근에 본 공고</S.BigText>
      <S.PostContainer>
        {renderSpinner(<PostList items={recentPosts} />, noticeLoading)}
      </S.PostContainer>
      <CustomModal
        modalKey={key}
        modalHeader={modalHeader}
        modalFooter={
          key === 'profileAlert' ? (
            <div style={{ width: '80px' }}>
              <CustomButton text="확인" color="#EA3C12" onClick={confirm} />
            </div>
          ) : (
            <div style={{ width: '80px' }}>
              <CustomButton text="확인" color="#EA3C12" onClick={confirm} />
            </div>
          )
        }
      />
      {isOpen && key === 'cancelModal' && (
        <CustomModal
          modalKey="cancelModal"
          modalHeader={
            <>
              <Image src={checkImg} alt="체크 표시" />
              <p>신청을 취소하시겠어요?</p>
            </>
          }
          modalFooter={
            <>
              <div style={{ width: '80px' }}>
                <CustomButton
                  onClick={closeCancelModal}
                  text="아니오"
                  color="#EA3C12"
                />
              </div>
              <div style={{ width: '80px' }}>
                <RedButton onClick={confirmCancel} text="취소하기" />
              </div>
            </>
          }
        />
      )}
    </S.RecentWrap>
  );
};

export default RecentPostsWidget;
