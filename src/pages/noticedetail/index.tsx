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
import { recentPosts } from './data/recentPosts';
import storeImg from '@/assets/store.png';
import testImg from '@/assets/caution.svg';

const NoticeDetail = () => {
  const router = useRouter();
  // 가게 아이디 가져오기
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { data, isError, isLoading } = useUserQuery();
  const { setIsOpen, setIsClose, key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);

  // 프로필 등록 여부 확인
  const handleApplyClick = () => {
    if (!data?.data.item.phone) {
      setIsOpen('profileAlert');
    } else {
      setIsOpen('applySuccess');
      setIsApplied(true);
    }
  };

  // 신청 여부 확인
  const handleCancelClick = () => {
    if (confirm("신청을 취소하시겠어요?")) {
      setIsApplied(false);
    }
  };

  // 프로필 미등록일 경우 등록 페이지로 넘어가기
  const onClickConfirm = () => {
    setIsClose();
    if (key === 'profileAlert') {
      router.push('/mypage');
    }
  };

  // 모달 헤더 조건부 - 경고 이미지 사라지는 이슈 확인하기
  const modalHeader =
    key === 'profileAlert' ? (
      <>
        <Image src={testImg} alt="경고 표시" />내 프로필을 먼저 등록해 주세요.
      </>
    ) : (
      '신청이 완료되었습니다.'
    );

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
    </>
  );
};

export default NoticeDetail;
