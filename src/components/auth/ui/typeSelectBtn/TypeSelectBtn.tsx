import React from 'react';
import * as S from './TypeSelectBtn.styled';
import Image from 'next/image';
import checkbox from '@/assets/checkbox.svg';
import checkboxDone from '@/assets/checkboxDone.svg';

interface Props {
  typeValidation?: any;
}

export const TypeSelectBtn = ({ typeValidation }: Props) => {
  return (
    <S.SelectContainer>
      <S.RadioInput
        id="employee"
        type="radio"
        name="type"
        value="employee"
        {...typeValidation}
      />
      <S.RadioLabel htmlFor="employee">알바님</S.RadioLabel>
      <S.RadioInput
        id="employer"
        type="radio"
        name="type"
        value="employer"
        {...typeValidation}
      />
      <S.RadioLabel htmlFor="employer">사장님</S.RadioLabel>
    </S.SelectContainer>
  );
};
