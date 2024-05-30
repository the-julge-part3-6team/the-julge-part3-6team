import React from 'react';
import * as S from './redButton.styled';

interface Props {
  text: string;
}

const PrimaryButton = ({ text }: Props) => {
  return <S.RedButton>{text}</S.RedButton>;
};

export default PrimaryButton;
