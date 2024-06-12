import React from 'react';
import * as S from './NoticePostList.styled';

interface Notice {
  // 추후 closed 수정
  closed: boolean;
  name: string;
  startsAt: string;
  workhour: string;
  address1: string;
  hourlyPay: number;
  priceChange: string;
  imageUrl: string;
  description: string;
  id: string;
}

interface Props {
  noticeList: { item: Notice }[];
  storeName: string;
}

const NoticePostList: React.FC<Props> = ({ noticeList, storeName }) => {
  return (
    <S.Layout>
      {noticeList.map(({ item }) => (
        <div key={item.id}>
          <p>closed: {item.closed.toString()}</p>
          <p>description: {item.description}</p>
          <p>hourlyPay: {item.hourlyPay}</p>
          <p>id: {item.id}</p>
          <p>startsAt: {item.startsAt}</p>
          <p>workhour: {item.workhour}</p>
        </div>
      ))}
    </S.Layout>
  );
};

export default NoticePostList;
