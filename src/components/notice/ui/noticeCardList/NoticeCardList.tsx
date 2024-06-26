import * as React from 'react';
import PostCard from '@/shared/components/Post/PostCard/PostCard';
import * as S from './NoticeCardList.styled';
import formatWorkTime from '@/shared/utils/formatWorkTime';

interface Props {
  noticeList: { data: { items: { item: Notice }[] } }[];
  store: Store;
}

export const NoticeCardList = ({ noticeList, store }: Props) => {
  return (
    <S.Layout>
      {noticeList.map(dataItem =>
        dataItem.data.items.map(item => {
          const notice: Notice = item.item; // item의 타입을 Notice로 지정
          return (
            <PostCard
              key={notice.id} // 각각의 공고에 고유한 key 추가
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
              currentHourlyPay={parseFloat(notice.hourlyPay)} // 필요에 따라 parseFloat 사용
            />
          );
        }),
      )}
    </S.Layout>
  );
};
