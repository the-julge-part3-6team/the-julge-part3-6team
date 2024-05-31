import React from 'react';
import * as S from './RedButton.styled';

interface Props {
  text: string;
  onClick: () => void;
}

const PrimaryButton = ({ text, onClick }: Props) => {
  return <S.RedButton onClick={onClick}>{text}</S.RedButton>;
};

export default PrimaryButton;
