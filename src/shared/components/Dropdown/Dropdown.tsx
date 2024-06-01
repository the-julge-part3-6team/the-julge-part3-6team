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
      <S.InputFrame>
        <S.DropdownContainer>
          <S.SelectedValue onClick={toggleDropdown}>
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
  );
};

export default Dropdown;
