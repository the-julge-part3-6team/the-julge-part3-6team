import React from 'react';
import * as S from './Input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...props }) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputFrame>
        <S.InputField {...props} />
      </S.InputFrame>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
