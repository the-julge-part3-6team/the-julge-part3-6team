import React from 'react';
import * as S from './Input.styled';
import Dropdown from '../Dropdown/Dropdown';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
  label: string;
  type: "email" | "password" | "confirmPassword" | "hourlyWage" | "dropdown"; 
  options?: string[];
}

const Input = ({ label, type, options = [] }: InputProps) => {
  const { register, formState: { errors } } = useFormContext();

  const renderInput = () => {
    if (type === 'hourlyWage') {
      return (
        <>
          <S.InputField
            {...register('hourlyWage', { required: true })}
            type="number"
            placeholder="입력"
          />
          <S.UnitLabel>원</S.UnitLabel>
        </>
      );
    }
    if (type === 'dropdown') {
      return <Dropdown options={options} />;
    }

    const placeholderText =
      type === 'confirmPassword' ? '비밀번호 확인' : '입력';
    return (
      <S.InputField
        {...register(type, { required: true })}
        type={type === 'confirmPassword' ? 'password' : type}
        placeholder={placeholderText}
      />
    );
  };

  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputFrame hasError={!!errors[type]}>
        {renderInput()}
      </S.InputFrame>
      {errors[type] && <S.ErrorMessage>{errors[type].message}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
