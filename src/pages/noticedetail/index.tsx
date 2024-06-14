import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './index.styled';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostInform from '@/shared/components/Post/PostInform/PostInform';
import CustomModal from './component/CustomModal/CustomModal';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import cautionImg from '@/assets/caution.svg';
import checkImg from '@/assets/check.svg';
import { useModal } from '@/shared/store/useModal';
import { useUserQuery } from '@/models/user/useUserData';
import { useRecentPosts } from './utils/useRecentPosts';
import PostPrice from '@/shared/components/Post/PostPrice/PostPrice';
import NoticePostList from './component/NoticePostList/NoticePostList';
import { formatWorkTime } from './utils/useTimeUtils';
import { calculatePriceChange } from './utils/usePriceUtils';
import { useHandleModal } from './utils/useHandleModal';
import { useGetNoticeDetail } from './utils/useGetNoticeDetail'; // 위젯으로 이동

interface NoticeDetailProps {
  noticeId: string;
}

const NoticeDetail = ({ noticeId }: NoticeDetailProps) => {
  useEffect(() => {
    useRecentPosts(noticeId, 6);
  }, [noticeId]);

  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  } = useUserQuery();
  const { data: noticeData, isError: noticeError, isLoading: noticeLoading} = useGetNoticeDetail(shop_id || '', notice_id || '');
  const { setIsOpen, key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false); // Modal이랑 같이 분리
  const [recentPosts, setRecentPosts] = useState([]);

  // userData 가져와서 데이터 대조하는 로직 넣기
// userData가 초기에 undefined일 수 있기 때문에 발생하는 에러
const handleModal = useHandleModal({ userData, setIsApplied });
// const handleModal = useHandleModal({ userData: userData || undefined, setIsApplied });  const handleModal = useHandleModal({ userData, setIsApplied });

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

  // postcard에 쓰이기 때문에 위젯으로 빠진다
  // const priceChange = calculatePriceChange(
  //   noticeData?.item.shop.item.originalHourlyPay,
  //   noticeData?.item.hourlyPay,
  // );

  return (
    <>
      <Header />
      <S.PageLayout>
        {/* 페이지로 빠짐 */}
        <S.TextWrap>
          <S.SmallText>식당</S.SmallText>
          <S.BigText>{noticeData?.data.item.shop.item.name}</S.BigText>
        </S.TextWrap>

        <S.ContextWrap>
          <S.ImageContainer>
            <img
              src={noticeData?.data.item.shop.item.imageUrl}
              alt={noticeData?.data.item.shop.item.name}
            />
          </S.ImageContainer>

          <S.TextContainer>
            <S.SmallText>시급</S.SmallText>
            <S.PriceWrap>
              <PostPrice
                isClosed={false}
                defaultHourlyPay={noticeData?.data.item.hourlyPay}
                currentHourlyPay={noticeData?.data.item.shop.item.originalHourlyPay}
              />
            </S.PriceWrap>
            <S.WidgetWrap>
              <PostInform
                isClosed={false}
                type="시간"
                content={formatWorkTime(
                  noticeData?.data.item.startsAt,
                  noticeData?.data.item.workhour,
                )}
              />
              <PostInform
                isClosed={false}
                type="장소"
                content={noticeData?.data.item.shop.item.address1}
              />
            </S.WidgetWrap>
            <S.DetailText>
              <p>{noticeData?.data.item.shop.item.description}</p>
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

        {/* 공고 설명 => 컴포넌트  */}
        <S.DescripContainer>
          <S.SmallText isBlack>공고 설명</S.SmallText>
          <p></p>
          <p>{noticeData?.data.item.description}</p>
        </S.DescripContainer>

        <S.RecentWrap>
          <S.BigText>최근에 본 공고</S.BigText>
          <S.PostContainer>
            <NoticePostList
              noticeList={recentPosts.slice(0, 6)}
              storeName="Store"
            />
          </S.PostContainer>
        </S.RecentWrap>
      </S.PageLayout>
      <Footer />

      <CustomModal
        modalKey={key}
        modalHeader={
        <>
          <Image src={cautionImg} alt="경고 표시" />
          <p>신청을 취소하시겠어요?</p>
        </>
      }
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
