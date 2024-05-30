import React from 'react';
import * as S from './customButton.styled';

interface Props {
  text: string;
  color: string;
}

const CustomButton = ({ text, color }: Props) => {
  return <S.CustomButton $color={color}>{text}</S.CustomButton>;
};

export default CustomButton;
