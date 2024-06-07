import React from 'react';
import * as S from './GrayButton.styled';

interface Props {
  text: string;
  onClick: () => void;
}

const GrayButton = ({ text, onClick }: Props) => {
  return <S.GrayButton onClick={onClick}>{text}</S.GrayButton>;
};

export default GrayButton;
