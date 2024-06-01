import React, { useState } from 'react';
import * as S from './Input.styled';
import Dropdown from '../Dropdown/Dropdown';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, type, ...props }) => {
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordLength = (password: string): boolean => {
    return password.length >= 8;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    handleInputChange(event);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setConfirmPassword(value);
    handleInputChange(event);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;
    if (value === '') {
      setError(null);
      return;
    }
    
    if (type === 'email') {
      if (!validateEmail(value)) {
        setError('유효한 이메일 주소를 입력해 주세요.');
      } else {
        setError(null);
      }
    } else if (type === 'password') {
      if (!validatePasswordLength(value)) {
        setError('8자 이상 입력해 주세요.');
      } else {
        setError(null);
      }
    } else if (type === 'confirmPassword') {
      if (value !== password) {
        setError('비밀번호가 일치하지 않습니다.');
      } else {
        setError(null);
      }
    }
  };

  const renderInput = () => {
    if (type === 'hourlyWage') {
      return (
        <>
          <S.InputField
            {...props}
            type="number"
            onChange={handleInputChange as React.ChangeEventHandler<HTMLInputElement>}
            placeholder="입력"
          />
          <S.UnitLabel>원</S.UnitLabel>
        </>
      );
    }
    if (type === 'dropdown') {
      return (
        <Dropdown
          options={[
            { value: '', label: '선택하세요' },
            { value: 'category1', label: '분류 1' },
            { value: 'category2', label: '분류 2' },
            { value: 'category3', label: '분류 3' },
            { value: 'category4', label: '분류 4' },
            { value: 'category4', label: '분류 4' },
            { value: 'category4', label: '분류 4' },
          ]}
        />
      );
    }

    const placeholderText = type === 'confirmPassword' ? '비밀번호 확인' : '입력';
    return (
      <S.InputField
        {...props}
        type={type === 'confirmPassword' ? 'password' : type}
        onChange={
          type === 'confirmPassword'
            ? handleConfirmPasswordChange
            : handlePasswordChange
        }
        placeholder={placeholderText}
      />
    );
  };

  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      {type !== 'dropdown' && (
        <S.InputFrame hasError={!!error}>
          {renderInput()}
        </S.InputFrame>
      )}
      {type === 'dropdown' && renderInput()}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
