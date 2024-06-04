import React from 'react';
import * as S from './Input.styled';
import Dropdown from '../Dropdown/Dropdown';

interface InputProps {
  label: string;
  options?: string[];
  register?: any;
  error?: string | undefined;
  placeholder: string;
  inputType: 'password' | 'text';
  type: 'hourlyWage' | 'basic' | 'dropdown';
}

const inputComponents = {
  hourlyWage: ({ inputType }: { inputType: string }) => (
    <S.InputFrame>
      <S.InputField type={inputType} placeholder="입력" />
      <S.UnitLabel>원</S.UnitLabel>
    </S.InputFrame>
  ),

  basic: ({
    placeholder,
    register,
    inputType,
  }: {
    placeholder: string;
    register?: any;
    inputType: string;
  }) => (
    <S.InputFrame>
      <S.InputField type={inputType} placeholder={placeholder} {...register} />
    </S.InputFrame>
  ),

  dropdown: ({ options }: { options?: string[] }) => (
    <Dropdown options={options || []} />
  ),
};

const Input: React.FC<InputProps> = ({
  label,
  register,
  error,
  placeholder,
  type,
  inputType,
  options = [],
}) => {
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
        />
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
