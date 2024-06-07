import React, { ChangeEvent } from 'react';
import * as S from './Input.styled';
import Dropdown from '../Dropdown/Dropdown';

interface InputProps {
  id?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (option: string) => void;
  label: string;
  options?: string[];
  register?: any;
  error?: string | undefined;
  value?: string;
  placeholder: string;
  inputType: 'password' | 'text';
  type: 'hourlyWage' | 'basic' | 'dropdown';
}

const inputComponents = {
  hourlyWage: ({
    inputType,
    id,
    onChange,
    value,
  }: Pick<InputProps, 'inputType' | 'id' | 'onChange' | 'value'>) => (
    <S.InputFrame>
      <S.InputField
        type={inputType}
        placeholder="입력"
        id={id}
        value={value}
        onChange={onChange}
      />
      <S.UnitLabel>원</S.UnitLabel>
    </S.InputFrame>
  ),

  basic: ({
    placeholder,
    register,
    inputType,
    onChange,
    id,
    value,
  }: Pick<
    InputProps,
    'placeholder' | 'register' | 'inputType' | 'onChange' | 'id' | 'value'
  >) => (
    <S.InputFrame>
      <S.InputField
        id={id}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...register}
      />
    </S.InputFrame>
  ),

  dropdown: ({
    options,
    onClick,
    value,
  }: {
    options?: string[];
    value: string;
    onClick?: (option: string) => void;
  }) => <Dropdown options={options || []} value={value} onClick={onClick} />,
};

const Input = ({
  id,
  onChange,
  label,
  register,
  error,
  placeholder,
  onClick,
  value,
  type,
  inputType,
  options = [],
}: InputProps) => {
  const InputComponent = inputComponents[type];

  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      {InputComponent && (
        <InputComponent
          placeholder={placeholder}
          register={register}
          options={options}
          inputType={inputType}
          id={id || ''}
          onChange={onChange}
          onClick={onClick}
          value={value || ''}
        />
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
