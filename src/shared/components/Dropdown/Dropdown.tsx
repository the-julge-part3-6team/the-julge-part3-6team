import React, { useState } from 'react';
import * as S from './Dropdown.styled';
import TriangleIcon from '@/assets/triangle.svg'; 

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  error?: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, error }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <S.InputContainer>
      <S.InputFrame hasError={!!error}>
        <S.DropdownContainer>
          <S.SelectedValue onClick={toggleDropdown}>
            {/* 드롭다운 상태에 따라 이미지가 회전되도록 조건부 스타일을 적용합니다. */}
            <img
              src={TriangleIcon}
              alt='triangle-icon'
              className={isOpen ? 'dropdown-arrow open' : 'dropdown-arrow'}
            />
          </S.SelectedValue>
          {isOpen && (
            <S.OptionsContainer>
              {options.map(option => (
                <S.Option key={option.value}>{option.label}</S.Option>
              ))}
            </S.OptionsContainer>
          )}
        </S.DropdownContainer>
      </S.InputFrame>
    </S.InputContainer>
  );
};

export default Dropdown;
