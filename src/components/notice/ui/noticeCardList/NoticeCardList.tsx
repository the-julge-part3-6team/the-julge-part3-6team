// import Post from '@/shared/components/Post/PostCard/Post';
import PostCard from '@/shared/components/Post/PostCard/PostCard';
import * as S from './NoticeCardList.styled';
import formatWorkTime from '@/shared/utils/formatWorkTime';

interface Props {
  noticeList: { item: Notice }[];
  store: Store;
}

export const NoticeCardList = ({ noticeList, store }: Props) => {
  return (
    <S.Layout>
      {noticeList.map(item => {
        const notice = item.item;
        return (
          <PostCard
            startsAt={notice.startsAt}
            isClosed={notice.closed}
            notice_id={notice.id}
            shop_id={store.id}
            imageUrl={store.imageUrl}
            shopName={store.name}
            duration={formatWorkTime({
              type: 'notice',
              startsAt: notice.startsAt,
              workHour: notice.workhour,
            })}
            address={store.address1}
            defaultHourlyPay={store.originalHourlyPay}
            currentHourlyPay={Number(notice.hourlyPay)}
          />
        );
      })}
    </S.Layout>
  );
};
