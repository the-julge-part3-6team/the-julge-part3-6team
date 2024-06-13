import * as S from './PostCard.styled';
import PostImage from '../PostImage/PostImage';
import PostInform from '../PostInform/PostInform';
import PostPrice from '../PostPrice/PostPrice';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
}

const PostCard = ({
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

  return (
    <S.PostContainer
      isClosed={isClosed}
      onClick={() =>
        router.push(`/noticedetail?shop_id=${shop_id}&notice_id=${notice_id}`)
      }
    >
      <PostImage isClosed={isClosed} imgSrc={imageUrl} />
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
