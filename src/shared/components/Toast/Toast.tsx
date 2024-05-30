import React, { useEffect, useState } from 'react';
import * as S from './toast.styled';

interface Props {
  text: string;
}

const Toast = ({ text }: Props) => {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    setIsToast(true);

    setTimeout(() => {
      setIsToast(false);
    }, 3000);
  }, []);

  return <S.Toast>{text}</S.Toast>;
};

export default Toast;
