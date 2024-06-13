import * as S from './PostCard.styled';
import PostImage from '../PostImage/PostImage';
import PostInform from '../PostInform/PostInform';
import PostPrice from '../PostPrice/PostPrice';
import Link from 'next/link';

interface Props {
  noticeId: string;
  shopId?: string;
  imageUrl?: string;
  shopName?: string;
  duration: string;
  address: string;
  defaultHourlyPay?: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

const PostCard = ({
  noticeId,
  shopId,
  imageUrl,
  shopName,
  duration,
  address,
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) => {
  return (
    // <Link href={`/noticedetail?shopId=${shopId}&noticeId=${noticeId}`}>
    <S.PostContainer isClosed={isClosed}>
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
    // </Link>
  );
};

export default PostCard;
