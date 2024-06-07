import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostImage from '@/shared/components/PostList/PostImage/PostImage';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import Post from '@/shared/components/PostList/Post/Post';
import storeImg from '@/assets/store.png';


const NoticeDetail = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState({ limit: 6, hourlyPayGte: 100000, sort: 'time' });

  useEffect(() => {
    setLoading(true);
    fetch('https://bootcamp-api.codeit.kr/api/5-6/the-julge/notices')
      .then(response => response.json())
      .then(data => {
        setPosts(data.items);
        setLoading(false);
        applyFilter(data.items, filter);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const applyFilter = (posts, filter) => {
    let filtered = posts;

    if (filter.hourlyPayGte) {
      filtered = filtered.filter(post => post.item.hourlyPay >= filter.hourlyPayGte);
    }

    if (filter.sort === 'time') {
      filtered = filtered.sort((a, b) => new Date(b.item.startsAt) - new Date(a.item.startsAt));
    }

    filtered = filtered.slice(0, filter.limit);
    setFilteredPosts(filtered);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilter(posts, newFilter);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <PostInform status="active" type="시간" content="2023.01.02 15:00~18:00 (3시간)" />
              <PostInform status="active" type="장소" content="서울시 송파구" />
            </S.WidgetWrap>
            <S.DetailText>
              <p>알바하기 편한 너구리네 라면집!</p>
              <p>라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.</p>
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
            {filteredPosts.map((post, index) => (
              <Post key={index} {...post.item} />
            ))}
          </S.PostContainer>
        </S.RecentWrap>
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetail;
