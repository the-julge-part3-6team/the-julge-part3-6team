import React, { useState, useEffect } from 'react';
import * as S from './DropDown.styled';
import '../../../assets/fonts/font.css';
import Triangle from '../../../assets/triangle.svg';

function DropDown({
  items,
  type,
  messageBody,
  setMessageBody,
  setSelectedFont,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  useEffect(() => {
    setSelectedFont(messageBody.font);
  }, [messageBody.font]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setSelectedFont(item);
    setMessageBody(() => ({
      ...messageBody,
      [type]: item,
    }));
  };

  const handleSelectedFont = (font) => {
    setSelectedItem(font);
    setSelectedFont(font);
    setMessageBody({ ...messageBody, font });
    setIsOpen(false);
  };

  return (
    <S.DropDownLayout>
      <S.DropDownInput
        onClick={toggleDropDown}
        style={{ fontFamily: messageBody.font }}
      >
        {selectedItem}
        <img
          src={isOpen ? ArrowUp : ArrowDown}
          alt='arrow-icon'
          className='dropdown-arrow'
        />
      </S.DropDownInput>
      {isOpen && (
        <S.DropDownItemList>
          {items.map((item) => (
            <S.DropDownItem key={item}>
              <S.DropDownItemHover
                onClick={() => {
                  type === 'font'
                    ? handleSelectedFont(item)
                    : handleItemClick(item);
                }}
                style={{ fontFamily: item }}
              >
                {item}
              </S.DropDownItemHover>
            </S.DropDownItem>
          ))}
        </S.DropDownItemList>
      )}
    </S.DropDownLayout>
  );
}

export default DropDown;
