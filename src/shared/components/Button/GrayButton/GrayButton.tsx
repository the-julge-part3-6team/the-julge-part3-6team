import React from 'react';
import * as S from './grayButton.styled';

interface Props {
  text: string;
  onClick: () => void;
}

const GrayButton = ({ text, onClick }: Props) => {
  return <S.GrayButton onClick={onClick}>{text}</S.GrayButton>;
};

export default GrayButton;
