import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './index.styled';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostImage from '@/shared/components/PostList/PostImage/PostImage';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import Post from '@/shared/components/PostList/Post/Post';
import { useUserQuery } from '@/components/user/model/useUserData';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
// import { recentPosts } from './data/recentPosts'; 목업 데이터
import storeImg from '@/assets/store.png';
import cautionImg from '@/assets/caution.svg';
import checkImg from '@/assets/check.svg';

const NoticeDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { data, isError, isLoading } = useUserQuery();
  const { setIsOpen, setIsClose, key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyClick = () => {
    if (!data?.data.item.phone) {
      setIsOpen('profileAlert');
    } else {
      setIsOpen('applySuccess');
      setIsApplied(true);
    }
  };

  const handleCancelClick = () => {
    setIsOpen('cancelModal');
  };

  const handleConfirmCancel = () => {
    setIsApplied(false);
    setIsClose();
  };

  const handleCloseCancelModal = () => {
    setIsClose();
  };

  const onClickConfirm = () => {
    setIsClose();
    if (key === 'profileAlert') {
      router.push('/mypage');
    }
  };

  const modalHeader =
    key === 'profileAlert' ? (
      <>
        <Image src={cautionImg} alt="경고 표시" />내 프로필을 먼저 등록해 주세요.
      </>
    ) : key === 'applySuccess' ? (
      <>
        <Image src={checkImg} alt="체크 표시" />
        신청이 완료되었습니다.
      </>
    ) : null;

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.TextWrap>
          <S.SmallText>식당</S.SmallText>
          <S.BigText>도토리식당</S.BigText>
        </S.TextWrap>

        <S.ContextWrap>
          <S.ImageContainer>
            <PostImage status="active" imgSrc={storeImg} />
          </S.ImageContainer>

          <S.TextContainer>
            <S.SmallText>시급</S.SmallText>
            <S.PriceWrap>
              <PostPrice status="active" price={15000} priceChange={50} />
            </S.PriceWrap>
            <S.WidgetWrap>
              <PostInform
                status="active"
                type="시간"
                content="2023.01.02 15:00~18:00 (3시간)"
              />
              <PostInform status="active" type="장소" content="서울시 송파구" />
            </S.WidgetWrap>
            <S.DetailText>
              <p>알바하기 편한 너구리네 라면집!</p>
              <p>
                라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.
              </p>
            </S.DetailText>
            {isApplied ? (
              <div style={{ width: '346px' }}>
                <CustomButton
                  onClick={handleCancelClick}
                  color="#EA3C12"
                  text="취소하기"
                />
              </div>
            ) : (
              <S.CustomRedButton onClick={handleApplyClick}>
                신청하기
              </S.CustomRedButton>
            )}
          </S.TextContainer>
        </S.ContextWrap>

        <S.DescripContainer>
          <S.SmallText isBlack>공고 설명</S.SmallText>
          <p>
            기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가
            비네요.
          </p>
          <p>급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.</p>
        </S.DescripContainer>

        <S.RecentWrap>
          <S.BigText>최근에 본 공고</S.BigText>
          <S.PostContainer>
            {/* {recentPosts.map((post, index) => (
              <Post key={index} {...post} />
            ))} */}
          </S.PostContainer>
        </S.RecentWrap>
      </S.PageLayout>
      <Footer />

      <Modal
        modalKey={key}
        modalHeader={modalHeader}
        modalFooter={
          <div style={{ width: '80px' }}>
            <CustomButton
              text="확인"
              color="#EA3C12"
              onClick={onClickConfirm}
            />
          </div>
        }
      />

      {isOpen && key === 'cancelModal' && (
        <Modal
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
                  onClick={handleCloseCancelModal}
                  text="아니오"
                  color="#EA3C12"
                />
              </div>
              <div style={{ width: '80px' }}>
                <RedButton 
                  onClick={handleConfirmCancel} 
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
