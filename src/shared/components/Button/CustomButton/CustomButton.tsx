import React from 'react';
import * as S from './customButton.styled';

interface Props {
  text: string;
  color: string;
  onClick: () => void;
}

const CustomButton = ({ text, color, onClick }: Props) => {
  return (
    <S.CustomButton $color={color} onClick={onClick}>
      {text}
    </S.CustomButton>
  );
};

export default CustomButton;
