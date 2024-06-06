import React from 'react';
import * as S from './FilterButton.styled';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';

interface Props {
  resetFilters: () => void;
  applyFilters: () => void;
}

const FilterButton = ({ resetFilters, applyFilters }: Props) => {
  return (
    <S.ButtonContainer>
      <S.ResetButton>
        <CustomButton text="초기화" color="#EA3C12" onClick={resetFilters} />
      </S.ResetButton>
      <S.ApplyButton>
        <RedButton text="적용하기" onClick={applyFilters} />
      </S.ApplyButton>
    </S.ButtonContainer>
  );
};

export default FilterButton;
