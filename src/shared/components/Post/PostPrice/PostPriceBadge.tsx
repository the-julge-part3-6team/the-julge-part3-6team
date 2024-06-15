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
      return '⬆';
    }
    return '⬇';
  };

  const averageChange = averageHourlyPay({
    defaultHourlyPay,
    currentHourlyPay,
  });

  const determineColor = averageChange >= 50 ? 'red40' : 'red30';

  return (
    <S.PostPriceChange isClosed={isClosed} determineColor={determineColor}>
      기존 시급보다 {averageChange}%&nbsp;
      <S.PostPriceArrow>{determineArrowDirection()}</S.PostPriceArrow>
    </S.PostPriceChange>
  );
};

export default PostPriceBadge;
