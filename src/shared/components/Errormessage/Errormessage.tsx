import React from 'react';
import * as S from '../Input/Input.styled';

interface ErrorMessageProps {
  message: string | null | undefined;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return message ? <S.ErrorMessage>{message}</S.ErrorMessage> : null;
};

export default ErrorMessage;
