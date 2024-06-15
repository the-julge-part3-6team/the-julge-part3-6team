import React from 'react';
import * as S from './TableBtn.styled';

interface Props {
  text: string;
  color: string;
  onClick: any;
}

export const TableBtn = ({ text, color, onClick }: Props) => {
  return (
    <S.TableBtn color={color} onClick={onClick}>
      {text}
    </S.TableBtn>
  );
};
