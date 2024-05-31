import React from 'react';
import * as S from './Badge.styled';

export interface BadgeStyled {
  status: '거절' | '대기중' | '승인 완료';
}

const PrimaryBadge: React.FC<BadgeStyled> = ({ status }) => {
  return <S.Badge $status={status}>{status}</S.Badge>;
};

export default PrimaryBadge;
