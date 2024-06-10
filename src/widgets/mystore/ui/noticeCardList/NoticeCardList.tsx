import Post from '@/shared/components/PostList/Post/Post';
import * as S from './NoticeCardList.styled';

interface Props {
  noticeList: { item: Notice }[];
  storeName: string;
}

export const NoticeCardList = ({ noticeList, storeName }: Props) => {
  return (
    <S.Layout>
      {noticeList.map(item => {
        return (
          <div>
            <p>closed: {item.item.closed}</p>
            <p>description: {item.item.description}</p>
            <p>hourlyPay: {item.item.hourlyPay}</p>
            <p>id: {item.item.id}</p>
            <p>startsAt: {item.item.startsAt}</p>
            <p>workhour: {item.item.workhour}</p>
          </div>
        );
        // return <Post status={item.item.closed} title={storeName} />;
      })}
    </S.Layout>
  );
};
