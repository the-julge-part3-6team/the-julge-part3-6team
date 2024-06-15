import * as S from './PostCard.styled';
import PostImage from '../PostImage/PostImage';
import PostInform from '../PostInform/PostInform';
import PostPrice from '../PostPrice/PostPrice';
import { useRouter } from 'next/router';
import { NOTICE } from '@/constant/path';
import { useUserData } from '@/shared/store/useUserData';

interface Props {
  notice_id: string;
  shop_id?: string;
  imageUrl?: string;
  shopName?: string;
  duration: string;
  address: string;
  defaultHourlyPay?: number;
  currentHourlyPay: number;
  isClosed: boolean;
  startsAt: string;
}

const PostCard = ({
  startsAt,
  notice_id,
  shop_id,
  imageUrl,
  shopName,
  duration,
  address,
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) => {
  const router = useRouter();
  const { type } = useUserData();
  const now = new Date();

  const validIsExpired = (startsAt: string, now: Date) => {
    const isExpired = now > new Date(startsAt);
    return isExpired;
  };

  const handleRouterByUserType = (type: 'employer' | 'employee' | '') => {
    if (type === 'employer') {
      router.push(
        `${NOTICE.DETAIL_CEO}?shop_id=${shop_id}&notice_id=${notice_id}`,
      );
    } else if (type === 'employee' || type === '') {
      router.push(`${NOTICE.DETAIL}?shop_id=${shop_id}&notice_id=${notice_id}`);
    }
  };

  return (
    <S.PostContainer
      isClosed={isClosed}
      onClick={() => handleRouterByUserType(type)}
    >
      <PostImage
        isClosed={isClosed}
        imgSrc={imageUrl}
        isExpired={validIsExpired(startsAt, now)}
      />
      <S.PostContent>
        <S.PostTitle>{shopName}</S.PostTitle>
        <PostInform isClosed={isClosed} type="시간" content={duration} />
        <PostInform isClosed={isClosed} type="장소" content={address} />
      </S.PostContent>
      <PostPrice
        isClosed={isClosed}
        defaultHourlyPay={defaultHourlyPay || undefined}
        currentHourlyPay={currentHourlyPay}
      />
    </S.PostContainer>
  );
};

export default PostCard;
