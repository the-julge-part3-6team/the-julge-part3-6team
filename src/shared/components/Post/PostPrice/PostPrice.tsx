import * as S from './PostPrice.styled';
import Image from 'next/image';
import arrowUpImg from '@/assets/arrowup.svg';

interface PostPriceProps {
  status: 'closed' | 'expired' | 'active';
  price: number;
  priceChange: number;
}

const PostPrice = ({ status, price, priceChange }: PostPriceProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <S.PostPriceContainer>
      <S.PostPrice>{formattedPrice}원</S.PostPrice>
      <S.PostPriceChange status={status}>
        기존 시급보다 {priceChange}%
        <S.PostPriceChangeImage>
          <Image src={arrowUpImg} alt="상승 화살표" />
        </S.PostPriceChangeImage>
      </S.PostPriceChange>
    </S.PostPriceContainer>
  );
};

export default PostPrice;
