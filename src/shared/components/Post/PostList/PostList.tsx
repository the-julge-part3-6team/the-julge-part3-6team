import * as S from './PostList.styled';
import NotFoundPost from '../NotFoundPost/NotFoundPost';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import PostCard from '../PostCard/PostCard';
import { NoticeData } from '@/shared/types/post';

interface Props {
  items?: NoticeData[];
}

const PostList = ({ items }: Props) => {
  return (
    <S.PostListContainer>
      {items && items?.length > 0 ? (
        items.map(item => {
          const {
            id: notice_id,
            hourlyPay,
            startsAt,
            workhour,
            description,
            closed,
            shop,
          } = item.item;

          const {
            id: shop_id,
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
              key={notice_id}
              notice_id={notice_id}
              shop_id={shop_id}
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
