import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './index.styled';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import CustomModal from './CustomModal';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import cautionImg from '@/assets/caution.svg';
import checkImg from '@/assets/check.svg';
import { useModal } from '@/shared/store/useModal';
import { useUserQuery } from '@/models/user/useUserData';
import { mockNoticeData } from './data/mockNoticeData';
import { updateRecentPosts } from '@/models/notice/localStorageUtils';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import NoticePostList from './NoticePostList';
import { mockRecentPosts } from './data/mockRecentData'; // 목업

interface NoticeDetailProps {
  noticeId: string;
}

const NoticeDetail: React.FC<NoticeDetailProps> = ({ noticeId }) => {
  useEffect(() => {
    updateRecentPosts(noticeId, 6);
  }, [noticeId]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  } = useUserQuery();
  const { setIsOpen, setIsClose, key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);

  const noticeData = mockNoticeData; // 목업 데이터 사용
  const isNoticeLoading = false; // 데이터 로딩이 완료되었다고 가정

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        if (!shop_id || !notice_id)
          throw new Error('Missing shop_id or notice_id');
        const response = await fetch(`/shops/${shop_id}/notices/${notice_id}`);
        if (!response.ok) throw new Error('Failed to fetch store data');
        const data = await response.json();
        console.log('Fetched store data:', data);
        // setStoreData({
        //   name: data.shop.item.name,
        //   address1: data.shop.item.address1,
        //   originalHourlyPay: data.shop.item.originalHourlyPay,
        //   imageUrl: data.shop.item.imageUrl,
        //   description: data.shop.item.description,
        // });
      } catch (error) {
        console.error('Failed to fetch store data:', error);
      }
    };

    if (shop_id && notice_id) {
      fetchStoreData();
    }
  }, [shop_id, notice_id]);

  console.log(userData);

  const handleModal = {
    applyClick: () => {
      if (!userData?.data.item.phone) {
        setIsOpen('profileAlert');
      } else {
        setIsOpen('applySuccess');
        setIsApplied(true);
      }
    },
    cancelClick: () => setIsOpen('cancelModal'),
    confirmCancel: () => {
      setIsApplied(false);
      setIsClose();
    },
    closeCancelModal: () => setIsClose(),
    confirm: () => {
      setIsClose();
      if (key === 'profileAlert') {
        router.push('/mypage');
      }
    },
  };

  const modalHeader =
    key === 'profileAlert' ? (
      <>
        <Image src={cautionImg} alt="경고 표시" />내 프로필을 먼저 등록해
        주세요.
      </>
    ) : key === 'applySuccess' ? (
      <>
        <Image src={checkImg} alt="체크 표시" />
        신청이 완료되었습니다.
      </>
    ) : null;

  const formatWorkTime = (startsAt: string, workhour: number) => {
    const startDate = new Date(startsAt);
    const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}.${month}.${day}`;
    };

    const formatTime = (date: Date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    return `${formatDate(startDate)} ${formatTime(startDate)}~${formatTime(endDate)} (${workhour}시간)`;
  };

  const calculatePriceChange = (originalPay: number, currentPay: number) => {
    return ((currentPay - originalPay) / originalPay) * 100;
  };

  const priceChange = calculatePriceChange(
    noticeData.item.shop.item.originalHourlyPay,
    noticeData.item.hourlyPay
  );

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.TextWrap>
          <S.SmallText>식당</S.SmallText>
          <S.BigText>{noticeData.item.shop.item.name}</S.BigText>
        </S.TextWrap>

        <S.ContextWrap>
          <S.ImageContainer>
            <img
              src={noticeData.item.shop.item.imageUrl}
              alt={noticeData.item.shop.item.name}
            />
          </S.ImageContainer>

          <S.TextContainer>
            <S.SmallText>시급</S.SmallText>
            <S.PriceWrap>
              <PostPrice
                status="active"
                price={noticeData.item.hourlyPay}
                priceChange={priceChange}
              />
            </S.PriceWrap>
            <S.WidgetWrap>
              <PostInform
                status={noticeData.item.closed ? 'closed' : 'active'}
                type="시간"
                content={formatWorkTime(noticeData.item.startsAt, noticeData.item.workhour)}
              />
              <PostInform status="active" type="장소" content={noticeData.item.shop.item.address1} />
            </S.WidgetWrap>
            <S.DetailText>
              <p>{noticeData.item.description}</p>
            </S.DetailText>
            {isApplied ? (
              <div style={{ width: '346px' }}>
                <CustomButton
                  onClick={handleModal.cancelClick}
                  color="#EA3C12"
                  text="취소하기"
                />
              </div>
            ) : (
              <S.CustomRedButton onClick={handleModal.applyClick}>
                신청하기
              </S.CustomRedButton>
            )}
          </S.TextContainer>
        </S.ContextWrap>

        <S.DescripContainer>
          <S.SmallText isBlack>공고 설명</S.SmallText>
          <p></p>
          <p>{noticeData.item.shop.item.description}</p>
        </S.DescripContainer>

        <S.RecentWrap>
          <S.BigText>최근에 본 공고</S.BigText>
          <S.PostContainer>
            <NoticePostList noticeList={mockRecentPosts} storeName='mockStore' />
          </S.PostContainer>
        </S.RecentWrap>
      </S.PageLayout>
      <Footer />

      <CustomModal
        modalKey={key}
        modalHeader={modalHeader}
        modalFooter={
          <div style={{ width: '80px' }}>
            <CustomButton
              text="확인"
              color="#EA3C12"
              onClick={handleModal.confirm}
            />
          </div>
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
                  onClick={handleModal.closeCancelModal}
                  text="아니오"
                  color="#EA3C12"
                />
              </div>
              <div style={{ width: '80px' }}>
                <RedButton
                  onClick={handleModal.confirmCancel}
                  text="취소하기"
                />
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default NoticeDetail;
