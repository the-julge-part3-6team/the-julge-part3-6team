import React from 'react';
import * as S from './TableBtn.styled';

interface Props {
  text: string;
}

export const TableBtn = ({ text }: Props) => {
  return <S.TableBtn>{text}</S.TableBtn>;
};
