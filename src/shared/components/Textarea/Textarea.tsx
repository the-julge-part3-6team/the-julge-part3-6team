import React, { ChangeEvent, useState } from 'react';
import * as S from './Textarea.styled';

interface props {
  id: string;
  name: string;
  placeholder: string;
  label: string;
}

export const Textarea = ({ id, name, placeholder, label }: props) => {
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.TextAreaT
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
      />
    </>
  );
};
