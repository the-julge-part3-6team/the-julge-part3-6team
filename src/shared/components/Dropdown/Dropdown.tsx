
import React, { useState } from 'react';
import * as S from './Dropdown.styled';
import Image from 'next/image';
import TriangleIcon from '@/assets/triangle.svg';

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <S.InputContainer>
      <S.InputFrame>
        <S.DropdownContainer>
          {isOpen && (
            <S.OptionsContainer>
              {options.map(option => (
                <S.Option key={option.value}>{option.label}</S.Option>
              ))}
            </S.OptionsContainer>
          )}
          <S.SelectedValue
            onClick={toggleDropdown}
            className={isOpen ? 'open' : ''}
          >
            <div className="dropdown-arrow">
              <Image src={TriangleIcon} alt="dropdown" />
            </div>
          </S.SelectedValue>
        </S.DropdownContainer>
      </S.InputFrame>
    </S.InputContainer>
  );
};

export default Dropdown;
