import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './index.styled';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import CustomModal from './component/CustomModal/CustomModal';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import cautionImg from '@/assets/caution.svg';
import checkImg from '@/assets/check.svg';
import { useModal } from '@/shared/store/useModal';
import { useUserQuery } from '@/models/user/useUserData';
import { updateRecentPosts } from './utils/useLocalStorage';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import NoticePostList from './component/NoticePostList/NoticePostList';
import { formatWorkTime } from './utils/useTimeUtils';
import { calculatePriceChange } from './utils/usePriceUtils';
import { useHandleModal } from './utils/useHandleModal';
import { mockNoticeData } from './data/mockNoticeData'; // 목업
import { mockRecentPosts } from './data/mockRecentData'; // 목업

interface NoticeDetailProps {
  noticeId: string;
}

const NoticeDetail = ({ noticeId }: NoticeDetailProps) => {
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
  // const [noticeData, setNoticeData] = useState({}); 실제 API 호출시 사용

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
        // setNoticeData(data); 실제 API 호출시 사용
        // setNoticeData({
        //   id: data.item.id,
        //   hourlyPay: data.item.hourlyPay,
        //   startsAt: data.item.startsAt,
        //   workhour: data.item.workhour,
        //   description: data.item.description,
        //   closed: data.item.closed,
        //   shop: {
        //     id: data.item.shop.item.id,
        //     name: data.item.shop.item.name,
        //     category: data.item.shop.item.category,
        //     address1: data.item.shop.item.address1,
        //     address2: data.item.shop.item.address2,
        //     description: data.item.shop.item.description,
        //     imageUrl: data.item.shop.item.imageUrl,
        //     originalHourlyPay: data.item.shop.item.originalHourlyPay,
        //   },
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

  // userData가 초기에 undefined일 수 있기 때문에 발생하는 에러
  const handleModal = useHandleModal({ userData, setIsApplied });
  // const handleModal = useHandleModal({ userData: userData || undefined, setIsApplied });

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

  const priceChange = calculatePriceChange(
    noticeData.item.shop.item.originalHourlyPay,
    noticeData.item.hourlyPay,
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
                content={formatWorkTime(
                  noticeData.item.startsAt,
                  noticeData.item.workhour,
                )}
              />
              <PostInform
                status="active"
                type="장소"
                content={noticeData.item.shop.item.address1}
              />
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
            <NoticePostList
              noticeList={mockRecentPosts.slice(0, 6)}
              storeName="mockStore"
            />
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
