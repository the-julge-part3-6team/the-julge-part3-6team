import * as S from './PostPrice.styled';
import PostPriceBadge from './PostPriceBadge';

interface Props {
  isClosed: boolean;
  defaultHourlyPay?: number;
  currentHourlyPay: number;
}

const PostPrice = ({ isClosed, defaultHourlyPay, currentHourlyPay }: Props) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    minimumFractionDigits: 0,
  }).format(currentHourlyPay);

  return (
    <S.PostPriceContainer>
      <S.PostPrice>{formattedPrice}원</S.PostPrice>
      <PostPriceBadge
        defaultHourlyPay={defaultHourlyPay}
        currentHourlyPay={currentHourlyPay}
        isClosed={isClosed}
      />
    </S.PostPriceContainer>
  );
};

export default PostPrice;
