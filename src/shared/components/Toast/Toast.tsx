import React from 'react';
import * as S from './Toast.styled';
import { useToast } from '@/shared/store/useToast';

interface Props {
  text: string;
}

const Toast = ({ text }: Props) => {
  const { isToast, key } = useToast();
  const isSelected = key === text;
  return <>{isToast && isSelected && <S.Toast>{text}</S.Toast>}</>;
};

export default Toast;
