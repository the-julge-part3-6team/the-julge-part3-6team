import * as S from './Post.styled';
import Image from 'next/image';
import testImg from '@/assets/test.jpg';
import redClockImg from '@/assets/redclock.svg';
import redLocationImg from '@/assets/redlocation.svg';
import grayClockImg from '@/assets/grayclock.svg';
import grayLocationImg from '@/assets/graylocation.svg';
import arrowUpImg from '@/assets/arrowup.svg';
import { PostContent } from '@/types/post';

const Post = ({
  status,
  title,
  date,
  location,
  price,
  priceChange,
  imgSrc,
}: PostContent) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <>
      <S.PostContainer status={status}>
        <S.PostImageContainer>
          <S.PostImage status={status}>
            <Image
              src={imgSrc || testImg}
              alt="테스트 이미지"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </S.PostImage>
          {status === 'closed' && <S.StatusLabel>마감 완료</S.StatusLabel>}
          {status === 'expired' && <S.StatusLabel>지난 공고</S.StatusLabel>}
        </S.PostImageContainer>
        <S.PostContent>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostInform status={status}>
            <S.PostInformImage>
              {status === 'active' ? (
                <Image src={redClockImg} alt="빨강 시계 아이콘" />
              ) : (
                <Image src={grayClockImg} alt="회색 시계 아이콘" />
              )}
            </S.PostInformImage>
            {date}
          </S.PostInform>
          <S.PostInform status={status}>
            <S.PostInformImage>
              {status === 'active' ? (
                <Image src={redLocationImg} alt="빨강 장소 아이콘" />
              ) : (
                <Image src={grayLocationImg} alt="회색 장소 아이콘" />
              )}
            </S.PostInformImage>
            {location}
          </S.PostInform>
        </S.PostContent>
        <S.PostPriceContainer>
          <S.PostPrice>{formattedPrice}원</S.PostPrice>
          <S.PostPriceChange status={status}>
            기존 시급보다 {priceChange}%
            <S.PostPriceChangeImage>
              <Image src={arrowUpImg} alt="상승 화살표" />
            </S.PostPriceChangeImage>
          </S.PostPriceChange>
        </S.PostPriceContainer>
      </S.PostContainer>
    </>
  );
};

export default Post;
