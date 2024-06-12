import averageHourlyPay from '@/shared/utils/averageHourlyPay';
import * as S from './PostPriceBadge.styled';

interface Props {
  defaultHourlyPay?: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

const PostPriceBadge = ({
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) => {
  if (!defaultHourlyPay) return;

  const determineArrowDirection = () => {
    if (defaultHourlyPay <= currentHourlyPay) {
      return '↑';
    }
    return '↓';
  };

  const averageChange = averageHourlyPay({
    defaultHourlyPay,
    currentHourlyPay,
  });

  return (
    <S.PostPriceChange isClosed={isClosed}>
      기존 시급보다 {averageChange}% {determineArrowDirection()}
    </S.PostPriceChange>
  );
};

export default PostPriceBadge;
