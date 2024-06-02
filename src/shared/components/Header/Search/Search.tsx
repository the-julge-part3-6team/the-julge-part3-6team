import React from 'react';
import * as S from './Search.styled';

interface prop {
  placeholder: string;
}

const Search = ({ placeholder }: prop) => {
  return (
    <S.InputContainer>
      <S.Input placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default Search;
