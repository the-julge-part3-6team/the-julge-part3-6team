import React from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostImage from '@/shared/components/PostList/PostImage/PostImage';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import Post from '@/shared/components/PostList/Post/Post';
import storeImg from '@/assets/store.png';

const recentPosts = [
  {
    status: 'closed',
    title: '수리 에스프레소 샵',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 송파구',
    price: 10000,
    priceChange: 30,
    imgSrc: storeImg,
  },
  {
    status: 'active',
    title: '별빛카페',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 마포구',
    price: 9900,
    priceChange: 12,
    imgSrc: storeImg,
  },
  {
    status: 'active',
    title: '커피바다',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 광진구',
    price: 11000,
    priceChange: 100,
    imgSrc: storeImg,
  },
  {
    status: 'active',
    title: '해피버거',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 도봉구',
    price: 9500,
    priceChange: 12,
    imgSrc: storeImg,
  },
  {
    status: 'expired',
    title: '정원식당',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 동대문구',
    price: 16000,
    priceChange: 12,
    imgSrc: storeImg,
  },
  {
    status: 'expired',
    title: '우리동네카페',
    date: '2023.01.02 15:00~18:00 (3시간)',
    location: '서울시 강남구',
    price: 9500,
    priceChange: 100,
    imgSrc: storeImg,
  },
];

const NoticeDetailPage = () => {
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
            <S.CustomRedButton>신청하기</S.CustomRedButton>
          </S.TextContainer>
        </S.ContextWrap>

        <S.DescripContainer>
          <S.SmallText isBlack>공고 설명</S.SmallText>
          <p>기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요.</p>
          <p>급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.</p>
        </S.DescripContainer>

        <S.RecentWrap>
          <S.BigText>최근에 본 공고</S.BigText>
          <S.PostContainer>
            {recentPosts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </S.PostContainer>
        </S.RecentWrap>
        
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetailPage;
