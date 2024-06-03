import React, { useState, useEffect, useRef } from 'react';
import * as S from './Dropdown.styled';
import Image from 'next/image';
import TriangleIcon from '@/assets/triangle.svg';

interface DropdownProps {
  options: string[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.InputContainer>
      <S.InputFrame ref={dropdownRef}>
        <S.DropdownContainer>
          {isOpen && (
            <S.OptionsContainer>
              {options.map(option => (
                <S.Option
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </S.Option>
              ))}
            </S.OptionsContainer>
          )}
          <S.SelectedValue
            onClick={toggleDropdown}
            className={isOpen ? 'open' : ''}
          >
            {selectedOption ? selectedOption : '선택'}
            <S.DropdownArrow isOpen={isOpen} className={isOpen ? 'open' : ''}>
              <Image src={TriangleIcon} alt="dropdown" />
            </S.DropdownArrow>
          </S.SelectedValue>
        </S.DropdownContainer>
      </S.InputFrame>
    </S.InputContainer>
  );
};

export default Dropdown;
