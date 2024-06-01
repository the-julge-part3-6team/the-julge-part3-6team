import React, { useState, useEffect, useRef } from 'react';
import * as S from './Dropdown.styled';
import Image from 'next/image';
import TriangleIcon from '@/assets/triangle.svg';

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.InputContainer>
      <S.InputFrame ref={dropdownRef}>
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
