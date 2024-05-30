import React from 'react';
import * as S from './grayButton.styled';

interface Props {
  text: string;
}

const GrayButton = ({ text }: Props) => {
  return <S.GrayButton>{text}</S.GrayButton>;
};

export default GrayButton;
