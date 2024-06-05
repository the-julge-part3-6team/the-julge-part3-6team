import React, { ChangeEvent } from 'react';
import * as S from './Input.styled';
import Dropdown from '../Dropdown/Dropdown';

interface InputProps {
  id?: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  options?: string[];
  register?: any;
  error?: string | undefined;
  placeholder: string;
  inputType: 'password' | 'text';
  type: 'hourlyWage' | 'basic' | 'dropdown';
}

const inputComponents = {
  hourlyWage: ({
    inputType,
    id,
    onChange,
  }: Pick<InputProps, 'inputType' | 'id' | 'onChange'>) => (
    <S.InputFrame>
      <S.InputField
        type={inputType}
        placeholder="입력"
        id={id}
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
  }: Pick<
    InputProps,
    'placeholder' | 'register' | 'inputType' | 'onChange' | 'id'
  >) => (
    <S.InputFrame>
      <S.InputField
        id={id}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        {...register}
      />
    </S.InputFrame>
  ),

  dropdown: ({ options }: { options?: string[] }) => (
    <Dropdown options={options || []} />
  ),
};

const Input = ({
  id,
  onChange,
  label,
  register,
  error,
  placeholder,
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
        />
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
