import React from 'react';
import * as S from './Badge.styled';

export interface BadgeStyled {
  status: 'rejected' | 'pending' | 'accepted' | 'canceled';
}

const config = {
  rejected: '거절',
  pending: '대기중',
  accepted: '승인 완료',
  canceled: '거절 당함',
};

const PrimaryBadge = ({ status }: BadgeStyled) => {
  const changeName = config[status];

  return <S.Badge $status={status}>{changeName}</S.Badge>;
};

export default PrimaryBadge;
