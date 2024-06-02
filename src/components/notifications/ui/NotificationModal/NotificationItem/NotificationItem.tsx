import React from 'react';
import * as S from './NotificationItem.styled';
import { Notifications } from '@/types/notification';

const NotificationItem = ({ title, status, timeAgo, date }: Notifications) => {
  let statusText = '';
  status === 'approved' ? (statusText = '승인') : (statusText = '거절');

  return (
    <S.NotificationItemContainer>
      <S.Dot status={status} />
      <S.NotificationItemContent>
        {title}({date}) 공고 지원이{' '}
        <S.NotificationItemStatusText status={status}>
          {statusText}
        </S.NotificationItemStatusText>
        되었어요.
      </S.NotificationItemContent>
      <S.NotificationItemTime>{timeAgo}</S.NotificationItemTime>
    </S.NotificationItemContainer>
  );
};

export default NotificationItem;
