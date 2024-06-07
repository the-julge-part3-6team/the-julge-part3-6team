import React, { ChangeEvent } from 'react';
import * as S from './Textarea.styled';

interface props {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  id,
  name,
  placeholder,
  label,
  value,
  onChange,
}: props) => {
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.TextAreaT
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
