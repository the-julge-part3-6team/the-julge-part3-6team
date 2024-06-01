import React, { useState } from 'react';
import * as S from './Dropdown.styled';

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  error?: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputFrame hasError={!!error}>
        <S.DropdownContainer>
          <S.SelectedValue onClick={toggleDropdown}>
            {selectedValue || '선택하세요'}
          </S.SelectedValue>
          {isOpen && (
            <S.OptionsContainer>
              {options.map(option => (
                <S.Option key={option.value} onClick={() => handleOptionClick(option.value)}>
                  {option.label}
                </S.Option>
              ))}
            </S.OptionsContainer>
          )}
        </S.DropdownContainer>
      </S.InputFrame>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Dropdown;
