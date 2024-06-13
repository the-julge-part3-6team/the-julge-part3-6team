import * as S from './PostList.styled';
import NotFoundPost from '../NotFoundPost/NotFoundPost';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import PostCard from '../PostCard/PostCard';
import { NoticeData } from '@/shared/types/post';

interface Props {
  items?: NoticeData[];
  count: number;
}

const PostList = ({ items, count }: Props) => {
  return (
    <S.PostListContainer>
      {items && items?.length > 0 ? (
        items.slice(0, count).map(item => {
          const {
            id: noticeId,
            hourlyPay,
            startsAt,
            workhour,
            description,
            closed,
            shop,
          } = item.item;

          const {
            id: shopId,
            name,
            address1,
            imageUrl,
            originalHourlyPay,
          } = shop.item;

          const formattedWorkTime = formatWorkTime({
            type: 'notice',
            startsAt,
            workHour: workhour,
          });

          const currentHourlyPay = Number(hourlyPay);

          return (
            <PostCard
              key={noticeId}
              noticeId={noticeId}
              shopId={shopId}
              imageUrl={imageUrl}
              shopName={name}
              duration={formattedWorkTime}
              address={address1}
              defaultHourlyPay={originalHourlyPay}
              currentHourlyPay={currentHourlyPay}
              isClosed={closed}
            />
          );
        })
      ) : (
        <NotFoundPost />
      )}
    </S.PostListContainer>
  );
};

export default PostList;
