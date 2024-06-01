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
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);
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

  const handleOptionSelect = (option: { value: string; label: string }) => {
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
                <S.Option key={option.value} onClick={() => handleOptionSelect(option)}>
                  {option.label}
                </S.Option>
              ))}
            </S.OptionsContainer>
          )}
          <S.SelectedValue
            onClick={toggleDropdown}
            className={isOpen ? 'open' : ''}
          >
            {selectedOption ? selectedOption.label : '선택'}
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
